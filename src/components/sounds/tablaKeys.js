import tablaSounds from './tablaSounds';
import keySoundsObj from './keySoundsObj';

const keys = ['a', 's', 'd', 'f', 'g', 'j', 'k', 'l', ';', 'Spacebar'];
const title = 'Tabla Kit';
const subtitle = 'Thom ki ta ki tha ta';
const tablaKeys = keySoundsObj(title, subtitle, keys, tablaSounds);
export default tablaKeys;
