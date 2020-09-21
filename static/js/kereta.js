//////////////////////// TRANSJAKARTA /////////////////////////////
/////////////////////// Created by Ridho Amdeni //////////////////


var SITE_LOCAL = "/static/";

function kereta() {
  $.ajax({
    url: SITE_LOCAL + 'JsonData/kereta_test.json',
    method: 'get',
    dataType: 'json',
    async: false,
    cache: false,
    success: function (response) {
        keretaData(response)
    }
  });
}
  
  function keretaData(response){
    krl_KotaBogor = response['kota-bogor'];
    krl_DuriTangerang = response['duri-tangerang'];
    krl_CeperBandara = response['bceper-bandara'];
    krl_TabangRangkas = response['tanahabang-rangkasbitung'];
    krl_JatiBogor = response['jatinegara-bogor'];
    krl_KotaPriok = response['kota-tpriok'];
    krl_CikarangKota = response['cikarang-kota'];
  }
  
  // marker icon in keretaData
  var marker_KotaBogor = "";
  var marker_DuriTangerang = "";
  var marker_CeperBandara = "";
  var marker_TabangRangkas = "";
  var marker_JatiBogor = "";
  var marker_KotaPriok = "";
  var marker_CikarangKota = "";
  // Backward create icon with animate
  var backwardKotaBogor = false;
  var backwardDuriTangerang = false;
  var backwardCeperBandara = false;
  var backwardTabangRangkas = false;
  var backwardJatiBogor = false;
  var backwardKotaPriok = false;
  var backwardCikarangKota= false;
  // Current Index Create 0
  var currentIndex = 0;
  var currentIndex1 = 0;
  var currentIndex2 = 0;
  var currentIndex3 = 0;
  var currentIndex4 = 0;
  var currentIndex5 = 0;
  var currentIndex6 = 0;
  // var global for keretaData
  var iterateTimeout;
  
  function DuriBogor(map){
    if (currentIndex < krl_KotaBogor.length) {
      mapCenter = {
        lat: krl_KotaBogor[currentIndex][0],
        lng: krl_KotaBogor[currentIndex][1]
      };
      // Icon For Marker DuriBogor
      var icon = {
          url: SITE_LOCAL + "/img/icon/commuter.jpg", // url
          scaledSize: new google.maps.Size(32, 32), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
        };
      if (marker_KotaBogor == "") {
        marker_KotaBogor = new google.maps.Marker({
          position: mapCenter,
          map: map,
          info: '<B>KERETA</B>' + ' ' + '<br>' + '<br>' + '<p>Kereta Api Jurusan Jakarta Kota - Bogor</p>',
          icon: icon,
        });
        var infowindow1 = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_KotaBogor, 'click', function () {
            infowindow1.setContent(this.info);
            infowindow1.open(map, this);
        });
      } else {
        marker_KotaBogor.setPosition(mapCenter);
      }
        if (backwardKotaBogor) {
            currentIndex -= 1;
        } else {
            currentIndex += 1;
        }
      iterateTimeout = setTimeout(function () {
        DuriBogor()
      }, 300);
    } else {
        if (backwardKotaBogor) {
            backwardKotaBogor = false;
        } else {
            backward = true;
            currentIndex -= 1;
        }
        backwardKotaBogor = true;
        DuriBogor()
      }
  }
  
  function DuriTangerang(map){
    if (currentIndex1 < krl_DuriTangerang.length) {
      mapCenter = {
          lat: krl_DuriTangerang[currentIndex1][0],
          lng: krl_DuriTangerang[currentIndex1][1]
      };
      //icon for marker DuriTangerang
      var icon = {
        url: SITE_LOCAL + "/img/icon/commuter.jpg", // url
        scaledSize: new google.maps.Size(32, 32), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      if (marker_DuriTangerang == "") {
          marker_DuriTangerang = new google.maps.Marker({
              position: mapCenter,
              map: map,
              info: '<B>KERETA</B>' + ' ' + '<br>' + '<br>' + '<p>Kereta Api Jurusan Duri - Tangerang</p>',
              icon: icon,
          });
          var infowindow2 = new google.maps.InfoWindow();
          google.maps.event.addListener(marker_DuriTangerang, 'click', function () {
              infowindow2.setContent(this.info);
              infowindow2.open(map, this);
          });
      } else {
          marker_DuriTangerang.setPosition(mapCenter);
        }
      if (backwardDuriTangerang) {
          currentIndex1 -= 1;
      } else {
          currentIndex1 += 1;
      }
      iterateTimeout = setTimeout(function () {
        DuriTangerang()
      }, 3000);
    } else {
        if (backwardDuriTangerang) {
            backwardDuriTangerang = false;
        } else {
            backwardDuriTangerang = true;
            currentIndex1 -= 1;
        }
        backwardDuriTangerang = true;
        DuriTangerang()
      }
  }
  
  function CeperBandara(map){
    if (currentIndex2 < krl_CeperBandara.length) {
      mapCenter = {
          lat: krl_CeperBandara[currentIndex2][0],
          lng: krl_CeperBandara[currentIndex2][1]
      };
      var icon = {
        url: SITE_LOCAL + "/img/icon/commuter.jpg", // url
        scaledSize: new google.maps.Size(32, 32), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      if (marker_CeperBandara == "") {
          marker_CeperBandara = new google.maps.Marker({
              position: mapCenter,
              map: map,
              info: '<B>KERETA</B>' + ' ' + '<br>' + '<br>' + '<p>Kereta Api Jurusan Batu Ceper - Bandara Soekarno Hatta</p>',
              icon: icon,
          });
          var infowindow = new google.maps.InfoWindow();
          google.maps.event.addListener(marker_CeperBandara, 'click', function () {
              infowindow.setContent(this.info);
              infowindow.open(map, this);
          });
      } else {
          marker_CeperBandara.setPosition(mapCenter);
      }
      if (backwardCeperBandara) {
          currentIndex2 -= 1;
      } else {
          currentIndex2 += 1;
      }
      iterateTimeout = setTimeout(function () {
        CeperBandara()
      }, 4000);
    } else {
      if (backwardCeperBandara) {
          backwardCeperBandara = false;
      } else {
          backwardCeperBandara = true;
          currentIndex2 -= 1;
      }
      backwardCeperBandara = true;
      CeperBandara()
    }
  }
  
  function TabangRangkas(){
    if (currentIndex3 < krl_TabangRangkas.length) {
      mapCenter = {
          lat: krl_TabangRangkas[currentIndex3][0],
          lng: krl_TabangRangkas[currentIndex3][1]
      };
      var icon = {
        url: SITE_LOCAL + "/img/icon/commuter.jpg", // url
        scaledSize: new google.maps.Size(32, 32), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      if (marker_TabangRangkas == "") {
          marker_TabangRangkas = new google.maps.Marker({
              position: mapCenter,
              map: map,
              info: '<B>KERETA</B>' + ' ' + '<br>' + '<br>' + '<p>Kereta Api Jurusan Tanah Abang - Rangkas Bitung</p>',
              icon: icon,
          });
          var infowindow = new google.maps.InfoWindow();
          google.maps.event.addListener(marker_TabangRangkas, 'click', function () {
              infowindow.setContent(this.info);
              infowindow.open(map, this);
          });
      } else {
          marker_TabangRangkas.setPosition(mapCenter);
      }
      if (backwardTabangRangkas) {
          currentIndex3 -= 1;
      } else {
          currentIndex3 += 1;
      }
      iterateTimeout = setTimeout(function () {
          TabangRangkas()
      }, 3000);
    } else {
        if (backwardTabangRangkas) {
            backwardTabangRangkas = false;
        } else {
            backwardTabangRangkas = true;
            currentIndex3 -= 1;
        }
        backwardTabangRangkas = true;
        TabangRangkas()
    }
  }
  
  function JatiBogor(){
    if (currentIndex4 < krl_JatiBogor.length) {
      mapCenter = {
          lat: krl_JatiBogor[currentIndex4][0],
          lng: krl_JatiBogor[currentIndex4][1]
      };
      var icon = {
        url: SITE_LOCAL + "/img/icon/commuter.jpg", // url
        scaledSize: new google.maps.Size(32, 32), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      if (marker_JatiBogor == "") {
          marker_JatiBogor = new google.maps.Marker({
              position: mapCenter,
              map: map,
              info: '<B>KERETA</B>' + ' ' + '<br>' + '<br>' + '<p>Kereta Api Jurusan Jatinegara - Bogor</p>',
              icon: icon,
          });
          var infowindow26 = new google.maps.InfoWindow();
          google.maps.event.addListener(marker_JatiBogor, 'click', function () {
              infowindow26.setContent(this.info);
              infowindow26.open(map, this);
          });
      } else {
          marker_JatiBogor.setPosition(mapCenter);
      }
      if (backwardJatiBogor) {
          currentIndex4 -= 1;
      } else {
          currentIndex4 += 1;
      }
      iterateTimeout = setTimeout(function () {
          JatiBogor()
      }, 3000);
    } else {
        if (backwardJatiBogor) {
            backwardJatiBogor = false;
        } else {
            backwardTabangRangkas = true;
            currentIndex4 -= 1;
        }
        backwardJatiBogor = true;
        JatiBogor()
    }
  }
  
  function KotaPriok(){
    if (currentIndex5 < krl_KotaPriok.length) {
      mapCenter = {
          lat: krl_KotaPriok[currentIndex5][0],
          lng: krl_KotaPriok[currentIndex5][1]
      };
      var icon = {
        url: SITE_LOCAL + "/img/icon/commuter.jpg", // url
        scaledSize: new google.maps.Size(32, 32), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      if (marker_KotaPriok == "") {
          marker_KotaPriok = new google.maps.Marker({
              position: mapCenter,
              map: map,
              info: '<B>KERETA</B>' + ' ' + '<br>' + '<br>' + '<p>Kereta Api Jurusan Jakarta Kota - Tanjung Priok</p>',
              icon: icon,
          });
          var infowindow26 = new google.maps.InfoWindow();
          google.maps.event.addListener(marker_KotaPriok, 'click', function () {
              infowindow26.setContent(this.info);
              infowindow26.open(map, this);
          });
      } else {
          marker_KotaPriok.setPosition(mapCenter);
      }
      if (backwardKotaPriok) {
          currentIndex5 -= 1;
      } else {
          currentIndex5 += 1;
      }
      iterateTimeout = setTimeout(function () {
        KotaPriok()
      }, 3000);
    } else {
        if (backwardKotaPriok) {
            backwardKotaPriok = false;
        } else {
            backwardTabangRangkas = true;
            currentIndex5 -= 1;
        }
        backwardKotaPriok = true;
        KotaPriok()
      }
  }
  
  function CikarangKota(){
  if (currentIndex6 < krl_CikarangKota.length) {
    mapCenter = {
        lat: krl_CikarangKota[currentIndex6][0],
        lng: krl_CikarangKota[currentIndex6][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/commuter.jpg", // url
      scaledSize: new google.maps.Size(32, 32), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_CikarangKota == "") {
        marker_CikarangKota = new google.maps.Marker({
            position: mapCenter,
            map: map,
            info: '<B>KERETA</B>' + ' ' + '<br>' + '<br>' + '<p>Kereta Api Jurusan Cikarang - Jakarta Kota</p>',
            icon: icon,
        });
        var infowindow26 = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_CikarangKota, 'click', function () {
            infowindow26.setContent(this.info);
            infowindow26.open(map, this);
        });
    } else {
        marker_CikarangKota.setPosition(mapCenter);
      }
    if (backwardCikarangKota) {
        currentIndex6 -= 1;
    } else {
        currentIndex6 += 1;
      }
    iterateTimeout = setTimeout(function () {
      CikarangKota()
    }, 2000);
      } else {
        if (backwardCikarangKota) {
            backwardCikarangKota = false;
        } else {
            backwardTabangRangkas = true;
            currentIndex6 -= 1;
        }
        backwardCikarangKota = true;
        CikarangKota()
      }
  }