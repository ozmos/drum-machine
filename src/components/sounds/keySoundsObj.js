const keySoundsObj = (name, subtitle, arr1, arr2) => {
    const object = {title: name, subtitle: subtitle, array:{}};
    for (let i = 0; i < arr1.length; i++) {
        object.array[arr1[i]] = arr2[i];
    }
    return object;
};

export default keySoundsObj;