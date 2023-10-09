
let matriz = [];


function obtenerMatriz() {
  
  matriz = document.getElementById("matriz").value.split(",");

  
  matriz = matriz.map(numero => parseInt(numero));

  
  return matriz;
}


function getPares() {
  
  let pares = [];

  
  for (const numero of matriz) {

    if (numero % 2 == 0) {
    
      pares.push(numero);
    }
  }
  

  return pares;
}


document.getElementById("botón-generar").addEventListener("click", () => {

  matriz = obtenerMatriz();


  let pares = getPares(matriz);

  
  document.getElementById("resultado-matriz").textContent = pares.join(", ");

  
});

  