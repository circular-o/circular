const DEFAULT_DOCS_CONFIGURATION = {
  // Configuration variables related to the package
  packagesCdnUrl: `https://cdn.jsdelivr.net/npm`,
  packageOrganization: '@jeysonj2',
  packageName: 'circular',
  // Leave this as latest to get the latest version of the package, otherwise specify a version number
  // Note: The version number must be a valid semver version
  // Note: If you leave it as "latest" and you are using the metadata plugin, the version number will be automatically updated
  packageVersion: 'latest',
  // Please check below the init hook to see how this variable is updated
  docsWebsite: 'https://circular.decodeit.co',
  docsNextWebsite: 'https://circular-next.decodeit.co',
  repoUrl: 'https://github.com/circular-o/circular',
  twitterUser: 'circular__o',
  sponsorUrl: 'https://github.com/sponsors/claviska',
  // Configuration variables related to the react playground
  reactVersion: '18.2.0',
  reactCdnUrl: `https://cdn.skypack.dev`,
  // Library name to be used in the docs
  libraryName: 'Circular'
};

const _circularDocsConfigStorageMap = {};
const circularDocsStorage = {
  getItem: key => _circularDocsConfigStorageMap[key],
  setItem: (key, value) => (_circularDocsConfigStorageMap[key] = value)
};

// Get config vars from the sessionStore
const getDocsConfig = () => {
  // The package data is stored in the sessionStore by the metadata plugin, please see the metadata.js file
  const packageData = circularDocsStorage.getItem('o-package-data')
    ? JSON.parse(circularDocsStorage.getItem('o-package-data'))
    : {};

  return packageData;
};

// Store package data in session storage so we can access it from the playground
const setDocsConfig = newConfig => {
  const oldConfig = getDocsConfig();
  const config = { ...DEFAULT_DOCS_CONFIGURATION, ...oldConfig, ...newConfig };

  // Updating the variables which are composed by other package data
  const packageUrlNoVersion = `${config.packagesCdnUrl}/${config.packageOrganization}/${config.packageName}`;
  const packageUrl = `${config.packagesCdnUrl}/${config.packageOrganization}/${config.packageName}@${config.packageVersion}`;
  const reactUrl = `${config.reactCdnUrl}/react@${config.reactVersion}`;
  const reactPackageUrl = `${config.reactCdnUrl}/${config.packageOrganization}/${config.packageName}@${config.packageVersion}`;

  circularDocsStorage.setItem(
    'o-package-data',
    JSON.stringify({
      ...config,
      packageUrlNoVersion,
      packageUrl,
      reactUrl,
      reactPackageUrl
    })
  );
};

setDocsConfig({});

module.exports = {
  DEFAULT_DOCS_CONFIGURATION,
  getDocsConfig,
  setDocsConfig
};
