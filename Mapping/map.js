const api_url = "https://api.wheretheiss.at/v1/satellites/25544"
async function getIss() {
    const response = await fetch(api_url)
    const data = response.json();
    console.log(data)
}