import eightOSounds from './eightOSounds';
import keySoundsObj from './keySoundsObj';

const keys = ['e', 'r', 'u', 'i', 'a', 's', 'd', 'f', 'j', 'k', 'l', ';', 'Spacebar'];
const title = '808 Kit';
const subtitle = 'Boom Bap Pow';

const eightOKeys = keySoundsObj(title, subtitle, keys, eightOSounds);
export default eightOKeys;
