// Access the location of the user, and log it. 

if ("geolocation" in navigator) {
    console.log('geolocation is available')
    navigator.geolocation.getCurrentPosition((position) => {

        const latitude = position.coords.latitude;
        document.getElementById('lat').textContent = latitude.toFixed(2);
        const longitude = position.coords.longitude;
        document.getElementById('lon').textContent = longitude.toFixed(2);
    });
} else {
    console.log('geolocation IS NOT available')
}


