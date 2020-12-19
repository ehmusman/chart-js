let myChart = document.getElementById('myChart').getContext('2d')



let populationChart = new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpinde', 'Gujranwala', 'Peshawar', 'Multan', 'Hyderabad', 'Islamabad', 'Quetta'],
        datasets: [{
            label: 'Population',
            data: [
                14916456,
                11126285,
                3204726,
                2098231,
                2027001,
                1970042,
                1871843,
                1734309,
                1009832,
                1001205
            ],
            // backgroundColor: '#234'
            backgroundColor: [
                'rgb(23,342,56)',
                'rgb(253,34,56)',
                'rgb(234,34,56)',
                'rgb(23,34,256)',
                'rgb(23,144,56)',
                'rgb(223,34,56)',
                'rgb(23,234,56)',
                'rgb(23,134,253)',
                'rgb(223,134,153)',
                'rgb(233,134,236)'
            ],
            borderWidth: 1,
            borderColor: "black",
            hoverBorderWidth: 3,
            hoverBorderColor: "#777"
        }]
    },
    options: {}

})