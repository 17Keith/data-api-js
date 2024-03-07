// Attempting to work with csv files in JS. The file is already 'cleaned' and there are no missing values in it.

tabData();

async function tabData() {
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    // console.log(data)

    table.forEach(row => {

        const columns = row.split(',');
        const year = columns[0];
        const temp = columns[1];
        console.log(year, temp);
    });

}