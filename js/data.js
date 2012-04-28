function getLocationList(lstTypes) {

	var result = $.ajax('data/POI.json', {
		async:false,
		success: function(data, textStatus, jqhr) {

		},
		error: function(jqhr, textStatus, errorThrown) {

		},
		dataType: 'json'
		}
	);
	var list = $.parseJSON( result.responseText );
    var locations = [];
    if (lstTypes != null) {
        for (i=0;i<list.length;i++) {
            for (j=0;j<lstTypes.length;j++) {
                if (list[i].TYPE == lstTypes[j]) {
                    locations.push(list[i]);
                }
            }
        }
        return locations;
    } else {
        return list;
    }
}
