
var ctx = document.getElementById('demoServers');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'maximum within a month',
            data: demoInstances,
            backgroundColor: 'rgba(75, 160, 100, 0.5)',
            borderColor: 'rgb(75, 160, 100)',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Running personal demo servers'
            }
        },
        scales: {
            xAxes: {
              type: 'time',
              time: {
                tooltipFormat: 'MMM yyyy',
                parser: 'yyyy-MM-dd',
              }
            }
        },
    }
});
