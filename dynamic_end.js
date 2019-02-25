var map;
var latitude= 30;
var longitude = 50;
var cities_loc = [
    {lat: 39.72, lng: 104.99},
    {lat: 40.58, lng: 105.08},
    {lat: 41, lng: 106}
];
var cities = [];
function loadCities() {
  for(var i = 0; i < cities_loc.length; i++) {
    console.log(cities_loc[i].lng);
    var marker = new google.maps.Marker({position: uluru, map: map});
    console.log(x);
    cities.push(x);
  }
  for(var j = 0; i< cities.length; i++) {
    console.log(cities[j].position);
    cities[j].addListener('click', function() {
      darkon();
    });
  }
}
function darkon() {
  document.getElementById("darkoverlay").style.display = "block";
  //document.getElementById("myModal").style.display = "none";
  //data-toggle="modal" data-target="#myModal"
  const Http = new XMLHttpRequest();
  const url='http://infinigag.k3min.eu/funny/fresh';
  Http.open('GET',url);
  Http.send();
  Http.onreadystatechange=(e)=>{
  console.log(Http.responseText)
  }
}
function darkoff() {
  document.getElementById("darkoverlay").style.display = "none";
  //document.getElementById("myModal").style.display = "block";
}
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    //x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  initMap();
}
function initMap() {
  var Boulder = {lat: 40.004909, lng: -105.273347};
  var SanFrancisco = {lat: 37.7749, lng: -122.4194};
  var LosAngeles = {lat: 34.0522, lng: -118.2437};
  var SanDiego = {lat: 32.7157, lng: -117.1611};
  var LasVegas = {lat: 36.1699, lng: -115.1398};
  var Dallas = {lat: 32.7767, lng: -96.7970};
  var Houston = {lat: 29.7604, lng: -95.3698};
  var Anchorage = {lat: 61.2181, lng: -149.9003};
  var Chicago = {lat: 41.8781, lng: -87.6298};
  var Philadelphia = {lat: 39.9526, lng: -75.1652};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: latitude, lng: longitude},
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });var BoulderMarker = new google.maps.Marker({
    position: Boulder,
    map: map,
    icon: 'BubbleMeme.png',
    title: 'Click to darken'
  });
  var SanFranciscoMarker = new google.maps.Marker({
    position: SanFrancisco,
    map: map,
    icon: 'BubbleMeme.png',
    title: 'Click to darken'
  });
  var LosAngelesMarker = new google.maps.Marker({
    position: LosAngeles,
    map: map,
    icon: 'BubbleMeme.png',
    //icon: 'logo.png'
    title: 'Click to darken'
  });
  var SanDiegoMarker = new google.maps.Marker({
    position: SanDiego,
    map: map,
    icon: 'BubbleMeme.png',
    //icon: 'logo.png'
    title: 'Click to darken'
  });
  var LasVegasMarker = new google.maps.Marker({
    position: LasVegas,
    map: map,
    icon: 'BubbleMeme.png',
    //icon: 'logo.png'
    title: 'Click to darken'
  });
  var DallasMarker = new google.maps.Marker({
    position: Dallas,
    map: map,
    icon: 'BubbleMeme.png',
    //icon: 'logo.png'
    title: 'Click to darken'
  });
  var HoustonMarker = new google.maps.Marker({
    position: Houston,
    map: map,
    icon: 'BubbleMeme.png',
    //icon: 'logo.png'
    title: 'Click to darken'
  });
  var AnchorageMarker = new google.maps.Marker({
    position: Anchorage,
    map: map,
    icon: 'BubbleMeme.png',
    //icon: 'logo.png'
    title: 'Click to darken'
  });
  var ChicagoMarker = new google.maps.Marker({
    position: Chicago,
    map: map,
    icon: 'BubbleMeme.png',
    //icon: 'logo.png'
    title: 'Click to darken'
  });
  var PhiladelphiaMarker = new google.maps.Marker({
    position: Philadelphia,
    map: map,
    icon: 'BubbleMeme.png',
    //icon: 'logo.png'
    title: 'Click to darken'
  });

  //infoWindow = new google.maps.InfoWindow;
  BoulderMarker.addListener('click', function() {
    darkon();
  });
  SanFranciscoMarker.addListener('click', function() {
    darkon();
  });
  LosAngelesMarker.addListener('click', function() {
    darkon();
  });
  SanDiegoMarker.addListener('click', function() {
    darkon();
  });
  LasVegasMarker.addListener('click', function() {
    darkon();
  });
  DallasMarker.addListener('click', function() {
    darkon();
  });
  HoustonMarker.addListener('click', function() {
    darkon();
  });
  AnchorageMarker.addListener('click', function() {
    darkon();
  });
  ChicagoMarker.addListener('click', function() {
    darkon();
  });
  PhiladelphiaMarker.addListener('click', function() {
    darkon();
  });
  }
