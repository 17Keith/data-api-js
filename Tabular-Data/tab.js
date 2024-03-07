// Attempting to work with csv files in JS. The file is already 'cleaned' and there are no missing values in it.

getData()

async function getData() {
    const response = await fetch('test.csv')
    const data = await response.text()

    console.log(data)
}