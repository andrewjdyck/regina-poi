import csv

def parsePOI():
	# Read in raw data from csv
	rawData = csv.reader(open('rinks.csv', 'rb'), dialect='excel')

	# the template. where data from the csv will be formatted to geojson
	template = \
		'''{"content":"<h1>Address</h1> %s; Location: %s Type: %s","lng":%s,"lat":%s,"address":"%s","location":"%s","type":"%s"},
		'''

	# the head of the geojson file
	output = "["

	# loop through the csv by row skipping the first
	iter = 0
	for row in rawData:
		iter += 1
		if iter >= 2:
		    address = row[0]
		    location = row[1]
		    rinktype = row[2]
		    lng = row[3]
		    lat = row[4]
		    output += template % (address, location, rinktype, lng, lat, address, location, rinktype)
		    
	# the tail of the geojson file
	output += ''']'''
		
	# opens an geoJSON file to write the output to
	outFileHandle = open("locations.json", "w")
	outFileHandle.write(output)
	outFileHandle.close()

if __name__ == '__main__':
    parsePOI()

