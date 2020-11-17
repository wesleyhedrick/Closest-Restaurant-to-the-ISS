import db from './db.js'
import c from './cred.js'
// import c from './DigitalCrafts/Classes/cred.js'

let button = document.querySelector('button')
let map;
let service;
let infowindow;
let latitude = 34.907530;
let longitude = -82.250020;
// const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
const center = { lat: db[0], lng: db[1] };
// const center = { lat: latitude, lng: longitude};
console.log(db[0], db[1])
const zoom = 12;


const loader = new google.maps.plugins.loader.Loader({
    apiKey: c, 
    version: "weekly",
    libraries: ['places']
});


document.addEventListener("DOMContentLoaded", () => {
    button.addEventListener("click", () => {
        loader.load().then(() => {
            initMap(center.lat, center.lng)
            console.log(center.lat, center.lng)
        });
    });
});

function initMap(a,b){
console.log(a,b)
    // function initMap() {
    // const iss = new google.maps.LatLng(34.907530, -82.250020);
    const iss = new google.maps.LatLng(a, b);
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById('map'), {
    center: iss,
    zoom: zoom,
});

service = new google.maps.places.PlacesService(map);
service.nearbySearch({
    location : iss,
    radius : 10000,
    type : [ 'restaurant' ]
    }, callback);    
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < 3; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
});

google.maps.event.addListener(marker, "mouseover", () => {
        infowindow.setContent(place.name);
        infowindow.open(map, marker);
    });
}