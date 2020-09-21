//////////////////////// Transjakarta Rute /////////////////////////////
/////////////////////// Created by Ridho Amdeni //////////////////

// Local Site
var SITE_LOCAL = "/static/";

function Transjakarta() {
    $.ajax({
        url: SITE_LOCAL + 'JsonData/TransjakartaRute.json',
        method: 'get',
        dataType: 'json',
        async: false,
        cache: false,
        success: function (response) {
          TransjakartaData(response)
        }
    });
}

function Transjakarta2() {
  $.ajax({
      url: SITE_LOCAL + 'JsonData/TransjakartaRute2.json',
      method: 'get',
      dataType: 'json',
      async: false,
      cache: false,
      success: function (response) {
        TransjakartaData2(response)
      }
  });
}

function Transjakarta3() {
  $.ajax({
      url: SITE_LOCAL + 'JsonData/TransjakartaRute3.json',
      method: 'get',
      dataType: 'json',
      async: false,
      cache: false,
      success: function (response) {
        TransjakartaData3(response)
      }
  });
}

function Transjakarta4() {
  $.ajax({
      url: SITE_LOCAL + 'JsonData/TransjakartaRute4.json',
      method: 'get',
      dataType: 'json',
      async: false,
      cache: false,
      success: function (response) {
        TransjakartaData4(response)
      }
  });
}

function Transjakarta5() {
  $.ajax({
      url: SITE_LOCAL + 'JsonData/TransjakartaRute5.json',
      method: 'get',
      dataType: 'json',
      async: false,
      cache: false,
      success: function (response) {
        TransjakartaData5(response)
      }
  });
}

function Transjakarta6() {
  $.ajax({
      url: SITE_LOCAL + 'JsonData/TransjakartaRute6.json',
      method: 'get',
      dataType: 'json',
      async: false,
      cache: false,
      success: function (response) {
        TransjakartaData6(response)
      }
  });
}

function Transjakarta7() {
  $.ajax({
      url: SITE_LOCAL + 'JsonData/TransjakartaRute7.json',
      method: 'get',
      dataType: 'json',
      async: false,
      cache: false,
      success: function (response) {
        TransjakartaData7(response)
      }
  });
}

function Transjakarta8() {
  $.ajax({
      url: SITE_LOCAL + 'JsonData/TransjakartaRute8.json',
      method: 'get',
      dataType: 'json',
      async: false,
      cache: false,
      success: function (response) {
        TransjakartaData8(response)
      }
  });
}

function TransjakartaData(response){
    Tj_blokm_kota = response['blokm-kota'];
    Tj_pulogadung_tosari = response['pulogadung-tosari'];
    Tj_harmoni_grogol = response['harmoni-grogol'];
  }

function TransjakartaData2(response){
  Tj_KMelayu_PuloGebang = response['KMelayu-PuloGebang'];
  Tj_PGadung_PKuningan = response['PGadung-PKuningan'];
  Tj_Ragunan_Monas_Kuningan = response['Ragunan-Monas-Kuningan'];
}

function TransjakartaData3(response){
  Tj_Manggarai_BlokM = response['Manggarai-BlokM'];
  Tj_Lbulus_Harmoni = response['Lbulus-Harmoni'];
  Tj_Ragunan_Monas_Semanggi = response['Ragunan-Monas-Semanggi'];
}

function TransjakartaData4(response){
  Tj_Tosari_ICBC_Palmerah = response['Tosari-ICBC-Palmerah'];
  Tj_Kalideres_GBK = response['Kalideres-GBK'];
  Tj_Kalideres_PsBaru = response['Kalideres-PsBaru'];
  Tj_Kmelayu_Cikini_Tabang = response['Kmelayu-Cikini-Tabang'];
}

function TransjakartaData5(response){
  Tj_Halimun_PuriBeta = response['Halimun-PuriBeta'];
  Tj_KMelayu_Ancol = response['KMelayu-Ancol'];
  Tj_Pgc_Tpriok = response['Pgc-TPriok'];
}

function TransjakartaData6(response){
  Tj_PGC_Harmoni = response['PGC-Harmoni'];
  Tj_PinangRanti_Pluit = response['PinangRanti-Pluit'];
  Tj_PGadung_Tosari = response['PGadung-Tosari'];
  Tj_Ragunan_Halimun = response['Ragunan-Halimun'];
  Tj_Tebet_Karet = response['STebet-Underpass-Karet'];
  Tj_Tebet_Kuningan_Karet = response['STebet-Kuningan-Karet'];
}

function TransjakartaData7(response){
  Tj_Tendean_Ciledug = response['Tendean-CbdCiledug'];
  Tj_Penjaringan_Sunter = response['Penjaringan-Sunter'];
  Tj_Tosari_Puri = response['Tosari-PuriBeta'];
  Tj_Blokm_Puri = response['BlokM-Puri'];
  Tj_BSenayan_TuguGas = response['BSenayan-TuguGas'];
  Tj_kprambutan_Kpmelayu = response['KpRambutan-KpMelayu'];
  Tj_Blokm_Joglo = response['BlokM-Joglo'];
  Tj_PKelapa_BKN = response['PKelapa-BKN'];
}

function TransjakartaData8(response){
  Tj_TPriok_Senen = response['TPriok-Senen'];
  Tj_Pgadung_Pgebang = response['PGadung-PGebang'];
}

 // marker icon in keretaData
 var marker_BlokmKota = "";
 var marker_PulogadungTosari = "";
 var marker_HarmoniGrogol = "";
 var marker_KmelayuPulogebang = "";
 var marker_PgadungPkuningan = "";
 var marker_RagunanMonasKuningan = "";
 var marker_ManggaraiBlokm = "";
 var marker_LbulusHarmoni = "";
 var marker_RagunanMonasSemanggi = "";
 var marker_TosariPalmerah = "";
 var marker_KalideresGbk = "";
 var marker_KalideresPsbaru = "";
 var marker_KmelayuCikiniTabang = "";
 var marker_HalimunPuribeta = "";
 var marker_KpmelayuAncol = "";
 var marker_pgcTpriok = "";
 var marker_pgcHarmoni = "";
 var marker_PinangrantiPluit = "";
 var marker_PgadungTosari = "";

 var marker_RagunanHalimun = "";
 var marker_TebetKaret = "";
 var marker_TebetKaretKuningan = "";
 var marker_TendeanCiledug = "";
 var marker_PejaringanSunter = "";
 var marker_TosariPuri = "";
 var marker_BlokmPuri = "";
 var marker_BsenayanTuguGas = "";
 var marker_KrambutanKmelayu = "";
 var marker_BlokmJoglo = "";
 var maker_PkelapaBKN = "";
 var marker_TpriokSenen = "";
 var marker_PgadungPgebang = "";

// Backward create icon with animate
var backwardBlokmKota = false;
var backwardPulogadungTosari = false;
var backwardHarmoniGrogol = false;
var backwardKmelayuPulogebang = false;
var backwardPgadungPkuningan = false;
var backwardRagunanMonasKuningan = false;
var backwardManggaraiBlokm = false;
var backwardLbulusHarmoni = false;
var backwardRagunanMonasSemanggi = false;
var backwardTosariPalmerah = false;
var backwardKalideresGbk = false;
var backwardKalideresPsbaru = false;
var backwardKmelayuCikiniTabang = false;
var backwardHalimunPuribeta = false;
var backwardKpmelayuAncol = false;
var backwardpgcTpriok = false;
var backwardpgcHarmoni = false;
var backwardPinangrantiPluit = false;
var backwardPgadungTosari = false;

var backwardRagunanHalimun = false;
var backwardTebetKaret = false;
var backwardTebetKaretKuningan = false;
var backwardTendeanCiledug = false;
var backwardPejaringanSunter = false;
var backwardTosariPuri = false;
var backwardBlokmPuri = false;
var backwardBsenayanTuguGas = false;
var backwardKrambutanKmelayu = false;
var backwardBlokmJoglo = false;
var backwardPkelapaBKN = false;
var backwardTpriokSenen = false;
var backwardPgadungPgebang = false;

// Current Index Create 0
var currentIndexBlokmKota = 0;
var currentIndexPulogadungTosari = 0;
var currentIndexHarmoniGrogol = 0;
var currentIndexKmelayuPulogebang = 0;
var currentIndexPgadungPkuningan = 0;
var currentIndexRagunanMonasKuningan = 0;
var currentIndexManggaraiBlokm = 0;
var currentIndexLbulusHarmoni = 0;
var currentIndexRagunanMonasSemanggi = 0;
var currentIndexTosariPalmerah = 0;
var currentIndexKalideresGbk = 0;
var currentIndexKalideresPsbaru = 0;
var currentIndexKmelayuCikiniTabang = 0;
var currentIndexHalimunPuribeta = 0;
var currentIndexKpmelayuAncol = 0;
var currentIndexpgcTpriok = 0;
var currentIndexpgcHarmoni = 0;
var currentIndexPinangrantiPluit = 0;
var currentIndexPgadungTosari = 0;

var currentIndexRagunanHalimun = 0;
var currentIndexTebetKaret = 0;
var currentIndexTebetKaretKuningan = 0;
var currentIndexTendeanCiledug = 0;
var currentIndexPejaringanSunter = 0;
var currentIndexTosariPuri = 0;
var currentIndexBlokmPuri = 0;
var currentIndexBsenayanTuguGas = 0;
var currentIndexKrambutanKmelayu = 0;
var currentIndexBlokmJoglo = 0;
var currentIndexPkelapaBKN = 0;
var currentIndexTpriokSenen = 0;
var currentIndexPgadungPgebang = 0;

// var global for keretaData
var iterateTimeout;

function BlokMKota(map){
  if (currentIndexBlokmKota < Tj_blokm_kota.length) {
    mapCenter = {
      lat: Tj_blokm_kota[currentIndexBlokmKota][0],
      lng: Tj_blokm_kota[currentIndexBlokmKota][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_BlokmKota == "") {
        marker_BlokmKota = new google.maps.Marker({
            position: mapCenter,
            map: map,
            info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Blok M - Kota</p>'  
            + ' ' + 
            '<h3><span class="badge badge-secondary" style="background-color: rgb(208, 32, 39);">1</span></h3>',
            icon: icon,
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_BlokmKota, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
        marker_BlokmKota.setPosition(mapCenter);
    }
    if (backwardBlokmKota) {
      currentIndexBlokmKota -= 1;
    } else {
      currentIndexBlokmKota += 1;
    }
    iterateTimeout = setTimeout(function () {
      BlokMKota()
          }, 2000);
      } else {
          if (backwardBlokmKota) {
              backwardBlokmKota = false;
          } else {
            backwardBlokmKota = true;
              currentIndexBlokmKota -= 1;
          }
          backwardBlokmKota = true;
          BlokMKota()
      }
}

function PgadungTosari(map){
  if (currentIndexPulogadungTosari < Tj_pulogadung_tosari.length) {
    mapCenter = {
      lat: Tj_pulogadung_tosari[currentIndexPulogadungTosari][0],
      lng: Tj_pulogadung_tosari[currentIndexPulogadungTosari][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_PulogadungTosari == "") {
      marker_PulogadungTosari = new google.maps.Marker({
            position: mapCenter,
            map: map,
            info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Pulo Gadung - Tosari</p>'  
            + ' ' + 
            '<h3><span class="badge badge-secondary" style="background-color: rgb(93, 46, 100);">4</span></h3>',
            icon: icon,
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_PulogadungTosari, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_PulogadungTosari.setPosition(mapCenter);
    }
    if (backwardPulogadungTosari) {
      currentIndexPulogadungTosari -= 1;
    } else {
      currentIndexPulogadungTosari += 1;
    }
    iterateTimeout = setTimeout(function () {
      PgadungTosari()
          }, 2000);
      } else {
          if (backwardPulogadungTosari) {
            backwardPulogadungTosari = false;
          } else {
            backwardPulogadungTosari = true;
              currentIndexPulogadungTosari -= 1;
          }
          backwardPulogadungTosari = true;
          PgadungTosari()
      }
}

function harmoniGrogol(map){
  if (currentIndexHarmoniGrogol < Tj_harmoni_grogol.length) {
    mapCenter = {
      lat: Tj_harmoni_grogol[currentIndexHarmoniGrogol][0],
      lng: Tj_harmoni_grogol[currentIndexHarmoniGrogol][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_HarmoniGrogol == "") {
      marker_HarmoniGrogol = new google.maps.Marker({
            position: mapCenter,
            map: map,
            info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Harmoni - Grogol</p>'  
            + ' ' + 
            '<h3><span class="badge badge-secondary" style="background-color: rgb(151, 42, 112);">8A</span></h3>',
            icon: icon,
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_HarmoniGrogol, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_HarmoniGrogol.setPosition(mapCenter);
    }
    if (backwardHarmoniGrogol) {
      currentIndexHarmoniGrogol -= 1;
    } else {
      currentIndexHarmoniGrogol += 1;
    }
    iterateTimeout = setTimeout(function () {
      harmoniGrogol()
          }, 2000);
      } else {
          if (backwardHarmoniGrogol) {
            backwardHarmoniGrogol = false;
          } else {
            backwardHarmoniGrogol = true;
            currentIndexHarmoniGrogol -= 1;
          }
          backwardHarmoniGrogol = true;
          harmoniGrogol()
      }
}

function KmelayuPgebang(map){
  if (currentIndexKmelayuPulogebang < Tj_KMelayu_PuloGebang.length) {
    mapCenter = {
      lat: Tj_KMelayu_PuloGebang[currentIndexKmelayuPulogebang][0],
      lng: Tj_KMelayu_PuloGebang[currentIndexKmelayuPulogebang][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_KmelayuPulogebang == "") {
      marker_KmelayuPulogebang = new google.maps.Marker({
            position: mapCenter,
            map: map,
            info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Kampung Melayu - Pulo Gebang</p>'  
            + ' ' + 
            '<h3><span class="badge badge-secondary" style="background-color: rgb(47, 79, 162);">11</span></h3>',
            icon: icon,
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_KmelayuPulogebang, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_KmelayuPulogebang.setPosition(mapCenter);
    }
    if (backwardKmelayuPulogebang) {
      currentIndexKmelayuPulogebang -= 1;
    } else {
      currentIndexKmelayuPulogebang += 1;
    }
    iterateTimeout = setTimeout(function () {
      KmelayuPgebang()
          }, 2000);
      } else {
          if (backwardKmelayuPulogebang) {
            backwardKmelayuPulogebang = false;
          } else {
            backwardKmelayuPulogebang = true;
            currentIndexKmelayuPulogebang -= 1;
          }
          backwardKmelayuPulogebang = true;
          KmelayuPgebang()
      }
}

function PgadungPKuningan(map){
  if (currentIndexPgadungPkuningan < Tj_PGadung_PKuningan.length) {
    mapCenter = {
      lat: Tj_PGadung_PKuningan[currentIndexPgadungPkuningan][0],
      lng: Tj_PGadung_PKuningan[currentIndexPgadungPkuningan][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_PgadungPkuningan == "") {
      marker_PgadungPkuningan = new google.maps.Marker({
            position: mapCenter,
            map: map,
            info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Pulo Gadung - Patra Kuningan</p>'  
            + ' ' + 
            '<h3><span class="badge badge-secondary" style="background-color: rgb(93, 46, 100);">4D</span></h3>',
            icon: icon,
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_PgadungPkuningan, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_PgadungPkuningan.setPosition(mapCenter);
    }
    if (backwardPgadungPkuningan) {
      currentIndexPgadungPkuningan -= 1;
    } else {
      currentIndexPgadungPkuningan += 1;
    }
    iterateTimeout = setTimeout(function () {
      PgadungPKuningan()
          }, 2000);
      } else {
          if (backwardPgadungPkuningan) {
            backwardPgadungPkuningan = false;
          } else {
            backwardPgadungPkuningan = true;
            currentIndexPgadungPkuningan -= 1;
          }
          backwardPgadungPkuningan = true;
          PgadungPKuningan()
      }
}

function RagunanMonasKuningan(map){
  if (currentIndexRagunanMonasKuningan < Tj_Ragunan_Monas_Kuningan.length) {
    mapCenter = {
      lat: Tj_Ragunan_Monas_Kuningan[currentIndexRagunanMonasKuningan][0],
      lng: Tj_Ragunan_Monas_Kuningan[currentIndexRagunanMonasKuningan][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_RagunanMonasKuningan == "") {
      marker_RagunanMonasKuningan = new google.maps.Marker({
            position: mapCenter,
            map: map,
            info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Ragunan - Monas - Kuningan</p>'
            + ' ' + 
            '<h3><span class="badge badge-secondary" style="background-color: rgb(152, 194, 116);">6A</span></h3>',
            icon: icon,
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_RagunanMonasKuningan, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_RagunanMonasKuningan.setPosition(mapCenter);
    }
    if (backwardRagunanMonasKuningan) {
      currentIndexRagunanMonasKuningan -= 1;
    } else {
      currentIndexRagunanMonasKuningan += 1;
    }
    iterateTimeout = setTimeout(function () {
      RagunanMonasKuningan()
          }, 2000);
      } else {
          if (backwardRagunanMonasKuningan) {
            backwardRagunanMonasKuningan = false;
          } else {
            backwardRagunanMonasKuningan = true;
            currentIndexRagunanMonasKuningan -= 1;
          }
          backwardRagunanMonasKuningan = true;
          RagunanMonasKuningan()
      }
}

function ManggaraiBlokm(map){
  if (currentIndexManggaraiBlokm < Tj_Manggarai_BlokM.length) {
    mapCenter = {
      lat: Tj_Manggarai_BlokM[currentIndexManggaraiBlokm][0],
      lng: Tj_Manggarai_BlokM[currentIndexManggaraiBlokm][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_ManggaraiBlokm == "") {
      marker_ManggaraiBlokm = new google.maps.Marker({
            position: mapCenter,
            map: map,
            info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Manggarai - Blok M</p>'
            + ' ' + 
            '<h3><span class="badge badge-secondary" style="background-color: rgb(122, 53, 105);">6M</span></h3>',
            icon: icon,
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_ManggaraiBlokm, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_ManggaraiBlokm.setPosition(mapCenter);
    }
    if (backwardManggaraiBlokm) {
      currentIndexManggaraiBlokm -= 1;
    } else {
      currentIndexManggaraiBlokm += 1;
    }
    iterateTimeout = setTimeout(function () {
      ManggaraiBlokm()
          }, 2000);
      } else {
          if (backwardManggaraiBlokm) {
            backwardManggaraiBlokm = false;
          } else {
            backwardManggaraiBlokm = true;
            currentIndexManggaraiBlokm -= 1;
          }
          backwardManggaraiBlokm = true;
          ManggaraiBlokm()
      }
}

function LbulusHarmoni(map){
  if (currentIndexLbulusHarmoni < Tj_Lbulus_Harmoni.length) {
    mapCenter = {
      lat: Tj_Lbulus_Harmoni[currentIndexLbulusHarmoni][0],
      lng: Tj_Lbulus_Harmoni[currentIndexLbulusHarmoni][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_LbulusHarmoni == "") {
      marker_LbulusHarmoni = new google.maps.Marker({
            position: mapCenter,
            map: map,
            info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Lebak Bulus - Harmoni </p>' 
            + ' ' + 
            '<h3><span class="badge badge-secondary" style="background-color: rgb(218, 37, 154);">8</span></h3>',
            icon: icon,
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_LbulusHarmoni, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_LbulusHarmoni.setPosition(mapCenter);
    }
    if (backwardLbulusHarmoni) {
      currentIndexLbulusHarmoni -= 1;
    } else {
      currentIndexLbulusHarmoni += 1;
    }
    iterateTimeout = setTimeout(function () {
      LbulusHarmoni()
          }, 2000);
      } else {
          if (backwardLbulusHarmoni) {
            backwardLbulusHarmoni = false;
          } else {
            backwardLbulusHarmoni = true;
            currentIndexLbulusHarmoni -= 1;
          }
          backwardLbulusHarmoni = true;
          LbulusHarmoni()
      }
}

function RagunanMonasSemanggi(map){
  if (currentIndexRagunanMonasKuningan < Tj_Ragunan_Monas_Semanggi.length) {
    mapCenter = {
      lat: Tj_Ragunan_Monas_Semanggi[currentIndexRagunanMonasKuningan][0],
      lng: Tj_Ragunan_Monas_Semanggi[currentIndexRagunanMonasKuningan][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_RagunanMonasSemanggi == "") {
      marker_RagunanMonasSemanggi = new google.maps.Marker({
          position: mapCenter,
          map: map,
          info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Ragunan - Monas - Semanggi </p>'
          + ' ' + 
          '<h3><span class="badge badge-secondary" style="background-color: rgb(116, 194, 137);">6B</span></h3>',
          icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_RagunanMonasSemanggi, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_RagunanMonasSemanggi.setPosition(mapCenter);
    }
    if (backwardRagunanMonasKuningan) {
      currentIndexRagunanMonasKuningan -= 1;
    } else {
      currentIndexRagunanMonasKuningan += 1;
    }
    iterateTimeout = setTimeout(function () {
      RagunanMonasSemanggi()
    }, 2000);
      } else {
          if (backwardRagunanMonasKuningan) {
            backwardRagunanMonasKuningan = false;
          } else {
            backwardRagunanMonasKuningan = true;
            currentIndexRagunanMonasKuningan -= 1;
          }
          backwardRagunanMonasKuningan = true;
          RagunanMonasSemanggi()
      }
}

function TosariPalmerah(map){
  if (currentIndexTosariPalmerah < Tj_Tosari_ICBC_Palmerah.length) {
    mapCenter = {
      lat: Tj_Tosari_ICBC_Palmerah[currentIndexTosariPalmerah][0],
      lng: Tj_Tosari_ICBC_Palmerah[currentIndexTosariPalmerah][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_TosariPalmerah == "") {
      marker_TosariPalmerah = new google.maps.Marker({
          position: mapCenter,
          map: map,
          info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Tosari - Palmerah </p>' 
          + ' ' + 
          '<h3><span class="badge badge-secondary" style="background-color: rgb(42, 168, 164);">1B</span></h3>',
          icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_TosariPalmerah, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_TosariPalmerah.setPosition(mapCenter);
    }
    if (backwardTosariPalmerah) {
      currentIndexTosariPalmerah -= 1;
    } else {
      currentIndexTosariPalmerah += 1;
    }
    iterateTimeout = setTimeout(function () {
      TosariPalmerah()
    }, 2000);
      } else {
          if (backwardTosariPalmerah) {
            backwardTosariPalmerah = false;
          } else {
            backwardTosariPalmerah = true;
            currentIndexTosariPalmerah -= 1;
          }
          backwardTosariPalmerah = true;
          TosariPalmerah()
      }
}

function kalideresGBK(map){
  if (currentIndexKalideresGbk < Tj_Kalideres_GBK.length) {
    mapCenter = {
      lat: Tj_Kalideres_GBK[currentIndexKalideresGbk][0],
      lng: Tj_Kalideres_GBK[currentIndexKalideresGbk][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_KalideresGbk == "") {
      marker_KalideresGbk = new google.maps.Marker({
          position: mapCenter,
          map: map,
          info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Kalideres - GBK </p>'  
          + ' ' + 
          '<h3><span class="badge badge-secondary" style="background-color: rgb(179, 146, 51);">3F</span></h3>',
          icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_KalideresGbk, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_KalideresGbk.setPosition(mapCenter);
    }
    if (backwardKalideresGbk) {
      currentIndexKalideresGbk -= 1;
    } else {
      currentIndexKalideresGbk += 1;
    }
    iterateTimeout = setTimeout(function () {
      kalideresGBK()
    }, 2000);
      } else {
          if (backwardKalideresGbk) {
            backwardKalideresGbk = false;
          } else {
            backwardKalideresGbk = true;
            currentIndexKalideresGbk -= 1;
          }
          backwardKalideresGbk = true;
          kalideresGBK()
      }
}

function kalideresPsbaru(map){
  if (currentIndexKalideresPsbaru < Tj_Kalideres_PsBaru.length) {
    mapCenter = {
      lat: Tj_Kalideres_PsBaru[currentIndexKalideresPsbaru][0],
      lng: Tj_Kalideres_PsBaru[currentIndexKalideresPsbaru][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_KalideresPsbaru == "") {
      marker_KalideresPsbaru = new google.maps.Marker({
          position: mapCenter,
          map: map,
          info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Kali Deres - Pasar Baru </p>' 
          + ' ' + 
          '<h3><span class="badge badge-secondary" style="background-color: rgb(237, 185, 0);">3</span></h3>',
          icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_KalideresPsbaru, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_KalideresPsbaru.setPosition(mapCenter);
    }
    if (backwardKalideresPsbaru) {
      currentIndexKalideresPsbaru -= 1;
    } else {
      currentIndexKalideresPsbaru += 1;
    }
    iterateTimeout = setTimeout(function () {
      kalideresPsbaru()
    }, 2000);
      } else {
          if (backwardKalideresPsbaru) {
            backwardKalideresPsbaru = false;
          } else {
            backwardKalideresPsbaru = true;
            currentIndexKalideresPsbaru -= 1;
          }
          backwardKalideresPsbaru = true;
          kalideresPsbaru()
      }
}

function HalimunPuri(map){
  if (currentIndexHalimunPuribeta < Tj_Halimun_PuriBeta.length) {
    mapCenter = {
      lat: Tj_Halimun_PuriBeta[currentIndexHalimunPuribeta][0],
      lng: Tj_Halimun_PuriBeta[currentIndexHalimunPuribeta][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_HalimunPuribeta == "") {
      marker_HalimunPuribeta = new google.maps.Marker({
          position: mapCenter,
          map: map,
          info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Halimun - Puri Beta </p>'  + ' ' + '<p>Kode : -</p>',
          icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_HalimunPuribeta, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_HalimunPuribeta.setPosition(mapCenter);
    }
    if (backwardHalimunPuribeta) {
      currentIndexHalimunPuribeta -= 1;
    } else {
      currentIndexHalimunPuribeta += 1;
    }
    iterateTimeout = setTimeout(function () {
      HalimunPuri()
    }, 2000);
      } else {
          if (backwardHalimunPuribeta) {
            backwardHalimunPuribeta = false;
          } else {
            backwardHalimunPuribeta = true;
            currentIndexHalimunPuribeta -= 1;
          }
          backwardHalimunPuribeta = true;
          HalimunPuri()
      }
}

function KmelayuAncol(map){
  if (currentIndexKpmelayuAncol < Tj_KMelayu_Ancol.length) {
    mapCenter = {
      lat: Tj_KMelayu_Ancol[currentIndexKpmelayuAncol][0],
      lng: Tj_KMelayu_Ancol[currentIndexKpmelayuAncol][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_KpmelayuAncol == "") {
      marker_KpmelayuAncol = new google.maps.Marker({
          position: mapCenter,
          map: map,
          info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Kampung Melayu - Ancol </p>' 
          + ' ' + 
          '<h3><span class="badge badge-secondary" style="background-color: rgb(200, 95, 27);">5</span></h3>',
          icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_KpmelayuAncol, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_KpmelayuAncol.setPosition(mapCenter);
    }
    if (backwardKpmelayuAncol) {
      currentIndexKpmelayuAncol -= 1;
    } else {
      currentIndexKpmelayuAncol += 1;
    }
    iterateTimeout = setTimeout(function () {
      KmelayuAncol()
    }, 2000);
      } else {
          if (backwardKpmelayuAncol) {
            backwardKpmelayuAncol = false;
          } else {
            backwardKpmelayuAncol = true;
            currentIndexKpmelayuAncol -= 1;
          }
          backwardKpmelayuAncol = true;
          KmelayuAncol()
      }
}

function PgcTPriok(map){
  if (currentIndexpgcTpriok < Tj_Pgc_Tpriok.length) {
    mapCenter = {
      lat: Tj_Pgc_Tpriok[currentIndexpgcTpriok][0],
      lng: Tj_Pgc_Tpriok[currentIndexpgcTpriok][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_pgcTpriok == "") {
      marker_pgcTpriok = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan PGC - Tanjung Priok </p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(143, 26, 30);">10</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_pgcTpriok, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_pgcTpriok.setPosition(mapCenter);
    }
    if (backwardpgcTpriok) {
      currentIndexpgcTpriok -= 1;
    } else {
      currentIndexpgcTpriok += 1;
    }
    iterateTimeout = setTimeout(function () {
      PgcTPriok()
    }, 2000);
      } else {
          if (backwardpgcTpriok) {
            backwardpgcTpriok = false;
          } else {
            backwardpgcTpriok = true;
            currentIndexpgcTpriok -= 1;
          }
          backwardpgcTpriok = true;
          PgcTPriok()
      }
}

function PgcHarmoni(map){
  if (currentIndexpgcHarmoni < Tj_PGC_Harmoni.length) {
    mapCenter = {
      lat: Tj_PGC_Harmoni[currentIndexpgcHarmoni][0],
      lng: Tj_PGC_Harmoni[currentIndexpgcHarmoni][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_pgcHarmoni == "") {
      marker_pgcHarmoni = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan PGC - Harmoni </p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(115, 204, 213);">5C</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_pgcHarmoni, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_pgcHarmoni.setPosition(mapCenter);
    }
    if (backwardpgcHarmoni) {
      currentIndexpgcHarmoni -= 1;
    } else {
      currentIndexpgcHarmoni += 1;
    }
    iterateTimeout = setTimeout(function () {
      PgcHarmoni()
    }, 2000);
      } else {
          if (backwardpgcHarmoni) {
            backwardpgcHarmoni = false;
          } else {
            backwardpgcHarmoni = true;
            currentIndexpgcHarmoni -= 1;
          }
          backwardpgcHarmoni = true;
          PgcHarmoni()
      }
}

function PinangrantiPluit(map){
  if (currentIndexPinangrantiPluit < Tj_PinangRanti_Pluit.length) {
    mapCenter = {
      lat: Tj_PinangRanti_Pluit[currentIndexPinangrantiPluit][0],
      lng: Tj_PinangRanti_Pluit[currentIndexPinangrantiPluit][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_PinangrantiPluit == "") {
      marker_PinangrantiPluit = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Pinang Ranti - Pluit</p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(68, 159, 152);">9</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_PinangrantiPluit, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_PinangrantiPluit.setPosition(mapCenter);
    }
    if (backwardPinangrantiPluit) {
      currentIndexPinangrantiPluit -= 1;
    } else {
      currentIndexPinangrantiPluit += 1;
    }
    iterateTimeout = setTimeout(function () {
      PinangrantiPluit()
    }, 2000);
      } else {
          if (backwardPinangrantiPluit) {
            backwardPinangrantiPluit = false;
          } else {
            backwardPinangrantiPluit = true;
            currentIndexPinangrantiPluit -= 1;
          }
          backwardPinangrantiPluit = true;
          PinangrantiPluit()
      }
}

function PgadungTosari(map){
  if (currentIndexPgadungTosari < Tj_PGadung_Tosari.length) {
    mapCenter = {
      lat: Tj_PGadung_Tosari[currentIndexPgadungTosari][0],
      lng: Tj_PGadung_Tosari[currentIndexPgadungTosari][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_PgadungTosari == "") {
      marker_PgadungTosari = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Pulo Gadung - Tosari</p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(93, 46, 100);">9</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_PgadungTosari, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_PgadungTosari.setPosition(mapCenter);
    }
    if (backwardPgadungTosari) {
      currentIndexPgadungTosari -= 1;
    } else {
      currentIndexPgadungTosari += 1;
    }
    iterateTimeout = setTimeout(function () {
      PgadungTosari()
    }, 2000);
      } else {
          if (backwardPgadungTosari) {
            backwardPgadungTosari = false;
          } else {
            backwardPgadungTosari = true;
            currentIndexPgadungTosari -= 1;
          }
          backwardPgadungTosari = true;
          PgadungTosari()
      }
}

function RagunanHalimun(map){
  if (currentIndexRagunanHalimun < Tj_Ragunan_Halimun.length) {
    mapCenter = {
      lat: Tj_Ragunan_Halimun[currentIndexRagunanHalimun][0],
      lng: Tj_Ragunan_Halimun[currentIndexRagunanHalimun][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_RagunanHalimun == "") {
      marker_RagunanHalimun = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Ragunan - Halimun</p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(49, 165, 66);">6</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_RagunanHalimun, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_RagunanHalimun.setPosition(mapCenter);
    }
    if (backwardRagunanHalimun) {
      currentIndexRagunanHalimun -= 1;
    } else {
      currentIndexRagunanHalimun += 1;
    }
    iterateTimeout = setTimeout(function () {
      RagunanHalimun()
    }, 2000);
      } else {
          if (backwardRagunanHalimun) {
            backwardRagunanHalimun = false;
          } else {
            backwardRagunanHalimun = true;
            currentIndexRagunanHalimun -= 1;
          }
          backwardRagunanHalimun = true;
          RagunanHalimun()
      }
}

function STebetKaret(map){
  if (currentIndexTebetKaret < Tj_Tebet_Karet.length) {
    mapCenter = {
      lat: Tj_Tebet_Karet[currentIndexTebetKaret][0],
      lng: Tj_Tebet_Karet[currentIndexTebetKaret][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_TebetKaret == "") {
      marker_TebetKaret = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Tebet - Karet</p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(129, 153, 103);">6D</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_TebetKaret, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_TebetKaret.setPosition(mapCenter);
    }
    if (backwardTebetKaret) {
      currentIndexTebetKaret -= 1;
    } else {
      currentIndexTebetKaret += 1;
    }
    iterateTimeout = setTimeout(function () {
      STebetKaret()
    }, 2000);
      } else {
          if (backwardTebetKaret) {
            backwardTebetKaret = false;
          } else {
            backwardTebetKaret = true;
            currentIndexTebetKaret -= 1;
          }
          backwardTebetKaret = true;
          STebetKaret()
      }
}

function STebetPKuninganKaret(map){
  if (currentIndexTebetKaretKuningan < Tj_Tebet_Kuningan_Karet.length) {
    mapCenter = {
      lat: Tj_Tebet_Kuningan_Karet[currentIndexTebetKaretKuningan][0],
      lng: Tj_Tebet_Kuningan_Karet[currentIndexTebetKaretKuningan][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_TebetKaretKuningan == "") {
      marker_TebetKaretKuningan = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Tebet - Patra Kuningan - Karet</p>' 
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(100, 121, 80);">6C</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_TebetKaretKuningan, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_TebetKaretKuningan.setPosition(mapCenter);
    }
    if (backwardTebetKaretKuningan) {
      currentIndexTebetKaretKuningan -= 1;
    } else {
      currentIndexTebetKaretKuningan += 1;
    }
    iterateTimeout = setTimeout(function () {
      STebetPKuninganKaret()
    }, 2000);
      } else {
          if (backwardTebetKaretKuningan) {
            backwardTebetKaretKuningan = false;
          } else {
            backwardTebetKaretKuningan = true;
            currentIndexTebetKaretKuningan -= 1;
          }
          backwardTebetKaretKuningan = true;
          STebetPKuninganKaret()
      }
}

function TeandeanCiledug(map){
  if (currentIndexTendeanCiledug < Tj_Tendean_Ciledug.length) {
    mapCenter = {
      lat: Tj_Tendean_Ciledug[currentIndexTendeanCiledug][0],
      lng: Tj_Tendean_Ciledug[currentIndexTendeanCiledug][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_TendeanCiledug == "") {
      marker_TendeanCiledug = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Tendean - Ciledug</p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(92, 53, 157);">13</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_TendeanCiledug, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_TendeanCiledug.setPosition(mapCenter);
    }
    if (backwardTendeanCiledug) {
      currentIndexTendeanCiledug -= 1;
    } else {
      currentIndexTendeanCiledug += 1;
    }
    iterateTimeout = setTimeout(function () {
      TeandeanCiledug()
    }, 2000);
      } else {
          if (backwardTendeanCiledug) {
            backwardTendeanCiledug = false;
          } else {
            backwardTendeanCiledug = true;
            currentIndexTendeanCiledug -= 1;
          }
          backwardTendeanCiledug = true;
          TeandeanCiledug()
      }
}

function PenjaringanSunter(map){
  if (currentIndexPejaringanSunter < Tj_Penjaringan_Sunter.length) {
    mapCenter = {
      lat: Tj_Penjaringan_Sunter[currentIndexPejaringanSunter][0],
      lng: Tj_Penjaringan_Sunter[currentIndexPejaringanSunter][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_PejaringanSunter == "") {
      marker_PejaringanSunter = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Penjaringan - Sunter</p>' 
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(98, 189, 115);">12</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_PejaringanSunter, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_PejaringanSunter.setPosition(mapCenter);
    }
    if (backwardPejaringanSunter) {
      currentIndexPejaringanSunter -= 1;
    } else {
      currentIndexPejaringanSunter += 1;
    }
    iterateTimeout = setTimeout(function () {
      PenjaringanSunter()
    }, 2000);
      } else {
          if (backwardPejaringanSunter) {
            backwardPejaringanSunter = false;
          } else {
            backwardPejaringanSunter = true;
            currentIndexPejaringanSunter -= 1;
          }
          backwardPejaringanSunter = true;
          PenjaringanSunter()
      }
}

function TosariPuri(map){
  if (currentIndexTosariPuri < Tj_Tosari_Puri.length) {
    mapCenter = {
      lat: Tj_Tosari_Puri[currentIndexTosariPuri][0],
      lng: Tj_Tosari_Puri[currentIndexTosariPuri][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_TosariPuri == "") {
      marker_TosariPuri = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Tosari - Puri Beta</p>'  
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(105, 51, 139);">13C</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_TosariPuri, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_TosariPuri.setPosition(mapCenter);
    }
    if (backwardTosariPuri) {
      currentIndexTosariPuri -= 1;
    } else {
      currentIndexTosariPuri += 1;
    }
    iterateTimeout = setTimeout(function () {
      TosariPuri()
    }, 2000);
      } else {
          if (backwardTosariPuri) {
            backwardTosariPuri = false;
          } else {
            backwardTosariPuri = true;
            currentIndexTosariPuri -= 1;
          }
          backwardTosariPuri = true;
          TosariPuri()
      }
}

function BlokmPuri(map){
  if (currentIndexBlokmPuri < Tj_Blokm_Puri.length) {
    mapCenter = {
      lat: Tj_Blokm_Puri[currentIndexBlokmPuri][0],
      lng: Tj_Blokm_Puri[currentIndexBlokmPuri][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_BlokmPuri == "") {
      marker_BlokmPuri = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Blok M - Puri</p>'  
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(92, 52, 141);">13A</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_BlokmPuri, 'click', function () {
            infowindow.setContent(this.info);w
            infowindow.open(map, this);
        });
    } else {
      marker_BlokmPuri.setPosition(mapCenter);
    }
    if (backwardBlokmPuri) {
      currentIndexBlokmPuri -= 1;
    } else {
      currentIndexBlokmPuri += 1;
    }
    iterateTimeout = setTimeout(function () {
      BlokmPuri()
    }, 2000);
      } else {
          if (backwardBlokmPuri) {
            backwardBlokmPuri = false;
          } else {
            backwardBlokmPuri = true;
            currentIndexBlokmPuri -= 1;
          }
          backwardBlokmPuri = true;
          BlokmPuri()
      }
}

function BsenayanGas(map){
  if (currentIndexBsenayanTuguGas < Tj_BSenayan_TuguGas.length) {
    mapCenter = {
      lat: Tj_BSenayan_TuguGas[currentIndexBsenayanTuguGas][0],
      lng: Tj_BSenayan_TuguGas[currentIndexBsenayanTuguGas][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_BsenayanTuguGas == "") {
      marker_BsenayanTuguGas = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Bunderan Senayan - Tugu Gas</p>'  
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(173, 117, 178);">4C</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_BsenayanTuguGas, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_BsenayanTuguGas.setPosition(mapCenter);
    }
    if (backwardBsenayanTuguGas) {
      currentIndexBsenayanTuguGas -= 1;
    } else {
      currentIndexBsenayanTuguGas += 1;
    }
    iterateTimeout = setTimeout(function () {
      BsenayanGas()
    }, 2000);
      } else {
          if (backwardBsenayanTuguGas) {
            backwardBsenayanTuguGas = false;
          } else {
            backwardBsenayanTuguGas = true;
            currentIndexBsenayanTuguGas -= 1;
          }
          backwardBsenayanTuguGas = true;
          BsenayanGas()
      }
}


function RambutanMelayu(map){
  if (currentIndexKrambutanKmelayu < Tj_kprambutan_Kpmelayu.length) {
    mapCenter = {
      lat: Tj_kprambutan_Kpmelayu[currentIndexKrambutanKmelayu][0],
      lng: Tj_kprambutan_Kpmelayu[currentIndexKrambutanKmelayu][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_KrambutanKmelayu == "") {
      marker_KrambutanKmelayu = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun kampung Rambutan - Kampung Melayu</p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(236, 38, 97);">7</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_KrambutanKmelayu, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_KrambutanKmelayu.setPosition(mapCenter);
    }
    if (backwardKrambutanKmelayu) {
      currentIndexKrambutanKmelayu -= 1;
    } else {
      currentIndexKrambutanKmelayu += 1;
    }
    iterateTimeout = setTimeout(function () {
      RambutanMelayu()
    }, 2000);
      } else {
          if (backwardKrambutanKmelayu) {
            backwardKrambutanKmelayu = false;
          } else {
            backwardKrambutanKmelayu = true;
            currentIndexKrambutanKmelayu -= 1;
          }
          backwardKrambutanKmelayu = true;
          RambutanMelayu()
      }
}

function BlokmJoglo(map){
  if (currentIndexBlokmJoglo < Tj_Blokm_Joglo.length) {
    mapCenter = {
      lat: Tj_Blokm_Joglo[currentIndexBlokmJoglo][0],
      lng: Tj_Blokm_Joglo[currentIndexBlokmJoglo][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_BlokmJoglo == "") {
      marker_BlokmJoglo = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Blok M - Joglo</p>' 
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(55, 143, 148);">8D</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_BlokmJoglo, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_BlokmJoglo.setPosition(mapCenter);
    }
    if (backwardBlokmJoglo) {
      currentIndexBlokmJoglo -= 1;
    } else {
      currentIndexBlokmJoglo += 1;
    }
    iterateTimeout = setTimeout(function () {
      BlokmJoglo()
    }, 2000);
      } else {
          if (backwardBlokmJoglo) {
            backwardBlokmJoglo = false;
          } else {
            backwardBlokmJoglo = true;
            currentIndexBlokmJoglo -= 1;
          }
          backwardBlokmJoglo = true;
          BlokmJoglo()
      }
}


function PKelapaBkn(map){
  if (currentIndexPkelapaBKN < Tj_PKelapa_BKN.length) {
    mapCenter = {
      lat: Tj_PKelapa_BKN[currentIndexPkelapaBKN][0],
      lng: Tj_PKelapa_BKN[currentIndexPkelapaBKN][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (maker_PkelapaBKN == "") {
      maker_PkelapaBKN = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Pondok Kelapa - BKN</p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(145, 29, 60);">7P</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(maker_PkelapaBKN, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      maker_PkelapaBKN.setPosition(mapCenter);
    }
    if (backwardPkelapaBKN) {
      currentIndexPkelapaBKN -= 1;
    } else {
      currentIndexPkelapaBKN += 1;
    }
    iterateTimeout = setTimeout(function () {
      PKelapaBkn()
    }, 2000);
      } else {
          if (backwardPkelapaBKN) {
            backwardPkelapaBKN = false;
          } else {
            backwardPkelapaBKN = true;
            currentIndexPkelapaBKN -= 1;
          }
          backwardPkelapaBKN = true;
          PKelapaBkn()
      }
}

function TpriokSenen(map){
  if (currentIndexTpriokSenen < Tj_TPriok_Senen.length) {
    mapCenter = {
      lat: Tj_TPriok_Senen[currentIndexTpriokSenen][0],
      lng: Tj_TPriok_Senen[currentIndexTpriokSenen][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_TpriokSenen == "") {
      marker_TpriokSenen = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Tanjung Priok - Senen</p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(139, 67, 68);">10K</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_TpriokSenen, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_TpriokSenen.setPosition(mapCenter);
    }
    if (backwardTpriokSenen) {
      currentIndexTpriokSenen -= 1;
    } else {
      currentIndexTpriokSenen += 1;
    }
    iterateTimeout = setTimeout(function () {
      TpriokSenen()
    }, 2000);
      } else {
          if (backwardTpriokSenen) {
            backwardTpriokSenen = false;
          } else {
            backwardTpriokSenen = true;
            currentIndexTpriokSenen -= 1;
          }
          backwardTpriokSenen = true;
          TpriokSenen()
      }
}

function PgadungPgebang(map){
  if (currentIndexPgadungPgebang < Tj_Pgadung_Pgebang.length) {
    mapCenter = {
      lat: Tj_Pgadung_Pgebang[currentIndexPgadungPgebang][0],
      lng: Tj_Pgadung_Pgebang[currentIndexPgadungPgebang][1]
    };
    var icon = {
      url: SITE_LOCAL + "/img/icon/transjakarta.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    if (marker_PgadungPgebang == "") {
      marker_PgadungPgebang = new google.maps.Marker({
        position: mapCenter,
        map: map,
        info: '<B>Transjakarta</B>' + ' ' + '<br>' + '<br>' + '<p>Transjakarta Jurusan Stasiun Pulo Gadung - Pulo Gebang</p>'
        + ' ' + 
        '<h3><span class="badge badge-secondary" style="background-color: rgb(110, 127, 174);">11D</span></h3>',
        icon: icon,
      });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker_PgadungPgebang, 'click', function () {
            infowindow.setContent(this.info);
            infowindow.open(map, this);
        });
    } else {
      marker_PgadungPgebang.setPosition(mapCenter);
    }
    if (backwardPgadungPgebang) {
      currentIndexPgadungPgebang -= 1;
    } else {
      currentIndexPgadungPgebang += 1;
    }
    iterateTimeout = setTimeout(function () {
      PgadungPgebang()
    }, 2000);
      } else {
          if (backwardPgadungPgebang) {
            backwardPgadungPgebang = false;
          } else {
            backwardPgadungPgebang = true;
            currentIndexPgadungPgebang -= 1;
          }
          backwardPgadungPgebang = true;
          PgadungPgebang()
      }
}
