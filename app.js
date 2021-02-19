const request = require('request')

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const url = 'https://api.aerisapi.com/forecasts/42.25,-95.25?'+
    'from=today&to=today'+
    '&client_id=' + argv.client_id +
    '&client_secret=' + argv.client_secret;
request({url: url}, (error, response) => {
    const jsonData = JSON.parse(response.body)
    console.log(jsonData.response[0].periods)
})