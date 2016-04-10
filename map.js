//copyright Jonathan Cox 2016 MIT License
var L = require('leaflet')
require('leaflet_css')

window.onload = function() {

    L.Icon.Default.imagePath = './images'

    function getScores(cb) {
        $.ajax({
        dataType: 'json',
        url: '/restaurants.json/',
        success: function(res) {
            cb(res)
        },
        error: function(err) {
            console.log('error')
        }
        })
    }

    // Initialize a map and set its view to the coordinates of London, 
    // at the specified zoom level
    var restaurantMap = L.map("map").setView([30.267, -97.743], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZ2Vlemhhd2siLCJhIjoiY2ltcDFpY2dwMDBub3VtbTFkbWY5b3BhMSJ9.4mN7LI5CJMCDFvqkx1OJZw'
            }).addTo(restaurantMap)

    // Get data from the .json file and add markers for each of the restaurants
    getScores(function(data) {
        for (i = 0; i < 20; i++) {
            L.marker([parseFloat(data[i].Latitude), parseFloat(data[i].Longitude)]).addTo(restaurantMap)
        }
    })
}

