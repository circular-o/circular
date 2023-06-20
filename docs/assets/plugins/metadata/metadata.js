(() => {
  const isDev = location.hostname === 'localhost';
  const isNext = location.hostname === 'next.circular-o.de';
  const customElements = fetch('dist/custom-elements.json')
    .then(res => res.json())
    .catch(err => console.error(err));

  // Global metadata object, it will be populated later in the docsify lifecycle
  let metadata = {};

  const getCustomElementsMetadata = async () => {
    return await customElements;
  };

  function createPropsTable(props) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Reflects</th>
          <th>Type</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        ${props
          .map(prop => {
            const hasAttribute = !!prop.attribute;
            const isAttributeDifferent = prop.attribute !== prop.name;
            let attributeInfo = '';

            if (!hasAttribute) {
              attributeInfo = `<br><small>(property only)</small>`;
            } else if (isAttributeDifferent) {
              attributeInfo = `
                <br>
                <o-tooltip content="This attribute is different from its property">
                  <small>
                    <code class="nowrap">
                      ${escapeHtml(prop.attribute)}
                    </code>
                  </small>
                </o-tooltip>`;
            }

            return `
              <tr>
                <td>
                  <code class="nowrap">${escapeHtml(prop.name)}</code>
                  ${attributeInfo}
                </td>
                <td>
                  ${escapeHtml(prop.description)}
                </td>
                <td style="text-align: center;">${
                  prop.reflects ? '<o-icon label="yes" name="check-lg"></o-icon>' : ''
                }</td>
                <td>${prop.type?.text ? `<code>${escapeHtml(prop.type?.text || '')}</code>` : '-'}</td>
                <td>${prop.default ? `<code>${escapeHtml(prop.default)}</code>` : '-'}</td>
              </tr>
            `;
          })
          .join('')}

          <tr>
            <td class="nowrap"><code>updateComplete</code></td>
            <td>
              A read-only promise that resolves when the component has
              <a href="%DOCS-WEBSITE%/getting-started/usage?id=component-rendering-and-updating">finished updating</a>.
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
    `;

    return table.outerHTML;
  }

  function createEventsTable(events) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th data-flavor="html">Name</th>
          <th data-flavor="react">React Event</th>
          <th>Description</th>
          <th>Event Detail</th>
        </tr>
      </thead>
      <tbody>
        ${events
          .map(
            event => `
              <tr>
                <td data-flavor="html"><code class="nowrap">${escapeHtml(event.name)}</code></td>
                <td data-flavor="react"><code class="nowrap">${escapeHtml(event.reactName)}</code></td>
                <td>${escapeHtml(event.description)}</td>
                <td>${event.type?.text ? `<code>${escapeHtml(event.type?.text)}` : '-'}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createMethodsTable(methods) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Arguments</th>
        </tr>
      </thead>
      <tbody>
        ${methods
          .map(
            method => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(method.name)}()</code></td>
                <td>${escapeHtml(method.description)}</td>
                <td>
                  ${
                    method.parameters?.length
                      ? `
                        <code>${escapeHtml(
                          method.parameters.map(param => `${param.name}: ${param.type?.text || ''}`).join(', ')
                        )}</code>
                      `
                      : '-'
                  }
                </td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createSlotsTable(slots) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${slots
          .map(
            slot => `
              <tr>
                <td class="nowrap">${slot.name ? `<code>${escapeHtml(slot.name)}</code>` : '(default)'}</td>
                <td>${escapeHtml(slot.description)}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createCustomPropertiesTable(styles) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        ${styles
          .map(
            style => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(style.name)}</code></td>
                <td>${escapeHtml(style.description)}</td>
                <td>${style.default ? `<code>${escapeHtml(style.default)}</code>` : ''}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createPartsTable(parts) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${parts
          .map(
            part => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(part.name)}</code></td>
                <td>${escapeHtml(part.description)}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createAnimationsTable(animations) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${animations
          .map(
            animation => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(animation.name)}</code></td>
                <td>${escapeHtml(animation.description)}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createDependenciesList(targetComponent, allComponents) {
    const ul = document.createElement('ul');
    const dependencies = [];

    // Recursively fetch sub-dependencies
    function getDependencies(tag) {
      const component = allComponents.find(c => c.tagName === tag);
      if (!component || !Array.isArray(component.dependencies)) {
        return;
      }

      component.dependencies?.forEach(dependentTag => {
        if (!dependencies.includes(dependentTag)) {
          dependencies.push(dependentTag);
        }
        getDependencies(dependentTag);
      });
    }

    getDependencies(targetComponent);
    dependencies.sort().forEach(tag => {
      const li = document.createElement('li');
      li.innerHTML = `<code>&lt;${tag}&gt;</code>`;
      ul.appendChild(li);
    });

    return ul.outerHTML;
  }

  function escapeHtml(html) {
    if (!html) {
      return '';
    }
    return html
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" rel="noopener noreferrer" target="_blank">$1</a>')
      .replace(/`(.*?)`/g, '<code>$1</code>');
  }

  function getAllComponents(componentsMetadata) {
    const allComponents = [];
    componentsMetadata.modules?.forEach(module => {
      module.declarations?.forEach(declaration => {
        if (declaration.customElement) {
          // Generate the dist path based on the src path and attach it to the component
          declaration.path = module.path.replace(/^src\//, 'dist/').replace(/\.ts$/, '.js');

          allComponents.push(declaration);
        }
      });
    });

    return allComponents;
  }

  function getComponent(componentsMetadata, tagName) {
    return getAllComponents(componentsMetadata).find(component => component.tagName === tagName);
  }

  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    hook.mounted(async () => {
      const { packageVersion, repoUrl, twitterUser, sponsorUrl } = window.getDocsConfig();

      metadata = await getCustomElementsMetadata();
      const target = document.querySelector('.app-name');

      // Add version
      const version = document.createElement('div');
      version.classList.add('sidebar-version');
      version.textContent = isDev ? 'Development' : isNext ? 'Next' : packageVersion;
      target.appendChild(version);

      // Add repo buttons
      const buttons = document.createElement('div');
      buttons.classList.add('sidebar-buttons');
      buttons.innerHTML = `
        <o-button size="small" class="repo-button repo-button--sponsor" href="${sponsorUrl}" target="_blank">
          <o-icon slot="prefix" name="heart"></o-icon> Sponsor
        </o-button>
        <o-button size="small" class="repo-button repo-button--github" href="${repoUrl}/stargazers" target="_blank">
          <o-icon slot="prefix" name="github"></o-icon> Star
        </o-button>
        <o-button size="small" class="repo-button repo-button--twitter" href="https://twitter.com/${twitterUser}" target="_blank">
          <o-icon slot="prefix" name="twitter"></o-icon> Follow
        </o-button>
      `;
      target.appendChild(buttons);
    });

    hook.beforeEach(async (content, next) => {
      const { packageOrganization, packageName, repoUrl, twitterUser, sponsorUrl, packageUrlNoVersion, packageUrl } =
        window.getDocsConfig();

      metadata = await getCustomElementsMetadata();

      // Handle [component-header] tags
      content = content.replace(/\[component-header:([a-z-]+)\]/g, (match, tag) => {
        const component = getComponent(metadata, tag);
        let result = '';

        if (!component) {
          console.error(`Component not found in metadata: ${tag}`);
          return next(content);
        }

        let badgeType = 'neutral';
        if (component.status === 'stable') {
          badgeType = 'primary';
        }
        if (component.status === 'experimental') {
          badgeType = 'warning';
        }
        if (component.status === 'planned') {
          badgeType = 'neutral';
        }
        if (component.status === 'deprecated') {
          badgeType = 'danger';
        }

        result += `
          <div class="component-header">
            <div class="component-header__tag">
              <code>&lt;${component.tagName}&gt; | ${component.title ?? component.name}</code>
            </div>

            <div class="component-header__info">
              <o-badge variant="neutral" pill>
                Since ${component.since || '?'}
              </o-badge>

              <o-badge variant="${badgeType}" pill style="text-transform: capitalize;">
                ${component.status}
              </o-badge>
            </div>

            <div class="component-header__summary">
              ${component.summary ? `<p>${component.summary}</p>` : ''}
            </div>
          </div>
        `;

        return result.replace(/^ +| +$/gm, '');
      });

      // Handle [component-metadata] tags
      content = content.replace(/\[component-metadata:([a-z-]+)\]/g, (match, tag) => {
        const component = getComponent(metadata, tag);
        let result = '';

        if (!component) {
          console.error(`Component not found in metadata: ${tag}`);
          return next(content);
        }

        // Remove members that are private or don't have a description
        const members = component.members?.filter(member => member.description && member.privacy !== 'private');
        const methods = members?.filter(prop => prop.kind === 'method' && prop.privacy !== 'private');
        const props = members?.filter(prop => {
          // Look for a corresponding attribute
          const attribute = component.attributes?.find(attr => attr.fieldName === prop.name);
          if (attribute) {
            prop.attribute = attribute.name || attribute.fieldName;
          }

          return prop.kind === 'field' && prop.privacy !== 'private';
        });

        if (component.path) {
          /* prettier-ignore */
          result += `
            ## Importing

            If you're using the autoloader or the traditional loader, you can ignore this section. Otherwise, feel free to
            use any of the following snippets to [cherry pick](getting-started/installation#cherry-picking) this component.

            <o-tab-group>
            <o-tab slot="nav" panel="script">Script</o-tab>
            <o-tab slot="nav" panel="import">Import</o-tab>
            <o-tab slot="nav" panel="bundler">Bundler</o-tab>
            <o-tab slot="nav" panel="react">React</o-tab>

            <o-tab-panel name="script">\n
            To import this component from [the CDN](${packageUrlNoVersion}) using a script tag:

            \`\`\`html
            <script type="module" src="${packageUrl}/dist/${component.path}"></script>
            \`\`\`
            </o-tab-panel>

            <o-tab-panel name="import">\n
            To import this component from [the CDN](${packageUrlNoVersion}) using a JavaScript import:

            \`\`\`js
            import '${packageUrl}/dist/${component.path}';
            \`\`\`
            </o-tab-panel>

            <o-tab-panel name="bundler">\n
            To import this component using [a bundler](/getting-started/installation#bundling):
            \`\`\`js
            import '${packageOrganization}/${packageName}/dist/${component.path}';
            \`\`\`
            </o-tab-panel>

            <o-tab-panel name="react">\n
            To import this component as a [React component](/frameworks/react):
            \`\`\`js
            import { ${component.name} } from '${packageOrganization}/${packageName}/dist/react';
            \`\`\`
            </o-tab-panel>
            </o-tab-group>

            <div class="sponsor-callout">
              <p>
                Circular is designed, developed, and maintained by <a href="https://twitter.com/${twitterUser}" target="_blank">Circular Team</a>.
                Please sponsor my open source work on GitHub. Your support will keep this project alive and growing!
              </p>

              <p>
                <o-button class="repo-button repo-button--sponsor" href="${sponsorUrl}" target="_blank">
                  <o-icon slot="prefix" name="heart"></o-icon> Sponsor <span class="sponsor-callout__secondary-label">Development</span>
                </o-button>

                <o-button class="repo-button repo-button--github" href="${repoUrl}/stargazers" target="_blank">
                  <o-icon slot="prefix" name="github"></o-icon> Star <span class="sponsor-callout__secondary-label">on GitHub</span>
                </o-button>

                <o-button class="repo-button repo-button--twitter" href="https://twitter.com/${twitterUser}" target="_blank">
                  <o-icon slot="prefix" name="twitter"></o-icon> Follow <span class="sponsor-callout__secondary-label">on Twitter</span>
                </o-button>
              </p>
            </div>
          `;
        }

        if (component.slots?.length) {
          result += `
            ## Slots
            ${createSlotsTable(component.slots)}

            _Learn more about [using slots](/getting-started/usage#slots)._
          `;
        }

        if (props?.length) {
          result += `
            ## Attributes & Properties
            ${createPropsTable(props)}

            _Learn more about [attributes and properties](/getting-started/usage#properties)._
          `;
        }

        if (component.events?.length) {
          result += `
            ## Events
            ${createEventsTable(component.events)}

            _Learn more about [listening to events](/getting-started/usage#events)._
          `;
        }

        if (methods?.length) {
          result += `
            ## Methods

            ${createMethodsTable(methods)}

            _Learn more about [calling methods](/getting-started/usage#methods)._
          `;
        }

        if (component.cssProperties?.length) {
          result += `
            ## CSS Custom Properties
            ${createCustomPropertiesTable(component.cssProperties)}

            _Learn more about [customizing CSS Custom Properties](/getting-started/customizing#custom-properties)._
          `;
        }

        if (component.cssParts?.length) {
          result += `
            ## CSS Parts
            ${createPartsTable(component.cssParts)}

            _Learn more about [customizing CSS Parts](/getting-started/customizing#component-parts)._
          `;
        }

        if (component.animations?.length) {
          result += `
            ## Animations
            ${createAnimationsTable(component.animations)}

            _Learn more about [customizing animations](/getting-started/customizing#animations)._
          `;
        }

        if (component.dependencies?.length) {
          result += `
            ## Dependencies

            This component automatically imports the following dependencies.

            ${createDependenciesList(component.tagName, getAllComponents(metadata))}
          `;
        }

        // Strip whitespace so markdown doesn't process things as code blocks
        return result.replace(/^ +| +$/gm, '');
      });

      next(content);
    });

    // Wrap tables so we can scroll them horizontally when needed
    hook.doneEach(() => {
      const content = document.querySelector('.content');
      const tables = [...content.querySelectorAll('table')];

      tables.forEach(table => {
        table.outerHTML = `
          <div class="table-wrapper">
            ${table.outerHTML}
          </div>
        `;
      });
    });
  });
})();
