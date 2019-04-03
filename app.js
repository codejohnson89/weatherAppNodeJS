const request = require('request');

// const url = 'https://api.darksky.net/forecast/892a41c2faf0fc8e8c02c0d71f8d141e/37.8267,-122.4233';

// request({ url: url, json: true}, (error, response) => {
//     // console.log(response.body.currently);

//     console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} chance of rain.`);
// })


const map = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWljYWhqajE5ODkiLCJhIjoiY2p1MGRobmJvMDNnbjQ0anozaWJpaDRtdiJ9.Nib7Ov5-Q_sSf6_Z-Xa9Xg'
request({ url: map, json: true}, (error, response) => {
    console.log(`Lat: ${response.body.features[0].center[1]} Long: ${response.body.features[0].center[0]}`);
})