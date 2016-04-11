var L = require('leaflet')
require('leaflet_search')
require('leaflet_search_css')
require('leaflet.markercluster')
require('marker_cluster_css')
require('marker_cluster_default_css')
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

    var restaurantMap = L.map('map').setView([30.267, -97.743], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZ2Vlemhhd2siLCJhIjoiY2ltcDFpY2dwMDBub3VtbTFkbWY5b3BhMSJ9.4mN7LI5CJMCDFvqkx1OJZw'
            }).addTo(restaurantMap)

    // Get data from the json file and add markers for each of the restaurants
    var markers = new L.markerClusterGroup()
    restaurantMap.addLayer(markers);

    getScores(function(data) {
        for (i = 0; i < data.length; i++) {
            var marker = L.marker([parseFloat(data[i].Latitude), parseFloat(data[i].Longitude)], {title: data[i].restaurant});
            marker.bindPopup(
                '<strong>' + data[i].restaurant + '</strong>' + 
                '<br>Score: ' + data[i].score + 
                '<br>Last reviewed: ' + data[i]['inspection-date'].slice(0,10));
            markers.addLayer(marker);
        }

        var controlSearch = new L.Control.Search({layer: markers, initial: false})
        controlSearch.on('search_locationfound', function(elem){
            markers.zoomToShowLayer(elem.layer, function() {
                elem.layer.openPopup();
            });
        })

        restaurantMap.addControl(controlSearch)

    })
}

