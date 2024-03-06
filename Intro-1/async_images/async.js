console.log('using async function');

async function getRainbow() {
    const response = await fetch('rainbow.jpg');
    const blob = await response.blob();

    document.getElementById("rainbow").src = URL.createObjectURL(blob);


};
getRainbow();