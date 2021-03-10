const request = require('request');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const geoCodingAccessToken = () => yargs(hideBin(process.argv)).argv.geoCodingAccessToken;
//geocoding API docs: https://docs.mapbox.com/api/search/geocoding
const geocode = (address, callback) => {
    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token='+
        geoCodingAccessToken() +
        '&limit=1';
    request({url: geoCodeUrl, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the geocoding API.', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find given location.', undefined);
        } else {
            callback( undefined,  {
                'latitude': response.body.features[0].center[1],
                'longitude' : response.body.features[0].center[0],
                'placename': response.body.features[0].place_name
            } );
        }

    });
}

module.exports = geocode;