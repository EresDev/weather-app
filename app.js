const request = require('request');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const location = 'Los Angles';
const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token='+
    argv.geoCodingAccessToken +
    '&limit=1';
request({url: geoCodeUrl, json: true}, (error, response) => {
    const placeName = response.body.features[0].place_name;
    const latlong = response.body.features[0].center;
    console.log('Place: ' + placeName +'\nLatlong: ' + latlong[0] + ', ' + latlong[1]);
});

//API  Docs: https://openweathermap.org/current
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=35&lon=139&appid='+argv.api_key;

request({url: url, json: true}, (error, response) => {
    const tempC = response.body.main.temp
    console.log('It is currently '+tempC+' degree out.')
});