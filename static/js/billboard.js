//////////////////////// Sekolah /////////////////////////////
/////////////////////// Created by Ridho Amdeni //////////////////

// Local Site
var SITE_LOCAL = "/static/";

function billBoard(map) {
    $.ajax({
        url: SITE_LOCAL + 'JsonData/billboard.json',
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
                var ukuran = result[i]['5']
                // console.log(ukuran)
                var marker_billboard = {
                    lat: lat,
                    lng: lang
                }
                var marker = new google.maps.Marker({
                    position: marker_billboard,
                    map: map,
                    info: '<h4>BILLBOARD</h4>' + ' ' + 'Name : ' + nama 
                          + '<br></br>' + 
                          'Kode Billboard : ' + kode
                          + '<br></br>' + 
                          'Alamat : ' + alamat
                          + '<br></br>' +
                          'Ukuran : ' + ukuran,
                    icon: SITE_LOCAL + "/img/icon/Icon-Billboard.png",
                });
                var infowindow5 = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow5.setContent(this.info);
                    infowindow5.open(map, this);
                });
            }
        }
    });
}