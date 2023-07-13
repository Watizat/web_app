import IcoMoon, { IconProps } from 'react-icomoon';
import iconSet from './selection.json';

function Icon(props: IconProps) {
  return <IcoMoon iconSet={iconSet} {...props} />;
}

export default Icon;
