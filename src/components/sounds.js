function importAll(r) {
    return r.keys().map(r);
}

const sounds = importAll(require.context('./808Kit/', false, /\.(mp3)$/));

export default sounds;