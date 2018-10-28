function importAll(r) {
    return r.keys().map(r);
}

const tablaSounds = importAll(require.context('./tablaKit/', false, /\.(mp3)$/));

export default tablaSounds;
