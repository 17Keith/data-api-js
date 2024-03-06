console.log("fetching the image");
fetch("rainbow.jpg")
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response);
    return response.blob();
  })
  .then((blob) => {
    console.log(blob);
    document.getElementById("rainbow").src = URL.createObjectURL(blob);
  })
  .catch((error) => {
    console.log("error!");
    console.error(error);
  });
