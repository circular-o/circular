(() => {
  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    function getTheme() {
      return localStorage.getItem('theme') || 'auto';
    }

    function isDark() {
      if (theme === 'auto') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return theme === 'dark';
    }

    function setTheme(newTheme) {
      const noTransitions = Object.assign(document.createElement('style'), {
        textContent: '* { transition: none !important; }'
      });

      theme = newTheme;
      localStorage.setItem('theme', theme);

      // Update the UI
      [...menu.querySelectorAll('o-menu-item')].map(item => (item.checked = item.getAttribute('value') === theme));
      menuIcon.name = isDark() ? 'moon' : 'sun';

      // Toggle the dark mode class without transitions
      document.body.appendChild(noTransitions);
      requestAnimationFrame(() => {
        document.documentElement.classList.toggle('o-theme-dark', isDark());
        requestAnimationFrame(() => document.body.removeChild(noTransitions));
      });

      // Update the logo
      setLogo();
    }

    function setLogo() {
      // Update sidebar app image
      const sidebarAppImage = document.querySelector('.sidebar .app-name .app-name-link img');
      if (sidebarAppImage) {
        sidebarAppImage.src = `assets/images/circular-logo-${isDark() ? 'dark' : 'light'}.svg`;
      }

      // Update library logo
      const libraryLogo = document.querySelector('img.library-logo');
      if (libraryLogo) {
        libraryLogo.src = `assets/images/circular-logo-${isDark() ? 'dark' : 'light'}.svg`;
      }
    }

    let theme = null;
    let menuIcon = null;
    let menu = null;

    hook.mounted(() => {
      theme = getTheme();

      // Generate the theme picker dropdown
      const dropdown = document.createElement('o-dropdown');
      dropdown.classList.add('theme-picker');
      dropdown.innerHTML = `
        <o-button size="small" pill slot="trigger" caret>
          <o-icon name="sun" label="Select Theme"></o-icon>
        </o-button>
        <o-menu>
          <o-menu-label>Toggle <kbd>\\</kbd></o-menu-label>
          <o-menu-item type="checkbox" value="light">Light</o-menu-item>
          <o-menu-item type="checkbox" value="dark">Dark</o-menu-item>
          <o-divider></o-divider>
          <o-menu-item type="checkbox" value="auto">Auto</o-menu-item>
        </o-menu>
      `;
      document.querySelector('.sidebar-toggle').insertAdjacentElement('afterend', dropdown);

      // Listen for selections
      menu = dropdown.querySelector('o-menu');
      menuIcon = dropdown.querySelector('o-icon');
      menu.addEventListener('o-select', event => setTheme(event.detail.item.value));

      // Update the theme when the preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => setTheme(theme));

      // Toggle themes when pressing backslash
      document.addEventListener('keydown', event => {
        if (
          event.key === '\\' &&
          !event.composedPath().some(el => ['input', 'textarea'].includes(el?.tagName?.toLowerCase()))
        ) {
          event.preventDefault();

          setTheme(isDark() ? 'light' : 'dark');
        }
      });

      // Set the initial theme and sync the UI
      setTheme(theme);
    });

    hook.doneEach(() => {
      // Update the logo
      setLogo();
    });
  });
})();
