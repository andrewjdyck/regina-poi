$( function(e) {

	var latlng = new google.maps.LatLng(50.455144, -104.606406);

	$.getJSON('./data/locations.json', function(locations) {
		console.log( 'got json');
		map = new google.maps.Map(document.getElementById('map_canvas'), {
	          zoom: 12,
		      center: latlng,
		     mapTypeId: google.maps.MapTypeId.ROADMAP
		});

     var infowindow = new google.maps.InfoWindow();

     var marker, i;

     for (i = 0; i < locations.length; i++) {
       marker = new google.maps.Marker({
         position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
         map: map,
         title:locations[i].address // what do you want in here?
       });

       google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
      	   map.setZoom(18);
           infowindow.setContent(locations[i].content);
           infowindow.open(map, marker);
         }
       })(marker, i));
     }
	});


});
