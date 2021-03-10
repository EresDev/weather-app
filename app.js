const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = 'Los Angeles';

geocode(location, (error, latlong) => {
    if (error) {
        console.log('Error', error);
        return;
    }

    forecast(latlong.latitude, latlong.longitude, (error, data) => {
        if (error) {
            console.log('Error', error);
            return;
        }
        console.log(latlong.placename);
        console.log(data);
    });
});

