import boxSounds from './boxSounds';
import keySoundsObj from './keySoundsObj';

const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
const title = ['Beat Box Kit'];
const subtitle = 'The Fifth Element';
const boxKeys = keySoundsObj(title, subtitle, keys, boxSounds);
export default boxKeys;
