var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var color = Chart.helpers.color;
var barChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep'],
  datasets: [{
    label: 'Dataset 1',
    backgroundColor: '#B68934',
    borderRadius:50,
    data: [
      10,
      20,
      45,
      22,
     100,
      18,
      5,
      50,
      60
    ]
  }]
};

window.onload = function() {
  var ctx = document.getElementById('chart').getContext('2d');
  window.myBar = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      scales: {
        xAxes: [{
            barPercentage: 0.4,
            gridLines : {display : false}      
        }
        ],
        yAxes: [{
                gridLines : {display : false},
                ticks: {
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }]
    }
    }
  });
};
