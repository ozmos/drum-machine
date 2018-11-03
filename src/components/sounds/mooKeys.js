import mooSounds from './mooSounds';
import keySoundsObj from './keySoundsObj';

const keys = ['s', 'd', 'f', 'j', 'k', 'l'];
const title = 'Moo Kit';
const subtitle = 'Mooooo';
const mooKeys = keySoundsObj(title, subtitle, keys, mooSounds);
export default mooKeys;
