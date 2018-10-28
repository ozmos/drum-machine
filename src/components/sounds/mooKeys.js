import mooSounds from './mooSounds';
import keySoundsObj from './keySoundsObj';

const keys = ['s', 'd', 'f', 'j', 'k', 'l'];
const title = 'Moo Kit';

const mooKeys = keySoundsObj(title, keys, mooSounds);
export default mooKeys;
