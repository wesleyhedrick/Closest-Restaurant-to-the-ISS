import db from './db.js'
import c from './cred.js'
// import {getSummaryData} from './Scripts/getSummaryData.js'

let map;
let service;
let infowindow;

const zoom = 8;

export const loader = new google.maps.plugins.loader.Loader({
    apiKey: c, 
    version: "weekly",
    libraries: ['places']
});

// getSummaryData(lat, long, )

export function initMap(a,b){
    console.log(a,b)
    // function initMap() {
    // const issCoordinates = new google.maps.LatLng(34.907530, -82.250020);
    const issCoordinates = new google.maps.LatLng(a, b);
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById('map'), {
        center: issCoordinates,
        zoom: zoom,
    });

    
    let issIcon = new google.maps.MarkerImage('./Images/iss.png',
        null,
         // The origin for my image is 0,0.
         new google.maps.Point(0, 0),
         // The center of the image is 50,50 (my image is a circle with 100,100)
         new google.maps.Point(50, 50),
         new google.maps.Size(50, 50),
                  
          // scaled size
    )

    let issLocation = new google.maps.LatLng(a,b);
    new google.maps.Marker({
        position: issLocation,
        map: map,
        optimized: false,
        icon: issIcon
    })


    service = new google.maps.places.PlacesService(map);

    service.nearbySearch({
        location : issCoordinates,
        radius : 260934,
        type : [ 'restaurant' ]
    }, callback);    

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < 3; i++) {
                createMarker(results[i]);
                console.log(results[i])
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
    
    return map;
}
