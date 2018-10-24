import sounds from './sounds';
const keys = ['w', 'e', 'r', 'u', 'i', 'a', 's', 'd', 'f', 'j', 'k', 'l', ';', 'Spacebar'];

const KeyDisplay = (arr1, arr2) => {
    const object = {};
    for (let i = 0; i < arr1.length; i++) {
        object[arr1[i]] = arr2[i];
    }
    return object;
};

const keyDisplay = KeyDisplay(keys, sounds);
export default keyDisplay;
