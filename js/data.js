function getLocationList() {

	var result = $.ajax('data/locations.json', {
		async:false,
		success: function(data, textStatus, jqhr) {

		},
		error: function(jqhr, textStatus, errorThrown) {

		},
		dataType: 'json'
		}
	);
	var list = $.parseJSON( result.responseText );
	return list;
}
