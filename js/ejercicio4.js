function calcularhipoteca(monto, interes, amortizacion){

    var monto = document.getElementById('monto').value;
    var interes = document.getElementById('interes').value;
    var amortizacion = document.getElementById('amortizacion').value;

    //tasa de interés mensual
    interes = (interes / 12) / 100;

    //número de pagos mensuales
    cantidadPagos = amortizacion* 12;

    //cuota mensual
    cuotaMensual = (monto * interes) / (1 - Math.pow(1 + interes, -cantidadPagos));

    var resultadoContainer = document.getElementById('resultadoContainer');
    var p = document.createElement('p');

    p.textContent = 'La cuota mensual es de $'+ cuotaMensual.toFixed(2);
    resultadoContainer.appendChild(p);


}

function limpiar(){
    location.reload();
}