$(document).ready(function(){ 
    var cities;
    var map = L.map('map').setView([39.0, 25.7],2);
    var shapes = new L.geoJson();
    
    L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

    shapes.addTo(map);

    $.ajax({
        dataType: "json",
        url: "data/wutang_shapes.geojson",
        success: function(data) {
            $(data.features).each(function(key, data) {
                shapes.addData(data);
                console.log(key)
                console.log(data.properties.album)
            });
        }
    }).error(function() {});
    //push geojson data to load and create different map components
    /*$.getJSON("data/wutang_shapes.geojson")
        .done(function(data) {
            var info = processData(data);
            createIcons(data);
        })
    .fail(function() { alert("There has been a problem loading the data")});
    

    function processData(data){
        console.log(data);
    }; //end processData*/
    
    function createIcons(data){
        var wuIcon = L.icon({
            iconUrl: 'Wutang.png',
            iconSize:     [50, 50],
        });

        L.marker([51.5, -0.09], {icon: wuIcon}).addTo(map);
      
    }; //end createIcons
    

});//end main.js

