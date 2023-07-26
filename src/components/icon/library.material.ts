import { getBasePath } from '../../utilities/base-path.js';
import type { IconLibrary } from './library.js';

const library: IconLibrary = {
  name: 'material',
  resolver: name => getBasePath(`assets/icons/material/${name}.svg`),
  mutator: svg => svg.setAttribute('fill', 'currentColor')
};

export default library;
