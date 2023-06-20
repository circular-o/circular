import type { Filter } from '../filters.types';
import type LibraryBaseElement from '../../../internal/library-base-element';
import type OIcon from '../../icon/icon';

export function appendIconToElement(
  element: LibraryBaseElement,
  icon: string,
  extraProps: { [key: string]: unknown } = {}
) {
  const iconElement = Object.assign(document.createElement('o-icon'), {
    ...extraProps,
    name: icon
  });
  iconElement.setAttribute('icon', icon);
  element.appendChild(iconElement);

  return iconElement;
}

export function addPrefixSuffixToElement(
  el: LibraryBaseElement,
  filter: Filter,
  slots: string[] = ['prefix', 'suffix']
) {
  slots.forEach((slot: string) => {
    if (!filter[slot]) {
      return;
    }

    const content = filter[slot] as string;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const elType = filter[`${slot}Type`] || 'icon';
    const elTag = elType === 'icon' ? 'o-icon' : 'span';
    const iconEl = Object.assign(document.createElement(elTag), { slot });

    if (elType === 'icon') {
      (iconEl as OIcon).name = content;
    } else {
      iconEl.textContent = content;
    }

    el.appendChild(iconEl);
  });
}
