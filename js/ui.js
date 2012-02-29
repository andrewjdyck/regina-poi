$( function() {

	var yourLocationMarker;

	// regina boundaries, used to allow address searches without specifying city,prov
	var bounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(50.377437,-104.690094),
			new google.maps.LatLng(50.513427,-104.519806)
	);

	$('#addressSubmit').click( function(e) {
    	var address= $('#userAddress').val();

    	var geocoder = new google.maps.Geocoder();

    	geocoder.geocode( { 'address': address, bounds: bounds}, function(results, status) {
    	      if (status == google.maps.GeocoderStatus.OK) {
    	        map.setCenter(results[0].geometry.location);
    	        map.setZoom(15);

    	        if( yourLocationMarker == undefined ) {
    	        	console.log('creating new marker');
    	        	yourLocationMarker = new google.maps.Marker({
        	            map: map,
        	            position: results[0].geometry.location,
        	            icon: 'http://www.google.com/mapfiles/arrow.png',
        	            draggable: true
        	        });
    	        } else {
    	        	console.log('using existing marker');
    	        	yourLocationMarker.setPosition(results[0].geometry.location);
    	        }
    	        $( '#locationError').hide();
    	      } else {
    	        $( '#locationErrorText').html( "Can't locate address");
    	        $( '#locationError').show();
    	      }
    	    });

    	return false;
    });

	if(navigator.geolocation) {
		$('#geolocate').show()
			.click( function(e) {
				navigator.geolocation.getCurrentPosition(function(e) {
					if( e && e.coords ) {
						$( '#locationError').hide();
						var coords = new google.maps.LatLng(e.coords.latitude, e.coords.longitude);

						if( yourLocationMarker == undefined ) {
		    	        	console.log('creating new marker');
		    	        	yourLocationMarker = new google.maps.Marker({
		        	            map: map,
		        	            position: coords,
		        	            icon: 'http://www.google.com/mapfiles/arrow.png',
		        	            draggable: true
		        	        });
		    	        } else {
		    	        	console.log('using existing marker');
		    	        	yourLocationMarker.setPosition(coords);
		    	        }

						map.setCenter(coords);
		    	        map.setZoom(15);
					}
				});
				return false;
		});

	}
});