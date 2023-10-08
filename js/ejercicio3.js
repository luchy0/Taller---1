function numeroBarras(){
   var cantidadBarras = document.getElementById('numeroBarras').value;
   var divContenedor = document.getElementById('barrasContainer');

   for (let i = 0; i < cantidadBarras; i++) {

    //crear número de barras en la página
        var barra = document.createElement("input");
        barra.type = "text";
        barra.readonly = true;
        divContenedor.appendChild(barra);
        barra.id = i;    

    //------------------------------------------------------
    
    //recibe el numero de tamaño de cada barra
    var tamañoBarra = prompt('Tamaño de la barra número ' + (i+1) , 0);

    //repite la cantidad de asteriscos
    var asteriscos = '*'.repeat(tamañoBarra);

    //muestra los asteriscos en los inputs
    barra.value = asteriscos;

   }

}

function nuevoGrafico(){
    location.reload();
}