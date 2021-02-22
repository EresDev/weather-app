const request = require('request')

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

//API  Docs: https://openweathermap.org/current
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=35&lon=139&appid='+argv.api_key

request({url: url, json: true}, (error, response) => {
    const tempC = response.body.main.temp
    console.log('It is currently '+tempC+' degree out.')
})