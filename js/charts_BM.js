// Bar chart
new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["Career", "Fitness", "Habits", "Money", "Other"],
    datasets: [
      {
        label: "%",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850"
        ],
        data: [15, 40, 20, 15, 10]
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
new Chart(document.getElementById("pie-chart"), {
  type: "pie",
  data: {
    labels: ["Yes", "No"],
    datasets: [
      {
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850"
        ],
        data: [80, 20]
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
new Chart(document.getElementById("doughnut-chart"), {
  type: "doughnut",
  data: {
    labels: ["Yes", "No"],
    datasets: [
      {
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850"
        ],
        data: [60, 40]
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
new Chart(document.getElementById("bar-chart-horizontal"), {
  type: "horizontalBar",
  data: {
    labels: ["Free with Ads", "$5-$10", "$10-$15", "$15-$20", "$20+"],
    datasets: [
      {
        label: "%",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850"
        ],
        data: [50, 10, 15, 20, 5]
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
