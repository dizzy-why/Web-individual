
var labelIndex = 0;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function initMap() {

    var Position = {
        pos0: { lat: 39.913818, lng: 116.363625 },
        pos1: { lat: 27.7172, lng: 85.3240 },
        pos2: { lat: 28.2380, lng: 83.9956 },
        pos3: { lat: 27.6644, lng: 85.3188 },
        pos4: { lat: 34.9850414, lng: 135.7525559 },
        pos5: { lat: 39.913818, lng: 116.363625 },
    }

    var map = new google.maps.Map(document.getElementById('mymap'), {
        zoom: 4,
        center: Position.pos0,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var contentString1 = '<h1>Kathmandu</h1><br><div><img src = "https://www.welcomenepal.com/uploads/destination/kathmandu-oy-lt2.jpeg" width="100px" height="100px"></div>';
    var contentString2 = '<h1>Pokhara</h1><br><div><img src = "https://lonelyplanetimages.imgix.net/mastheads/53693064.jpg?sharp=10&vib=20&w=1200" width="100px" height="100px"></div>';
    var contentString3 = '<h1>Lalitpur</h1><br><strong>(My home)</strong><br><div><img src = "https://upload.wikimedia.org/wikipedia/commons/4/40/Nepal_Patan_Mangal.jpg" width="100px" height="100px"></div>';
    var contentString4 = '<h1>KCGI</h1><br><strong>(My University)</strong><div><img src = "https://www.kcg.edu/images/index/oc_kyoto.jpg" width="100px" height="100px"></div>';

    var infowindow1 = createInfo(contentString1);
    var infowindow2 = createInfo(contentString2);
    var infowindow3 = createInfo(contentString3);
    var infowindow4 = createInfo(contentString4);
   
    var marker1 = addMarker(Position.pos1, map, "Kathmandu");
    var marker2 = addMarker(Position.pos2, map, "Pokhara");
    var marker3 = addMarker(Position.pos3, map, "Lalitpur");
    var marker4 = addMarker(Position.pos4, map, "KCGI");

    marker1.addListener('click', function () {
        infowindow1.open(map, marker1);
    });
    marker2.addListener('click', function () {
        infowindow2.open(map, marker2);
    });
    marker3.addListener('click', function () {
        infowindow3.open(map, marker3);
    });
    marker4.addListener('click', function () {
        infowindow4.open(map, marker4);
    });


}

function createInfo(myContent){
    var infowindow = new google.maps.InfoWindow({
        content: myContent
    });
    return infowindow;
}


function addMarker(myPosition, myMap, myTitle) {
    var marker = new google.maps.Marker({
        position: myPosition,
        map: myMap,
        title: myTitle,
        label: labels[labelIndex++ % labels.length],
        animation: google.maps.Animation.DROP
    });
    return marker;
}

google.maps.event.addDomListener(window, 'load', initMap);