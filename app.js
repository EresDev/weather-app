const request = require('request');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

//geocoding API docs: https://docs.mapbox.com/api/search/geocoding
const location = 'Los Angles';
const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token='+
    argv.geoCodingAccessToken +
    '&limit=1';
request({url: geoCodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to the geocoding API.');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find given location.');
    } else {
        const placeName = response.body.features[0].place_name;
        const latlong = response.body.features[0].center;
        console.log('Place: ' + placeName +'\nLatlong: ' + latlong[0] + ', ' + latlong[1]);
    }

});

//API  Docs: https://openweathermap.org/current
const latítude = '-73.9808';
const longitude = '40.7648';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat='+latítude+'&lon='+longitude+'&appid='+argv.api_key;

request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log(error);
        console.log('Unable to connect to the weather API.');
    } else if(response.body.cod == 400 ) {
        console.log('Unable to find location for latlong.');
    }else {
        const tempC = response.body.main.temp;
        console.log('It is currently '+tempC+' degree out.')
    }
});