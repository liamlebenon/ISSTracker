let pos;
let speedText = document.getElementById('speed');
let altText = document.getElementById('altitude');
let iss;

const ISSLocation = () => {
    setInterval(async () => {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        iss = await response.json();
        pos = {lat: iss.latitude, lng: iss.longitude};
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
        console.log(iss)
    }, 5100);
}, 5500)
}


function updateDetails() {
  setInterval(() => {
      speedText.innerHTML = Math.round(iss.velocity * 100) / 100 + ' m/sec';
      altText.innerHTML = Math.round(iss.altitude * 100) / 100 + ' km'
    }, 5100)
}
updateDetails();



