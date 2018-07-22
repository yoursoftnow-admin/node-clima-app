const axios = require('axios'); //API key google//AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ || AIzaSyB42oxmbSdKSqSewZpQ9C5OE9Tzdd_S4Ys

const getDataLocation = (dir) => {
    return new Promise((res, rej) => {
        dir = encodeURI(dir);
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${dir}&key=AIzaSyB42oxmbSdKSqSewZpQ9C5OE9Tzdd_S4Ys`)
            .then(resp => {
                //const data = JSON.stringify(resp.data.results[0], undefined, 2);
                if (resp.data.status == 'ZERO_RESULTS') {
                    rej(`No se encontro resultados para la ciudad ${ dir }`);
                    return
                }
                const location = resp.data.results[0];
                const cords = location.geometry.location;
                res({
                    direccion: location.formatted_address,
                    lat: cords.lat,
                    lng: cords.lng
                });
                // console.log(address, lat, lng);

            })
            .catch(err => rej(err))

    })
}




module.exports = {
    getDataLocation
}