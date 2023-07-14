//
// This script downloads and generates icons and icon metadata.
//
import chalk from 'chalk';
import commandLineArgs from 'command-line-args';
import copy from 'recursive-copy';
import { deleteAsync } from 'del';
import download from 'download';
import fm from 'front-matter';
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { stat, readFile, writeFile } from 'fs/promises';
import { globby } from 'globby';
import path from 'path';
import SVGSpriter from 'svg-sprite';

/**
 * Default icons libraries to include in the build.
 *
 * Please be sure to update the icons documentation if you change this list.
 * Also, be sure to include the corresponding library file in the `src/components/icon` directory, e.g. `src/icon/library.default.ts`.
 * Finally, be sure that the new library is included in the registry in the file `src/components/icon/library.ts`.
 */
const libraryMap = {
  'bootstrap-icons': {
    libraryName: 'default',
    origin: 'https://github.com/twbs/icons/archive/v{version}.zip'
  },
  'material-icons': {
    libraryName: 'material',
    origin: 'https://github.com/material-icons/material-icons/archive/refs/heads/master.zip'
  }
};
const defaultLibraries = ['bootstrap-icons', 'material-icons'];

const { outdir, includeLibrary } = commandLineArgs(
  [
    { name: 'outdir', type: String },
    { name: 'include-library', defaultValue: defaultLibraries, type: String, multiple: true }
  ],
  { camelCase: true }
);

const iconDir = path.join(outdir, '/assets/icons');

(async () => {
  // Contains the metadata for all icons that will be written to the icons.json file
  let iconsToJson = [];

  // Build the Bootstrap Icons (Default library)
  // -------------------------
  const bootstrap = 'bootstrap-icons';
  if (includeLibrary.includes(bootstrap)) {
    try {
      const iconPackageData = JSON.parse(readFileSync('./node_modules/bootstrap-icons/package.json', 'utf8'));
      const version = iconPackageData.version;
      const srcPath = `./.cache/icons/icons-${version}`;
      const origin = libraryMap[bootstrap].origin;
      const url = origin.replace('{version}', version);
      let licenseFilename = 'LICENSE.md';

      const getLicenseFilename = async path => {
        try {
          await stat(`${srcPath}/LICENSE.md`);
          return 'LICENSE.md';
        } catch {}
        try {
          await stat(`${srcPath}/LICENSE`);
          return 'LICENSE';
        } catch {}
        throw new Error('Could not find license file');
      };

      try {
        // await stat(`${srcPath}/LICENSE.md`);
        licenseFilename = await getLicenseFilename(srcPath);
        console.log(`Generating ${bootstrap} from cache`);
      } catch {
        // Download the source from GitHub (since not everything is published to NPM)
        console.log(`Downloading and extracting ${bootstrap} ${version} 📦`);
        await download(url, './.cache/icons', { extract: true });
        licenseFilename = await getLicenseFilename(srcPath);
      }

      // Copy icons
      console.log(`Copying ${bootstrap} icons and license`);
      const libraryIconDir = path.join(iconDir, libraryMap[bootstrap].libraryName);
      await deleteAsync([libraryIconDir]);
      mkdirSync(libraryIconDir, { recursive: true });
      await Promise.all([
        copy(`${srcPath}/icons`, libraryIconDir),
        copy(`${srcPath}/${licenseFilename}`, path.join(libraryIconDir, 'LICENSE.md')),
        copy(`${srcPath}/bootstrap-icons.svg`, `./docs/assets/icons/${libraryMap[bootstrap].libraryName}-sprite.svg`, {
          overwrite: true
        })
      ]);

      // Generate metadata
      console.log(`Generating ${bootstrap} metadata`);
      let numIcons = 0;
      const files = await globby(`${srcPath}/docs/content/icons/**/*.md`);
      const metadata = await Promise.all(
        files.map(async file => {
          const name = path.basename(file, path.extname(file));
          const data = fm(await readFile(file, 'utf8')).attributes;
          numIcons++;
          return {
            name,
            title: data.title,
            categories: data.categories,
            tags: data.tags,
            library: libraryMap[bootstrap].libraryName
          };
        })
      );

      // await writeFile(path.join(iconDir, `${bootstrap}.json`), JSON.stringify(metadata, null, 2), 'utf8');
      iconsToJson = [...iconsToJson, ...metadata];
      console.log(chalk.cyan(`Successfully processed ${bootstrap}! ${numIcons} icons ✨\n`));
    } catch (err) {
      console.error(err);
    }
    // -------------------------
    // END Build the Bootstrap Icons
  }

  // Build the Material Icons
  // -------------------------
  const material = 'material-icons';
  if (includeLibrary.includes(material)) {
    try {
      const srcPath = `./.cache/icons/material-icons-master`;
      const url = libraryMap[material].origin;
      const licenseFilename = 'LICENSE';

      try {
        await stat(`${srcPath}/${licenseFilename}`);
        console.log(`Generating ${material} from cache`);
      } catch {
        // Download the source from GitHub (since not everything is published to NPM)
        console.log(`Downloading and extracting ${material} latest 📦`);
        await download(url, './.cache/icons', { extract: true });

        // Used later to generate the sprite
        const spriter = new SVGSpriter({ mode: { symbol: true } });

        // Copy all the svg files in `${srcPath}/svg` from the subdirectories to a single directory called `${srcPath}svg-icons`
        const svgFiles = await globby(`${srcPath}/svg/**/*.svg`);
        await Promise.all(
          svgFiles.map(async file => {
            // Get the filename and the last directory name
            const filename = path.basename(file);
            const iconId = path.basename(path.dirname(file));
            // Copy the file to the new directory, the filename is prefixed with the last directory name
            // outline icons are renamed, so they won't have the outline suffix, making it the default icon
            const destFilename = `${iconId}${filename.includes('outline') ? '.svg' : `_${filename}`}`;
            const destFile = path.join(srcPath, 'svg-icons', `${destFilename}`);
            await copy(file, destFile, { overwrite: true });
            // Add the file to the spriter
            spriter.add(destFile, destFilename, readFileSync(destFile, 'utf8'));
          })
        );

        // Generate a svg sprite using the svg files in `${srcPath}/svg-icons`
        // Using the command `npx svg-symbol sprite -i ${srcPath}/svg-icons -o ${srcPath}/material-icons.svg`
        console.log(`Generating ${material} svg sprite`);
        spriter.compile((error, result, data) => {
          if (error) {
            console.error('❗❗ Error while generating the sprite', error);
            return;
          }

          for (const type of Object.values(result.symbol)) {
            writeFileSync(`${srcPath}/material-icons.svg`, type.contents, 'utf8');
          }
        });
      }

      // Copy icons
      console.log(`Copying ${material} icons and license`);
      const libraryIconDir = path.join(iconDir, libraryMap[material].libraryName);
      await deleteAsync([libraryIconDir]);
      mkdirSync(libraryIconDir, { recursive: true });
      await Promise.all([
        copy(`${srcPath}/svg-icons`, libraryIconDir),
        copy(`${srcPath}/${licenseFilename}`, path.join(libraryIconDir, 'LICENSE.md')),
        copy(`${srcPath}/material-icons.svg`, `./docs/assets/icons/${libraryMap[material].libraryName}-sprite.svg`, {
          overwrite: true
        })
      ]);

      // Generate metadata
      console.log(`Generating ${material} metadata`);
      // Used later to generate the metadata
      const iconVariantsMap = {};
      const svgFiles = await globby(`${srcPath}/svg/**/*.svg`);
      await Promise.all(
        svgFiles.map(async file => {
          // The filename is the icon variant
          const iconVariant = path.basename(file, path.extname(file));
          // The last directory name is the icon name
          const iconName = path.basename(path.dirname(file));
          // Add the icon variant to the map
          if (!iconVariantsMap[iconName]) iconVariantsMap[iconName] = [];
          if (!iconVariant.includes('outline')) iconVariantsMap[iconName].push(iconVariant.replace('.svg', ''));
        })
      );

      const iconData = JSON.parse(readFileSync(path.join(srcPath, 'data.json'), 'utf8'));
      const metadata = iconData.icons.map(icon => ({
        title: icon.name.split('_').join(' '),
        ...icon,
        library: libraryMap[material].libraryName,
        variants: iconVariantsMap[icon.name] || []
      }));

      // await writeFile(path.join(iconDir, `${material}.json`), JSON.stringify(metadata, null, 2), 'utf8');
      iconsToJson = [...iconsToJson, ...metadata];
      console.log(chalk.cyan(`Successfully processed ${material}! ${metadata.length} icons ✨\n`));
    } catch (err) {
      console.error(err);
    }
  }
  // -------------------------
  // END Build the Material Icons

  // Generate the icons.json file
  await writeFile(path.join(iconDir, `icons.json`), JSON.stringify(iconsToJson, null, 2), 'utf8');
})();
