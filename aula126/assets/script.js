const ctx = document.getElementById('grafico1');

let labelsX = ["Brasil", "Bolivia", "EUA", "Japão"];
let valores = [10, 15, 20, 45];

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelsX,
    datasets: [{
      label: '# of Votes',
      data: valores,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});