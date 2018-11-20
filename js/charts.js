// Bar chart
new Chart(document.getElementById('bar-chart'), {
  type: 'bar',
  data: {
    labels: ['Google Drive', 'Dropbox', 'OneDrive', 'Pintrest', 'Amazon'],
    datasets: [
      {
        label: 'Population (millions)',
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850'
        ],
        data: [89.5, 78.9, 0, 47.4, 5.3]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Percentage of users who have used different cloud storage apps'
    }
  }
});

// PIE
new Chart(document.getElementById('pie-chart'), {
  type: 'pie',
  data: {
    labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
    datasets: [
      {
        label: 'Population (millions)',
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850'
        ],
        data: [2478, 5267, 734, 784, 433]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

//Doughnut
new Chart(document.getElementById('doughnut-chart'), {
  type: 'doughnut',
  data: {
    labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
    datasets: [
      {
        label: 'Population (millions)',
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850'
        ],
        data: [2478, 5267, 734, 784, 433]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

//Horizontal Bar

new Chart(document.getElementById('bar-chart-horizontal'), {
  type: 'horizontalBar',
  data: {
    labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
    datasets: [
      {
        label: 'Population (millions)',
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850'
        ],
        data: [2478, 5267, 734, 784, 433]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});
