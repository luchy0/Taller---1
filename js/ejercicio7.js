
let plantillaContrato = `
  **CONTRATO LEGAL**

  Este contrato se celebra entre [nombre del cliente] y [nombre de la empresa], en la fecha de [fecha de inicio].

  En virtud de este contrato, [nombre de la empresa] se compromete a proporcionar los siguientes servicios a [nombre del cliente]:

  [Términos y condiciones]

  [Nombre del cliente] acepta los términos y condiciones de este contrato.

  **Firma de [nombre del cliente]**
  **Fecha**
`;


function generarContrato() {

  let nombreCliente = document.getElementById("nombre-cliente").value;
  let fechaInicio = document.getElementById("fecha-inicio").value;
  let terminosYCondiciones = document.getElementById("terminos-y-condiciones").value;


  let contratoHtml = plantillaContrato.replace("[nombre del cliente]", nombreCliente);
  contratoHtml = contratoHtml.replace("[fecha de inicio]", fechaInicio);
  contratoHtml = contratoHtml.replace("[Términos y condiciones]", terminosYCondiciones);


  document.getElementById("contrato-html").innerHTML = contratoHtml;
}


document.getElementById("botón-generar").addEventListener("click", generarContrato);


generarContrato();
