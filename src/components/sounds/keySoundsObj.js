const keySoundsObj = (name, arr1, arr2) => {
    const object = {title: name};
    for (let i = 0; i < arr1.length; i++) {
        object[arr1[i]] = arr2[i];
    }
    return object;
};

export default keySoundsObj;
