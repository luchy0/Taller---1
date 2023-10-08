var palabras = ['Montaña', 'Guitarra','Oceano', 'Jirafa', 'Helado', 'Aventura', 'Computadora', 'Elefante', 'Cafe', 'Libertad', 'Unicornio', 'Playa', 'Amistad', 'Astronomia', 'Mariposa', 'Sonrisa', 'Viaje', 'Felicidad', 'Sueño', 'Chocolate'];

var i = Math.floor(Math.random()*palabras.length);


function limpiar(){
    location.reload();
}

function generarPalabras(){
 
    var containerGuiones = document.getElementById('palabra');
    var p = document.createElement('p');

    p.id = 1;
 
    p.textContent = '_ '.repeat(palabras[i].length);
 
    containerGuiones.appendChild(p);

    var input = document.getElementById('adivina');
    input.disabled = false;
    var button = document.getElementById('butResolver');
    button.disabled = false;
    var butBorrar = document.getElementById('butBorrar');
    butBorrar.disabled = false;

    //palabra seleccionada
    console.log(palabras[i]);


}


function CompararPalabras() { 
    
    var letraInput = document.getElementById('adivina').value;

    //letra del input
    console.log(letraInput);
    
    var palabra = palabras[i];

    var resultadoFinal = [];
    //validar el input

    if(letraInput == '' || letraInput >= 0 || letraInput < 0){
        alert('Inserta un dato válido');
        document.getElementById('adivina').value = '';
    }
    else{
        for (let i = 0; i < palabra.length; i++) {
            
            console.log(palabra[i]);

            if (letraInput.toLowerCase() == palabra[i].toLowerCase()) {

                resultadoFinal.push(palabra[i]);

            }
            else{
                resultadoFinal.push(' _ ');
            }
            
        }

        resultadoFinal = resultadoFinal.join('');
        console.log(resultadoFinal);//debe salir un solo string

        document.getElementById(1).textContent = resultadoFinal;

        document.getElementById('adivina').value = '';

        //obtener el dato del p

        for (let i = 0; i < resultadoFinal.length; i++) {
            
            
            
        }
        //convertirlo a array y recorrer sus casillas 
        //verificar si son ' _ ' y coincide con la posicion del que no es ' _ ' 
        // y asignar dato 
        //mostrar dato

 
    }
}