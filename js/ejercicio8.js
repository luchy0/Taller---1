let matriz = [];

function obtenerMatriz() {
  matriz = document.getElementById("matriz").value.split("");

  matriz = matriz.map(numero => parseInt(numero));

  return matriz;
}

function obtenerNumerosPares() {
  let numerosPares = [];

  for (const numero of matriz) {
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    }
  }

  return numerosPares;
}

document.getElementById("botón-generar").addEventListener("click", () => {
  matriz = obtenerMatriz();

  let numerosPares = obtenerNumerosPares();

  document.getElementById("resultado").innerHTML = numerosPares.join(" ");
});
