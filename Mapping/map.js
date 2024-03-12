const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
let intervalId;
const markers = [];

// Added error handling. 
async function getIss() {
    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const { latitude, longitude, velocity } = data;

        // console.log("Velocity (m/s):", velocity);
        // const velocityKph = velocity * 3.6;

        // Convert time to localtime
        document.getElementById("lat").textContent = latitude;
        document.getElementById("lon").textContent = longitude;
        // document.getElementById("velo").textContent = velocityKph.toFixed(2) + " Km/H";

        // Remove previous markers
        markers.forEach(marker => {
            map.removeLayer(marker);
        });



        // Add an icon, instead of the default marker icon from leaflet

        const myIcon = L.icon({
            iconUrl: 'International_Space_Station.svg.png',
            iconSize: [50, 32],
            iconAnchor: [25, 16],
            popupAnchor: [-3, -76],
        });

        // Add new marker
        const marker = L.marker([latitude, longitude], { icon: myIcon }).addTo(map);
        markers.push(marker);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// function to set an interval where getIss is called every 5 seconds. 
function startInterval() {
    clearInterval(intervalId)
    intervalId = setInterval(getIss, 5000)
}

// Mapping the data
const map = L.map('issmap').setView([0, 0], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

startInterval();