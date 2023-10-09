let string = "";

function obtenerString() {
  return document.getElementById("string").value;
}

function mayusculasPrimeraLetra(string) {
  const palabras = string.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }

  return palabras.join(" ");
}

document.getElementById("botón-generar").addEventListener("click", () => {
  string = obtenerString();

  let stringMayusculas = mayusculasPrimeraLetra(string);

  document.getElementById("resultado").innerHTML = stringMayusculas;
});
