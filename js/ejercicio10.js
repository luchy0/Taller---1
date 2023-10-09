
var matriz = [];


function obtenerMatriz() {

  matriz = document.getElementById("matriz").value.split(" ");


  matriz = matriz.map(string => string.trim());


  return matriz;
}

function obtenerLongitudes() {
  let longitudes = [];

  for (const string of matriz) {
    longitudes.push(string.length);
  }

  return longitudes;
}

document.getElementById("botón-generar").addEventListener("click", () => {
  matriz = obtenerMatriz();

  let longitudes = obtenerLongitudes();

  document.getElementById("resultado-matriz").innerHTML = longitudes.join(", ");
});
