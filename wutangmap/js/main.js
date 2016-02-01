$(document).ready(function(){ 
    var map = L.map('map').setView([35.0, -10],2);
    
    L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);
    
    var myStyle = {
        "color": "#a80",
        "weight": 1,
        "opacity": 1,
        "fillColor": "#FFCC00",
        "fillOpacity": .45
    };
    
    var shapeLayer = new L.GeoJSON.AJAX("data/wutang_shapes.geojson", {
        style: myStyle, 
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.lyric);
            //console.log(feature.properties);
        }
    });       
    shapeLayer.addTo(map);
    
    var wuIcon = L.icon({
        iconUrl: '/assets/Wutang.png',
        iconSize:     [20, 20],
        shadowSize: [30,30],
        shadowAnchor: [20,20]
    });
    
    //need to edit and add custom icons
    var pointLayer = new L.GeoJSON.AJAX("data/wutang_points.geojson", {
        pointToLayer: function(data, latlng){
            return L.marker(latlng, {icon: wuIcon});
        },
        onEachFeature: function(feature, layer){
            layer.bindPopup(feature.properties.lyric);
        }
    });
    pointLayer.addTo(map);
    
    
    /*
    $.getJSON("data/wutang_points.geojson")
        .done(function(data) {
            createIcons(data);
        }).fail(function() { alert("There has been a problem loading the data")});

    function createIcons(data){
        var wuIcon = L.icon({
            iconUrl: '../wutangmap/assets/Wutang.png',
            iconSize:     [50, 50],
        });

        L.marker([51.5, -0.09], {icon: wuIcon}).addTo(map);
      
    }; //end createIcons
*/
});//end main.js

