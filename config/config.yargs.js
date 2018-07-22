const argv = require('yargs').options({
    direccion: {
        demand: true,
        desc: 'Direcciond de la ciudad',
        alias: 'd'
    }
}).argv;


module.exports = {
    argv
}