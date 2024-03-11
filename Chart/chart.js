// Displaying the dataset using Chart.js.

chartData();

async function chartData() {
    const data = await tabData();
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: data.xlabels,
            datasets: [
                {
                    label: "Global Average Temperature Difference in °C",
                    data: data.ytemps,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        // Include a degree sign in the ticks
                        callback: function(value, index, ticks) {
                            return value + '°';
                        }
                    }
                }
            }
        }
    });
}



async function tabData() {

    const xlabels = [];
    const ytemps = [];

    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    // console.log(data)

    table.forEach(row => {

        const columns = row.split(',');
        const year = columns[0];
        xlabels.push(year);
        const temp = columns[1];
        ytemps.push(parseFloat(temp) + 14);
        console.log(year, temp);
    });
    return { xlabels, ytemps };
}