function importAll(r) {
    return r.keys().map(r);
}

const mooSounds = importAll(require.context('./mooKit/', false, /\.(mp3)$/));

export default mooSounds;
