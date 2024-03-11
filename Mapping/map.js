const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
let intervalId;

async function getIss() {
    const response = await fetch(api_url)
    const data = await response.json();
    const { latitude, longitude } = data;

    document.getElementById("lat").textContent = latitude;
    document.getElementById("lon").textContent = longitude;

};
getIss();

// function to set an interval where getIss is called every 5 seconds. 
function startInterval() {
    clearInterval(intervalId)
    intervalId = setInterval(getIss, 5000)
}

startInterval()