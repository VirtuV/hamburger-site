
    function initMap() {
        var uluru = {lat: 53.904172, lng: 27.566384};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          scrollwheel: false,  
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          scrollwheel: false
        });

        var icons = {
            place: {
                icon: {
                    url: ('img/ballon.png'),
                    size: new google.maps.Size(40, 50),
                    scaledSize: new google.maps.Size(40, 50),
                }
            },
            logo: {
                icon: {
                    url: ('img/burger-first.png'),
                    size: new google.maps.Size(30, 30),
                    scaledSize: new google.maps.Size(30, 30),
                }
            }
        }

        var features = [
            {
                position: new google.maps.LatLng(53.938793, 27.605054),
                type: 'place',
                contentString: '24/7', // tooltip
                content: 'We are working 24/7' // ballon
            },
            {
                position: new google.maps.LatLng(53.883769, 27.507798),
                type: 'place',
                contentString: 'Happy hours',
                content: 'Happy hours are every Thursday'
            },
            {
                position: new google.maps.LatLng(53.906349, 27.555863),
                type: 'logo',
                contentString: 'Main store',
                content: 'Our main store is welcoming you'
            },
        ];

        var info = new google.maps.InfoWindow();

        features.forEach(function(feature) {
            var mark = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map,
                title: feature.contentString,
            });

            // mark.addListener('click', function () {
            //     info.setContent(feature.content);
            //     info.open(map, mark);
                // mark.setAnimaton(google.maps.Animation.DROP);
            // });
            mark.addListener('click', toggleBounce);
            function toggleBounce () {
                info.setContent(feature.content);
                info.open(map, mark);
                mark.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    mark.setAnimation(null);
                }, 1400);
            }
        });
    }
    

