function CrearTarjeta(){

    var nombre = document.getElementById('recibirNombre').value;
    var cargo = document.getElementById('recibirCargo').value;
    var empresa = document.getElementById('recibirEmpresa').value;
    var contacto = document.getElementById('recibirContacto').value;

    if(nombre == '' || cargo == '' || empresa == '' || contacto ==''){
        alert('Todos los campos son obligatorios!')
    }

    else{
        document.getElementById('mostrarNombre').value = nombre;
        document.getElementById('mostrarCargo').value = cargo;
        document.getElementById('mostrarEmpresa').value = empresa;
        document.getElementById('mostrarContacto').value = contacto;
    }

  
    
}

function nuevaTarjeta(){
    //recargar la página
    location.reload();   
}