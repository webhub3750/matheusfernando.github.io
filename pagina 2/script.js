const ctx = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctx, {
    type: 'pie', // Tipo do gráfico
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'], // Labels
        datasets: [{
            label: 'Distribuição de Cores',
            data: [12, 19, 3, 5, 2], // Dados
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Vermelho
                'rgba(54, 162, 235, 0.2)', // Azul
                'rgba(255, 206, 86, 0.2)', // Amarelo
                'rgba(75, 192, 192, 0.2)', // Verde
                'rgba(153, 102, 255, 0.2)' // Roxo
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // Vermelho
                'rgba(54, 162, 235, 1)', // Azul
                'rgba(255, 206, 86, 1)', // Amarelo
                'rgba(75, 192, 192, 1)', // Verde
                'rgba(153, 102, 255, 1)' // Roxo
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, // Tornar o gráfico responsivo
        plugins: {
            legend: {
                position: 'top', // Posição da legenda
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw; // Exibir rótulo e valor
                    }
                }
            }
        }
    }
});
