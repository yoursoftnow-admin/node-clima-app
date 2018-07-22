const axios = require('axios');
const getWeather = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6be524b45d0b42d3890663fa86312731`);
    // console.log(resp.data.name);
    if (resp.data.cod != 200) {
        throw new Error(`No se ha encontrado clima con latitud=${lat} y longitud=${lng}`)
    }
    return resp.data.main;
}

module.exports = {
    getWeather
}