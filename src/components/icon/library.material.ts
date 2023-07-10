import { getBasePath } from '../../utilities/base-path';
import type { IconLibrary } from './library';

const library: IconLibrary = {
  name: 'material',
  resolver: name => getBasePath(`assets/icons/material/${name}.svg`),
  mutator: svg => svg.setAttribute('fill', 'currentColor')
};

export default library;
