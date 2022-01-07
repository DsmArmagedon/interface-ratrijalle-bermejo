/**
 * PERSONAS REGISTRADAS
 */
$('#less-risk').change(() => {
    calculatePeopleRegisters();
});

$('#low-risk').change(() => {
    calculatePeopleRegisters();
});

$('#medium-risk').change(() => {
    calculatePeopleRegisters();
});

$('#higth-risk').change(() => {
    calculatePeopleRegisters();
});

function calculatePeopleRegisters() {
    let less = $('#less-risk').val() || 0;
    let low = $('#low-risk').val() || 0;
    let medium = $('#medium-risk').val() || 0;
    let higth = $('#higth-risk').val() || 0;
    let total = parseInt(less) + parseInt(low) + parseInt(medium) + parseInt(higth);
    $('#people-registers').text(total)
}

/**
 * ENFERMEDADES
 */
var diseases = new Object();
$('.disease').change(function (e) {
    e.preventDefault();
    const totalDiseases = calculateTotalTable($(this), diseases)
    $('#people-diseases').text(totalDiseases);
});


function calculateTotalTable(element, objectSelected) {
    let total = 0;
    const value = element.val();
    const id = element.attr('id');
    objectSelected[id] = value;
    for (const object in objectSelected) {
        total += parseInt(objectSelected[object]) || 0;
    }
    return total;
}

/**
 * VIAJES
 */
var travels = new Object();
$('.travel').change(function (e) {
    e.preventDefault();
    const totalTravels = calculateTotalTable($(this), travels)
    $('#people-travels').text(totalTravels);
});

/**
 * PERSONAS REACTIVAS
 */
$('#non-reactive').change(function () {
    calculatePeopleReactive();
});

$('#reactive').change(function () {
    calculatePeopleReactive();
});
function calculatePeopleReactive() {
    let nonReactive = $('#non-reactive').val() || 0;
    let reactive = $('#reactive').val() || 0;
    const total = parseInt(nonReactive) + parseInt(reactive);
    $('#people-diagnosed').text(total);
}
/**
 * GRAFICAS
 */
document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('problem-covid', {
        chart: {
            type: 'bar'
        },
        title: false,
        subtitle: false,
        xAxis: {
            categories: ['SI', 'NO']
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        yAxis: {
            title: {
                text: 'Problemas Aislamiento'
            },
            min: 148.5
        },
        series: [
            {
                data: [{
                    name: 'Si',
                    color: '#81d4fa',
                    y: 149,
                    label: true
                }, {
                    name: 'No',
                    color: '#ff7043',
                    y: 150
                }],
                name: 'Problemas Aislamiento',
                showInLegend: false
            },
        ]
    });
    Highcharts.chart('self-medication-covid', {
        chart: {
            type: 'bar'
        },
        title: false,
        subtitle: false,
        xAxis: {
            categories: ['SI', 'NO']
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        yAxis: {
            title: {
                text: 'Automedicación'
            }
        },
        series: [
            {
                data: [{
                    name: 'Si',
                    color: '#81d4fa',
                    y: 30,
                    label: true
                }, {
                    name: 'No',
                    color: '#9e9e9e',
                    y: 269
                }],
                name: 'Automedicación',
                showInLegend: false
            },
        ]
    });
    Highcharts.chart('use-transport-public', {
        chart: {
            type: 'bar'
        },
        title: false,
        subtitle: false,
        xAxis: {
            categories: ['SI', 'NO', 'No Responde']
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        yAxis: {
            title: {
                text: 'Uso de Transporte Público'
            }
        },
        series: [
            {
                data: [{
                    name: 'Si',
                    color: '#81d4fa',
                    y: 9,
                    label: true
                }, {
                    name: 'No',
                    color: '#9e9e9e',
                    y: 75
                }, {
                    name: 'No Responde',
                    color: '#66bb6a',
                    y: 215
                }],
                name: 'Uso de Transporte Público',
                showInLegend: false
            },
        ]
    });
});