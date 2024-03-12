const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
let intervalId;

// Added error handling. 
async function getIss() {
    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const { latitude, longitude } = data;

        document.getElementById("lat").textContent = latitude;
        document.getElementById("lon").textContent = longitude;
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