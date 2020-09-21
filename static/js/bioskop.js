//////////////////////// Bioskop /////////////////////////////
/////////////////////// Created by Ridho Amdeni //////////////////

// Local Site
var SITE_LOCAL = "/static/";


function bioskop() {
    $.ajax({
        url: SITE_LOCAL + 'JsonData/bioskop.json',
        method: 'get',
        dataType: 'json',
        async: false,
        cache: false,
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                var beach = result[i];
                var nama = result[i]['0']
                // var kode = result[i]['1']
                var alamat = result[i]['1']
                var lat = parseFloat(result[i]['2'])
                var lang = parseFloat(result[i]['3'])
                var marker_bioskop = {
                    lat: lat,
                    lng: lang
                }
                var icon = {
                    url: SITE_LOCAL + "/img/icon/cinema.png", // url
                    scaledSize: new google.maps.Size(24, 24), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                var marker = new google.maps.Marker({
                    position: marker_bioskop,
                    map: map,
                    info: '<h4>Bioskop</h4>' + ' ' + 'Name : ' + nama 
                          + '<br></br>' + 
                          'Alamat : ' + alamat,
                    icon: icon,
                });
                var infowindow6 = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow6.setContent(this.info);
                    infowindow6.open(map, this);
                });
            }
        }
    });
}