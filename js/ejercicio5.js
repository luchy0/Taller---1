// Variables globales
let palabras = ["gato", "perro", "casa", "árbol", "sol"];
let palabraActual;
let contenedorPalabra;
let entradaLetra;
let botónAdivinar;
let mensajeEstado;
let intentos = 5;
let letrasAdivinadas = new Set();

// Función para inicializar el juego
function init() {
  // Selecciona una palabra aleatoria
  palabraActual = palabras[Math.floor(Math.random() * palabras.length)];

  // Crea los elementos de la interfaz
  contenedorPalabra = document.getElementById("contenedor-palabra");
  entradaLetra = document.getElementById("entrada-letra");
  botónAdivinar = document.getElementById("botón-adivina");
  mensajeEstado = document.getElementById("mensaje-estado");

  // Muestra la palabra oculta
  mostrarPalabra();

  // Inicializa la función para mostrar las letras adivinadas
  mostrarLetrasAdivinadas();
}

// Función para mostrar la palabra oculta
function mostrarPalabra() {
  // Crea una cadena de guiones bajos con la longitud de la palabra
  let palabraHtml = "";
  for (let i = 0; i < palabraActual.length; i++) {
    palabraHtml += "_";
  }

  // Establece el contenido del elemento de la palabra
  contenedorPalabra.innerHTML = palabraHtml;
}

// Función para adivinar una letra
function adivinarLetra() {
  // Obtiene la letra del usuario
  let letra = entradaLetra.value;

  // Comprueba si la letra está en la palabra
  let encontrada = false;
  for (let i = 0; i < palabraActual.length; i++) {
    if (palabraActual[i] === letra) {
      // Si la letra está en la palabra, la muestra en la interfaz
      contenedorPalabra.innerHTML = contenedorPalabra.innerHTML.replace("_", letra);
      letrasAdivinadas.add(letra);
      encontrada = true;
      break;
    }
  }

  // Si la letra no está en la palabra, resta un intento
  if (!encontrada) {
    // Muestra un mensaje de error
    mensajeEstado.innerHTML = "La letra no está en la palabra. Te quedan " + (5 - intentos) + " intentos";
    // Reduce el número de intentos
    intentos--;
  }

  // Comprueba si el usuario ha ganado
  if (contenedorPalabra.innerHTML === palabraActual) {
    // Muestra un mensaje de victoria
    mensajeEstado.innerHTML = "¡Has ganado! La palabra era " + palabraActual;
  } else if (intentos === 0) {
    // Muestra un mensaje de derrota
    mensajeEstado.innerHTML = "Has perdido. La palabra era " + palabraActual;
  }
}

// Eventos
botónAdivinar.addEventListener("click", adivinarLetra);

// Inicializa el juego
init();

// Función para mostrar las letras adivinadas
function mostrarLetrasAdivinadas() {
  // Crea una cadena con las letras adivinadas
  let letrasAdivinadasHtml = "";
  for (let letra of letrasAdivinadas) {
    letrasAdivinadasHtml += letra + " ";
  }

  // Establece el contenido del elemento de las letras adivinadas
  document.getElementById("letras-adivinadas").innerHTML = letrasAdivinadasHtml;
}
