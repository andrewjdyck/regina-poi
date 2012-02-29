$( function(e) {

	$('#addressSubmit').click( function(e) {
    	var address= $('#userAddress').val();

    	var geocoder = new google.maps.Geocoder();

    	geocoder.geocode( { 'address': address}, function(results, status) {
    	      if (status == google.maps.GeocoderStatus.OK) {
    	        map.setCenter(results[0].geometry.location);
    	        map.setZoom(15);

    	        var marker = new google.maps.Marker({
    	            map: map,
    	            position: results[0].geometry.location,
    	            icon: 'http://www.google.com/mapfiles/arrow.png'
    	        });
    	      } else {
    	        alert("Could not find address");
    	      }
    	    });

    	return false;
    });

	if(navigator.geolocation) {
		$('#geolocate').show()
			.click( function(e) {
				navigator.geolocation.getCurrentPosition(function(e) {
					if( e && e.coords ) {
						var coords = new google.maps.LatLng(e.coords.latitude, e.coords.longitude);
						var marker = new google.maps.Marker({
		    	            map: map,
		    	            draggable:true,
		    	            position: coords,
		    	            icon: 'http://www.google.com/mapfiles/arrow.png'
		    	        });

						map.setCenter(coords);
		    	        map.setZoom(15);
					}
					console.log(e);
				});
				return false;
		});

	}


});