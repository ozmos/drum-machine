import boxSounds from './boxSounds';
import keySoundsObj from './keySoundsObj';

const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
const title = ['Beat Box Kit'];

const boxKeys = keySoundsObj(title, keys, boxSounds);
export default boxKeys;
