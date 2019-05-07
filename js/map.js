var markers = [];

function initialize() {
    initializeWhite();
    google.maps.event.trigger(markers[0], 'click');
}

function initializeWhite() {
    var locations = [
        [46.622340, 31.211164, 'img/marker.png', 27, 27, 'Черноморец']
    ];

    var roadAtlasStyles = [];

    var mapOptions;
    var center = new google.maps.LatLng(46.622340, 31.211164);
    mapOptions = {
        zoom: 16,
        minZoom: 1,
        center: center,
        scaleControl: false,
        scrollwheel: false,
        draggable: true,
        mapTypeControlOptions: {
            mapTypeIds: ['']
        }
    };
    map = new google.maps.Map(document.getElementById('map_wrappper'),
        mapOptions);
    var styledMapOptions = {
        name: 'chornomo'
    };
    var usRoadMapType = new google.maps.StyledMapType(
        roadAtlasStyles, styledMapOptions);
    map.mapTypes.set('usroadatlas', usRoadMapType);
    map.setMapTypeId('usroadatlas');

    for (var i = 0; i < locations.length; i++) {
        var latLng = new google.maps.LatLng(locations[i][0],
            locations[i][1]);
        var image = {
            url: locations[i][2],
            anchor: new google.maps.Point(14, 14),
            size: new google.maps.Size(locations[i][3], locations[i][4])
        };
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">Черноморец</h3>'+
            '<div id="bodyContent">'+
            '<p>проспект Курортний, 39<br />Коблево, Николаевская область</p>'+
            '<p><a href="https://goo.gl/maps/vZuVwBET27MoGBQA6" target="_blank">'+
            'Показать на Google Картах</a></p>'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var marker = new google.maps.Marker({
            position: { lat: 46.6222, lng: 31.2112 },
            title: 'Черноморец'
            // icon: image
        });
        markers.push(marker);
        marker.setMap(map);

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }
}
google.maps.event.addDomListener(window, 'load', initialize);