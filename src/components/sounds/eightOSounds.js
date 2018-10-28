function importAll(r) {
    return r.keys().map(r);
}

const eightOSounds = importAll(require.context('./eightOKit/', false, /\.(mp3)$/));

export default eightOSounds;
