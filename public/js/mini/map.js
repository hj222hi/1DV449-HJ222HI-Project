"use strict";var mapHandler={map:null,addMarker:function(a,e){new google.maps.Marker({position:{lat:a,lng:e},map:mapHandler.map,animation:google.maps.Animation.DROP,title:"Your position"})},initMap:function(a,e){a=parseFloat(a),e=parseFloat(e),mapHandler.map=new google.maps.Map(document.getElementById("map2"),{center:{lat:a,lng:e},zoom:10}),mapHandler.addMarker(a,e),mapHandler.getTownName(a,e)},getTownName:function(a,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var a=JSON.parse(n.responseText);songAndPlaylistHandler.townName=a.results[0].address_components[3].long_name,songAndPlaylistHandler.getSongs(a.results[0].address_components[3].long_name)}else(403==n.readyState||404==n.status||500==n.status)&&songAndPlaylistHandler.apiError("spotify")},n.open("GET","https://maps.googleapis.com/maps/api/geocode/json?latlng="+a+","+e+"&key=AIzaSyC9frD5YpO4uLFqw6ca-vuMn_obtsgR_CQ",!0),n.send()}};