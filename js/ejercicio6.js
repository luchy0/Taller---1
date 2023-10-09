// Variables globales
let autores = ["Albert Einstein", "Marie Curie", "Steve Jobs", "Martin Luther King Jr.", "Mahatma Gandhi"];
let citas = ["La imaginación es más importante que el conocimiento.", "La ciencia es la búsqueda del conocimiento, la tecnología es la aplicación del conocimiento.", "La vida es lo que sucede mientras estás ocupado haciendo otros planes.", "Tengo un sueño de que mis cuatro hijos pequeños vivirán un día en una nación donde no serán juzgados por el color de su piel, sino por el contenido de su carácter.", "La no violencia es la mayor fuerza a la que el mundo ha recurrido. Es más poderosa que las armas de cualquier ejército."];

// Función para generar una cita aleatoria
function generarCita() {
  // Selecciona un autor al azar
  let autor = autores[Math.floor(Math.random() * autores.length)];

  // Selecciona una cita al azar del autor
  let cita = citas[Math.floor(Math.random() * citas.length)];

  // Devuelve la cita
  return autor + " dijo: " + cita;
}

// Eventos
document.getElementById("botón-generar").addEventListener("click", generarCita);

// Inicializa el juego
let citaHtml = generarCita();
document.getElementById("cita").innerHTML = citaHtml;
