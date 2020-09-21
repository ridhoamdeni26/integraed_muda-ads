//////////////////////// Sekolah /////////////////////////////
/////////////////////// Created by Ridho Amdeni //////////////////

// Local Site
var SITE_LOCAL = "/static/";


function StasiunBus(map){
    $.ajax({
        url: SITE_LOCAL + 'JsonData/HalteTransjakarta.json',
        method: 'get',
        dataType: 'json',
        async: false,
        cache: false,
        success: function (result) {
              $.each( result.features, function(i, item) {
                var nama = item.properties.name;
                var desc = item.properties.description;
                var lang = parseFloat(item.geometry.coordinates[0]);
                var lat = parseFloat(item.geometry.coordinates[1]);
                var marker_bus = {
                    lat: lat,
                    lng: lang
                }
                var marker = new google.maps.Marker({
                    position: marker_bus,
                    map: map,
                    info: '<h4>Stasiun Bus</h4>' + ' ' + 'Nama Stasiun : ' + nama
                          + '<br></br>' + 
                          'Alamat : ' + desc,
                    icon: SITE_LOCAL + "/img/icon/bus-stop.png",
                });
                var infowindow = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent(this.info);
                    infowindow.open(map, this);
                });
              });
        }
    });
}