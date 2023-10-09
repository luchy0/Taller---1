
let matriz = [];

function obtenerString() {

  return document.getElementById("string").value;
}


function mostrarResultado(string) {

  let stringMayusculas = mayusculasPrimeraLetra(string);


  document.getElementById("resultado").innerHTML = stringMayusculas;
}


function mostrarResultadoMatriz() {

  matriz = obtenerMatriz();


  let pares = getPares(matriz);

  document.getElementById("resultado-matriz").innerHTML = pares.join(", ");

  document.getElementById("botón-generar").addEventListener("click", mostrarResultadoString);
}

function mostrarResultadoString() {
  let string = obtenerString();

  let stringMayusculas = mayusculasPrimeraLetra(string);

  document.getElementById("resultado").innerHTML = stringMayusculas;
}
