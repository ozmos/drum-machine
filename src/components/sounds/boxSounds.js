function importAll(r) {
    return r.keys().map(r);
}

const tablaSounds = importAll(require.context('./beatBoxClips/', false, /\.(mp3)$/));

export default tablaSounds;
