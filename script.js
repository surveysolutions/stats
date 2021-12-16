
var ctx = document.getElementById('demoServers');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'maximum within the month',
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


var ctx = document.getElementById('designerUsers');
var myChart = new Chart(ctx, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Active users',
            yAxisID: 'yActive',
            data: designerActiveUsers,
            backgroundColor: 'rgba(75, 160, 100, 0.5)',
            borderColor: 'rgb(75, 160, 100)',
            borderWidth: 1
        },
        {
            type: 'line',
            label: 'New registrations',
            yAxisID: 'yReg',
            data: designerRegistrations,
            backgroundColor: 'rgba(100, 0, 0, 0.5)',
            borderColor: 'rgb(100, 0, 0)',
            borderWidth: 1,
            pointRadius: 0,
        }]
    },
    options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Designer users'
            }
        },
        scales: {
            xAxis: {
              type: 'time',
              time: {
                tooltipFormat: 'MMM yyyy',
                parser: 'yyyy-MM-dd',
              }
            },
            yActive: {
                type: 'linear',
                position: 'right',
            },
            yReg: {
                type: 'linear',
                position: 'left',
                grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                  }
            }
        },
    }
});

var ctx = document.getElementById('dockerhubPulls');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Monthly pulls',
            data: dockerhubPulls,
            backgroundColor: 'rgba(25, 25, 255, 0.5)',
            borderColor: 'rgb(25, 25, 255)',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Docker Hub official image usage'
            }
        },
        scales: {
            xAxes: {
              type: 'time',
              time: {
                tooltipFormat: 'MMM yyyy',
                parser: 'yyyy-MM-dd',
                unit: 'month'
              }
            }
        },
    }
});

var ctx = document.getElementById('installerDownloads');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Monthly downloads',
            data: installerDownloads,
            backgroundColor: 'rgba(25, 25, 255, 0.5)',
            borderColor: 'rgb(25, 25, 255)',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Downloads of Windows installer'
            }
        },
        scales: {
            xAxes: {
              type: 'time',
              time: {
                tooltipFormat: 'MMM yyyy',
                parser: 'yyyy-MM-dd',
                unit: 'month'
              }
            }
        },
    }
});

var ctx = document.getElementById('localServers');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'unique ip addresses seen within the month',
            data: localServers,
            backgroundColor: 'rgba(75, 160, 100, 0.5)',
            borderColor: 'rgb(75, 160, 100)',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Running client servers'
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