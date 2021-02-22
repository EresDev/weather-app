const request = require('request')

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const url = 'https://api.aerisapi.com/forecasts/40.741895,-73.98930777777778?'+
    'from=today&to=today'+
    '&client_id=' + argv.client_id +
    '&client_secret=' + argv.client_secret;

request({url: url, json: true}, (error, response) => {
    const tempC = response.body.response[0].periods[0].avgTempC;
    const feelsLike = response.body.response[0].periods[0].feelslikeC;

    console.log('It is average '+tempC+' degree out. It feels like '+feelsLike+' degree out.')
})