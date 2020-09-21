
//////////////////////// Sekolah /////////////////////////////
/////////////////////// Created by Ridho Amdeni //////////////////

// Local Site
var SITE_LOCAL = "/static/";

function mall(map){
    $.ajax({
        url: SITE_LOCAL + 'JsonData/mall.json',
        method: 'get',
        dataType: 'json',
        async: false,
        cache: false,
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                var beach = result[i];
                var nama = result[i]['0']
                var kode = result[i]['1']
                var alamat = result[i]['2']
                var lat = parseFloat(result[i]['3'])
                var lang = parseFloat(result[i]['4'])
                var marker_led = {
                    lat: lat,
                    lng: lang
                }
                var marker = new google.maps.Marker({
                    position: marker_led,
                    map: map,
                    info: '<h4>Mall</h4>' + ' ' + 'Nama Mall : ' + nama
                          + '<br></br>' + 
                          'Kode : ' + kode
                          + '<br></br>' + 
                          'Alamat : ' + alamat,
                    icon: SITE_LOCAL + "/img/icon/mall.png",
                });
                var infowindow4 = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow4.setContent(this.info);
                    infowindow4.open(map, this);
                });
            }
        }
    });
}