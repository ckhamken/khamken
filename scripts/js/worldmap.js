    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(16,5),
            zoom: 2,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.TERRAIN,
        }
        var mapElement = document.getElementById('worldmap');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['Christchurch, New Zealand', 'undefined', 'undefined', 'undefined', 'undefined', -43.5320544, 172.6362254],['Queenstown, New Zealand', 'undefined', 'undefined', 'undefined', 'undefined', -45.0311622, 168.6626435],['Fox Glacier, New Zealand', 'undefined', 'undefined', 'undefined', 'undefined', -43.4644799, 170.0175878],['Milford Sound, New Zealand', 'undefined', 'undefined', 'undefined', 'undefined', -44.671625, 167.9256213],['Te Anau, New Zealand', 'undefined', 'undefined', 'undefined', 'undefined', -45.4144515, 167.718053],['Rotorua, New Zealand', 'undefined', 'undefined', 'undefined', 'undefined', -38.1368478, 176.2497461],['Hobbiton, New Zealand', 'undefined', 'undefined', 'undefined', 'undefined', -37.8573241, 175.6804322],['Auckland, New Zealand', 'undefined', 'undefined', 'undefined', 'undefined', -36.8484597, 174.7633315],['Melbourne, Australia', 'undefined', 'undefined', 'undefined', 'undefined', -37.814107, 144.96328],['Canberra, Australia', 'undefined', 'undefined', 'undefined', 'undefined', -35.2819998, 149.1286843],['Sydney, Australia', 'undefined', 'undefined', 'undefined', 'undefined', -33.8674869, 151.2069902],['Okinawa, Japan', 'undefined', 'undefined', 'undefined', 'undefined', 26.2124013, 127.6809317],['Kyoto, Japan', 'undefined', 'undefined', 'undefined', 'undefined', 35.0116363, 135.7680294],['Tokyo, Japan', 'undefined', 'undefined', 'undefined', 'undefined', 35.6894875, 139.6917064],['Shanghai, China', 'undefined', 'undefined', 'undefined', 'undefined', 31.230416, 121.473701],['Savannakhet, Laos', 'undefined', 'undefined', 'undefined', 'undefined', 16.55, 104.75],['Vientiane, Laos', 'undefined', 'undefined', 'undefined', 'undefined', 17.966667, 102.6],['Vang Vieng, Laos', 'undefined', 'undefined', 'undefined', 'undefined', 18.933333, 102.45],['Bangkok, Thailand', 'undefined', 'undefined', 'undefined', 'undefined', 13.7278956, 100.5241235],['That Phanom, Thailand', 'undefined', 'undefined', 'undefined', 'undefined', 16.9649755, 104.6821048],['Waikiki, Hawaii', 'undefined', 'undefined', 'undefined', 'undefined', 21.285002, -157.835698],['Monterrey, Mexico', 'undefined', 'undefined', 'undefined', 'undefined', 25.6866142, -100.3161126],['Ramos Arizpe, Mexico', 'undefined', 'undefined', 'undefined', 'undefined', 25.5411499, -100.9483074],['Saltillo, Mexico', 'undefined', 'undefined', 'undefined', 'undefined', 25.4267244, -100.9954254],['London, England', 'undefined', 'undefined', 'undefined', 'undefined', 51.5073509, -0.1277583],['Amsterdam, Netherlands', 'undefined', 'undefined', 'undefined', 'undefined', 52.3702157, 4.895167900000001],['Munich, Germany', 'undefined', 'undefined', 'undefined', 'undefined', 48.1351253, 11.5819806],['Frankfurt, Germany', 'undefined', 'undefined', 'undefined', 'undefined', 50.1109221, 8.6821267],['Dachau Concentration Camp, Germany', 'undefined', 'undefined', 'undefined', 'undefined', 48.270124, 11.4682724],['Innsbruck, Austria', 'undefined', 'undefined', 'undefined', 'undefined', 47.2692124, 11.4041024],['Florence, Italy', 'undefined', 'undefined', 'undefined', 'undefined', 43.7710332, 11.2480006],['Venice, Italy', 'undefined', 'undefined', 'undefined', 'undefined', 45.4408474, 12.3155151],['Rome, Italy', 'undefined', 'undefined', 'undefined', 'undefined', 41.8723889, 12.4801802],['Lucerne, Switzerland', 'undefined', 'undefined', 'undefined', 'undefined', 47.0500376, 8.3089295],['Solingen, Germany', 'undefined', 'undefined', 'undefined', 'undefined', 51.17020720000001, 7.0831408],['Paris, France', 'undefined', 'undefined', 'undefined', 'undefined', 48.856614, 2.3522219],['Madrid, Spain', 'undefined', 'undefined', 'undefined', 'undefined', 40.4167754, -3.7037902],['Seville, Spain', 'undefined', 'undefined', 'undefined', 'undefined', 37.3890924, -5.9844589],['Mijas, Spain', 'undefined', 'undefined', 'undefined', 'undefined', 36.5967755, -4.6323067],['Guadalajara, Spain', 'undefined', 'undefined', 'undefined', 'undefined', 40.632489, -3.16017],['Córdoba, Spain', 'undefined', 'undefined', 'undefined', 'undefined', 37.8881751, -4.7793835],['Toledo, Spain', 'undefined', 'undefined', 'undefined', 'undefined', 39.8628316, -4.027323099999999],['Fuengirola, Spain', 'undefined', 'undefined', 'undefined', 'undefined', 36.544148, -4.624943900000001],['Granada, Spain', 'undefined', 'undefined', 'undefined', 'undefined', 37.1773363, -3.5985571],['Dover, UK', 'undefined', 'undefined', 'undefined', 'undefined', 51.1278758, 1.3134027],['Calais, France', 'undefined', 'undefined', 'undefined', 'undefined', 50.95129000000001, 1.858686],['Osaka, Japan', 'undefined', 'undefined', 'undefined', 'undefined', 34.6937378, 135.5021651],['Auburn, Washington', 'undefined', 'undefined', 'undefined', 'undefined', 47.30732279999999, -122.2284532],['Seattle, Washington', 'undefined', 'undefined', 'undefined', 'undefined', 47.6062095, -122.3320708],['Las Vegas, Nevada', 'undefined', 'undefined', 'undefined', 'undefined', 36.1699412, -115.1398296],['Grand Canyon', 'undefined', 'undefined', 'undefined', 'undefined', 36.2317194, -113.0309112],['(DFW) Dallas/Fort Worth International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 32.8998091, -97.0403352],['New Orleans, Louisiana', 'undefined', 'undefined', 'undefined', 'undefined', 29.95106579999999, -90.0715323],['New Iberia, Louisiana', 'undefined', 'undefined', 'undefined', 'undefined', 30.0035365, -91.81872849999999],['(LAS) McCarran International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 36.0839998, -115.1537389],['(SEA) Seattle-Tacoma International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 47.44443, -122.300497],['(LAX) Los Angeles International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 33.9415889, -118.40853],['(SFO) San Francisco International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 37.615223, -122.389979],['(MSP) Minneapolis-Saint Paul International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 44.881234, -93.20311099999999],['Minneapolis, Minnesota', 'undefined', 'undefined', 'undefined', 'undefined', 44.983334, -93.26666999999999],['Saint Paul, Minnesota', 'undefined', 'undefined', 'undefined', 'undefined', 44.9537029, -93.0899578],['Farmington, Minnesota', 'undefined', 'undefined', 'undefined', 'undefined', 44.6402434, -93.1435497],['Duluth, Minnesota', 'undefined', 'undefined', 'undefined', 'undefined', 46.78667189999999, -92.1004852],['(ORD) Chicago O\'Hare International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 41.9741625, -87.9073214],['Chicago, Illinois', 'undefined', 'undefined', 'undefined', 'undefined', 41.8781136, -87.6297982],['Elgin, Illinois', 'undefined', 'undefined', 'undefined', 'undefined', 42.033333, -88.283333],['New York City, New York', 'undefined', 'undefined', 'undefined', 'undefined', 40.7127837, -74.0059413],['Buffalo, New York', 'undefined', 'undefined', 'undefined', 'undefined', 42.88644679999999, -78.8783689],['New Haven, Connecticut', 'undefined', 'undefined', 'undefined', 'undefined', 41.308274, -72.9278835],['Trenton, New Jersey', 'undefined', 'undefined', 'undefined', 'undefined', 40.2170534, -74.7429384],['Philadelphia, Pennsylvania', 'undefined', 'undefined', 'undefined', 'undefined', 39.952335, -75.16378900000001],['Holland, Michigan', 'undefined', 'undefined', 'undefined', 'undefined', 42.7875235, -86.1089301],['(GRR) Gerald R. Ford International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 42.8846633, -85.5248434],['Grand Rapids, Michigan', 'undefined', 'undefined', 'undefined', 'undefined', 42.9633599, -85.6680863],['(JFK) John F. Kennedy International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 40.6413111, -73.77813909999999],['(LGA) Laguardia Airport', 'undefined', 'undefined', 'undefined', 'undefined', 40.7769271, -73.8739659],['Washington D.C.', 'undefined', 'undefined', 'undefined', 'undefined', 38.9071923, -77.0368707],['Charlotte, North Carolina', 'undefined', 'undefined', 'undefined', 'undefined', 35.2270869, -80.8431267],['Knoxville, Tennessee', 'undefined', 'undefined', 'undefined', 'undefined', 35.9606384, -83.9207392],['Nashville, Tennessee', 'undefined', 'undefined', 'undefined', 'undefined', 36.166667, -86.783333],['Memphis, Tennessee', 'undefined', 'undefined', 'undefined', 'undefined', 35.1495343, -90.0489801],['St. Louis, Missouri', 'undefined', 'undefined', 'undefined', 'undefined', 38.6270025, -90.19940419999999],['Indianapolis, Indiana', 'undefined', 'undefined', 'undefined', 'undefined', 39.768403, -86.158068],['Louisville, Kentucky', 'undefined', 'undefined', 'undefined', 'undefined', 38.2526647, -85.7584557],['Little Rock, Arkansas', 'undefined', 'undefined', 'undefined', 'undefined', 34.7464809, -92.28959479999999],['Biloxi, Mississippi', 'undefined', 'undefined', 'undefined', 'undefined', 30.3960318, -88.88530779999999],['Mobile, Alabama', 'undefined', 'undefined', 'undefined', 'undefined', 30.6953657, -88.0398912],['Decatur, Alabama', 'undefined', 'undefined', 'undefined', 'undefined', 34.6059253, -86.9833417],['Huntsville, Alabama', 'undefined', 'undefined', 'undefined', 'undefined', 34.7303688, -86.5861037],['Birmingham, Alabama', 'undefined', 'undefined', 'undefined', 'undefined', 33.5206608, -86.80248999999999],['(BHM) Birmingham-Shuttlesworth International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 33.562112, -86.75107799999999],['Auburn, Alabama', 'undefined', 'undefined', 'undefined', 'undefined', 32.6098566, -85.48078249999999],['Atlanta, Georgia', 'undefined', 'undefined', 'undefined', 'undefined', 33.7489954, -84.3879824],['Savannah, Georgia', 'undefined', 'undefined', 'undefined', 'undefined', 32.0835407, -81.09983419999999],['Hinesville, Georgia', 'undefined', 'undefined', 'undefined', 'undefined', 31.846877, -81.5959453],['Columbus, Georgia', 'undefined', 'undefined', 'undefined', 'undefined', 32.4609764, -84.9877094],['(ATL) Hartsfield Jackson Atlanta International Airport', 'undefined', 'undefined', 'undefined', 'undefined', 33.639975, -84.44403199999999],['Jacksonville, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 30.3321838, -81.65565099999999],['Orlando, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 28.5383355, -81.3792365],['Tampa, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 27.950575, -82.4571776],['St. Petersburg, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 27.773056, -82.64],['Clearwater, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 27.9658533, -82.8001026],['Port St Joe, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 29.8118757, -85.30297399999999],['Panama City Beach, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 30.1765914, -85.8054879],['Destin, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 30.3935337, -86.4957833],['Fort Walton Beach, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 30.42007079999999, -86.6170308],['Niceville, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 30.5168639, -86.48217199999999],['Pensacola, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 30.42130899999999, -87.2169149],['Navarre, Florida', 'undefined', 'undefined', 'undefined', 'undefined', 30.4109342, -86.91232169999999],['(MGM) Montgomery Regional Airport', 'undefined', 'undefined', 'undefined', 'undefined', 32.3045743, -86.39103709999999] 
        ];
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
			if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
            marker = new google.maps.Marker({
                icon: '',
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web);
        }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web) {
      google.maps.event.addListener(marker, 'click', function() {
            var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4></div>";
            iw = new google.maps.InfoWindow({content:html});
            iw.open(map,marker);
        });
    }
}