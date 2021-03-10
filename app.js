const request = require('request');
const geocode = require('./utils/geocode')
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;


const location = 'Los Angeles';

geocode(location, (error, latlong) => {
    console.log('Error', error);
    console.log('Latlong', latlong);
})

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