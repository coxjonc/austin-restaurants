//copyright Jonathan Cox 2016 MIT License

window.onload = function() {
    // Load data from JSON file
    var restaurants = [];

    function getScores(cb) {
        $.ajax({
        dataType: 'text',
        url: '/restaurants.json/',
        success: function(res) {
            cb(res)
        },
        error: function(err) {
            console.log('error')
        }
        })
    }

    getScores(function(data) {
        console.log(JSON.stringify(data))
    })

    // Initialize a map and set its view to the coordinates of London, 
    // at the specified zoom level
    var myMap = L.map("map").setView([30.267, -97.743], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZ2Vlemhhd2siLCJhIjoiY2ltcDFpY2dwMDBub3VtbTFkbWY5b3BhMSJ9.4mN7LI5CJMCDFvqkx1OJZw'
            }).addTo(myMap)
}

