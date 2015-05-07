$(document).ready(function(){
    //declare global variables
    var cities;
    //create a leaflet map with these variables
    var map = L.map('map', {
                center: [39.0, 25.7],
                zoom: 2,
        });
    //add stamen toner basemap to map
        L.tileLayer(
        'http://a.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
                    attribution: '<a href="http://maps.stamen.com">Stamen tileset</a>'
        }).addTo(map);

    //push geojson data to load and create different map components
    $.getJSON("data/wutangshapes.geojson")
        .done(function(data) {
        })
    .fail(function() { alert("There has been a problem loading the data")});
});//end main.js


