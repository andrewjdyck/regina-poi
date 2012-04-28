function generateMap(lstTypes) {

	var latlng = new google.maps.LatLng(50.455144, -104.606406);

	var locations = getLocationList(lstTypes);

	var map = new google.maps.Map($('#map_canvas')[0], {
		zoom: 12,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

     var infowindow = new google.maps.InfoWindow();

     var marker, i;

     for (i = 0; i < locations.length; i++) {
    	 marker = new google.maps.Marker({
    		 position: new google.maps.LatLng(locations[i].LATITUDE, locations[i].LONGITUDE),
    		 map: map,
    		 title:locations[i].TYPE
    	 });

    	 google.maps.event.addListener(marker, 'click', (function(marker, i) {
    		 return function() {
        	 map.setZoom(18);
        	 infowindow.setContent(setInfobox(locations[i]));
        	 infowindow.open(map, marker);
         }
       })(marker, i));
     }
     return map;
}
