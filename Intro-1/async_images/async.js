console.log('using async function');

getRainbow().catch(error => {
    console.log('error');
    console.error(error);
});
 
async function getRainbow() {
    try {
        const response = await fetch('rainbow.jpg');
        if (!response.ok) {
            throw new Error('Failed to fetch rainbow image');
        }
        const blob = await response.blob();

        document.getElementById("rainbow").src = URL.createObjectURL(blob);

    } catch (error) {
        console.error('Error fetching rainbow image:', error);
        throw error;


    }
}