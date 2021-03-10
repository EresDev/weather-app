const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = 'Los Angeles';

geocode(location, (error, latlong) => {
    console.log('Error', error);
    console.log('Latlong', latlong);
});

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
});