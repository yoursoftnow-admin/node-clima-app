const argv = require('./config/config.yargs').argv;
const maps = require('./maps/lugar');
const clima = require('./clima/clima');
const color = require('colors');



const getClima = async(direccion) => {
    try {
        const cords = await maps.getDataLocation(direccion);
        const temp = await clima.getWeather(cords.lat, cords.lng);
        return `El clima en ${cords.direccion} es de ${temp.temp}° celcius`;
    } catch (error) {
        return `No se logro extraer el clima de ${direccion}`
    }

}


const dir = argv.direccion;
// console.log(dir);
if (dir != undefined && dir != true) {
    let time = 0;
    const gettime = setInterval(() => {
        time += 1;
        console.log(`Han pasado ${time}s`);
    }, 1000);

    getClima(dir)
        .then(resp => {
            console.log('============================================'.green);
            console.log(`${resp}, duracion ${time}s`.yellow);
            console.log('============================================'.green);
            clearInterval(gettime);
        })
        .catch(e => console.log(e))

}