let pos;
var markersArray = [];


const ISSLocation = () => {
    setInterval(async () => {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        let iss = await response.json();
        pos = {lat: iss.latitude, lng: iss.longitude}
    }, 5000)
}

ISSLocation();
let map;

function initMap() {
    setTimeout(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: 8,
  });
  const marker = 
    setInterval(() => {
        new google.maps.Marker({
            position: pos,
            map: map,
        });
        console.log(pos);
    }, 5100);
  console.log(pos)
}, 5500)
}



