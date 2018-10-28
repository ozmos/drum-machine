import tablaSounds from './tablaSounds';
import keySoundsObj from './keySoundsObj';

const keys = ['a', 's', 'd', 'f', 'g', 'j', 'k', 'l', ';', 'Spacebar'];
const title = 'Tabla Kit';

const tablaKeys = keySoundsObj(title, keys, tablaSounds);
export default tablaKeys;
