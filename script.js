let pos;
let speedText = document.getElementById('speed');
let altText = document.getElementById('altitude');
let changeUnits = document.getElementById('changeUnits');
let kmPerHour = true;

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

changeUnits.addEventListener('click', changeSpeed);

function changeSpeed() {
  kmPerHour = !kmPerHour;
  kmPerHour ? changeUnits.innerHTML = 'View m/s' : changeUnits.innerHTML = 'View km/h'
}

function updateDetails() {
  setInterval(() => {

      if(kmPerHour) {
        speedText.innerHTML = iss.velocity.toFixed(2) + ' km/h';
      } else {
        speedText.innerHTML = (iss.velocity / 3.6).toFixed(2) + ' m/s'
      }
      altText.innerHTML = Math.round(iss.altitude * 100) / 100 + ' km'
    }, 5100)
}
updateDetails();



