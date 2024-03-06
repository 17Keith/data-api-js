// Attempting to get an array of images using either async/await or fetch().

console.log('displaying multiple images');

const imageURL = [
    'rainbow.jpg',
    'rainbow1.jpg',
    'rainbow2.jpg'
]
// Fetch images
async function getMultipleImages(urls) {
    const images = [];
    for (const url of urls) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`Failed to fetch image: ${url}`)
            }
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            images.push(imageUrl);
        }
        catch (error) {
            console.error('Error fetching rainbow image:', error);
            throw error;
        }
    }
    return images;
}

// Displaying the images

function displayImages(images) {
    const rainbowContainer = document.getElementById("rainbow");
    images.forEach(imageURL => {
        const imgElement = document.createElement('img');
        imgElement.src = imageURL;
        rainbowContainer.appendChild(imgElement);
    })
}

getMultipleImages(imageURL)
    .then(images => {
        console.log('Images fetched:', images);
        displayImages(images);
    })
    .catch(error => {
        console.error('Error fetching images:', error);
    });