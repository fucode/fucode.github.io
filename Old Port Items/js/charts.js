// Bar chart
new Chart(document.getElementById('bar-chart'), {
  type: 'bar',
  data: {
    labels: ['Google Drive', 'Dropbox', 'Pintrest', 'Amazon'],
    datasets: [
      {
        label: '%',
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850'
        ],
        data: [89.5, 78.9, 47.4, 5.3]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true
    }
  }
});

// PIE
new Chart(document.getElementById('pie-chart'), {
  type: 'pie',
  data: {
    labels: ['Yes', 'No'],
    datasets: [
      {
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850'
        ],
        data: [63.2, 36.8]
      }
    ]
  },
  options: {
    title: {
      display: true
    }
  }
});

//Doughnut
new Chart(document.getElementById('doughnut-chart'), {
  type: 'doughnut',
  data: {
    labels: ['Yes', 'No'],
    datasets: [
      {
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850'
        ],
        data: [84.2, 15.8]
      }
    ]
  },
  options: {
    title: {
      display: true
    }
  }
});

//horizontal chart
new Chart(document.getElementById('bar-chart-horizontal'), {
  type: 'horizontalBar',
  data: {
    labels: ['Google Drive', 'Dropbox', 'Pintrest', 'Other', 'None'],
    datasets: [
      {
        label: '%',
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850'
        ],
        data: [61.1, 16.7, 5.6, 9, 7.6]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true
    }
  }
});
