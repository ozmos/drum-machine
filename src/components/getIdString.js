const getIdString = str => {
    const regex = /(?=[\w]+.[\w]+.mp3$)[\w]+/;
    return str.match(regex);
};

export default getIdString;
