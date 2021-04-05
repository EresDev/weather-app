const request = require('request');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const apiKey = () => argv.api_key;
//API  Docs: https://openweathermap.org/current
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat='+latitude+'&lon='+longitude+'&appid='+apiKey();

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the weather API.', undefined);
        } else if(body.cod == 400 ) {
            callback('Unable to find location for latlong.', undefined);
        }else {
            const tempC = body.main.temp;
            callback(undefined, 'It is currently '+tempC+' degree out.');
        }
    });
}

module.exports = forecast;