let nombreCliente = "";
let fechaInicio = "";
let terminosYCondiciones = "";

function obtenerDatos() {
  nombreCliente = document.getElementById("nombre-cliente").value;

  fechaInicio = document.getElementById("fecha-inicio").value;

  terminosYCondiciones = document.getElementById("terminos-y-condiciones").value;

  return [nombreCliente, fechaInicio, terminosYCondiciones];
}

function generarContrato(datos) {
  const contrato = `
    <h1>Contrato legal</h1>
    <p>Este contrato se celebra entre [nombre del cliente] y [nombre de la empresa] el día [fecha de inicio].</p>
    <p>Los términos y condiciones del contrato son los siguientes:</p>
    ${datos[2]}
  `;

  contrato = contrato.replace("[nombre del cliente]", nombreCliente);
  contrato = contrato.replace("[fecha de inicio]", fechaInicio);

  return contrato;
}

document.getElementById("botón-generar").addEventListener("click", () => {
  const datos = obtenerDatos();

  const contrato = generarContrato(datos);

  document.getElementById("resultado-contrato").innerHTML = contrato;
});

document.getElementById("botón-limpiar").addEventListener("click", () => {
  nombreCliente = "";
  fechaInicio = "";
  terminosYCondiciones = "";

  document.getElementById("resultado-contrato").innerHTML = "";
});
