var productosInventario =[];

function validarCampos(){

    var nombre = document.getElementById('nameProductoGestion').value;
    var precio = document.getElementById('precioInventario').value;
    var cantidad = document.getElementById('cantidadInventario').value;

    if(nombre == '' || precio == '' || cantidad == ''){
        alert('Todos los campos son obligatorios!');
    }
    else{
        postProducto(nombre, precio, cantidad);
    }
}

function postProducto(nombre, precio, cantidad){
    //Crear nuevo producto

    var nuevoProducto = {
      nombre: nombre,
      precio: precio, 
      cantidad: cantidad
  }

  //añadir nuevo producto al array

  productosInventario.push(nuevoProducto);

  //Vaciar los campos 

  document.getElementById("nameProductoGestion").value = "";
  document.getElementById("precioInventario").value = "";
  document.getElementById("cantidadInventario").value = "";
  
 

  var nombre = document.getElementById('nombreVenta');
  nombre.disabled = false;

  var cantidad = document.getElementById('cantidadVenta');
  cantidad.disabled = false;

  var realizarVenta = document.getElementById('buttonVenta');
  realizarVenta.disabled = false;

  if (productosInventario.length == 1){
    alert('Ya puedes vender tus productos!!!');
  }

}


function RealizarVenta(){

    var nombre = document.getElementById('nombreVenta').value;
    var cantidadVenta = document.getElementById('cantidadVenta').value;

    for (let i = 0; i < productosInventario.length; i++) {
       
        if(nombre == productosInventario[i].nombre){
            var totalVenta = cantidadVenta * productosInventario[i].precio;
            var stockActual = productosInventario[i].cantidad - cantidadVenta;

            alert('Venta exitosa. Total de ventas: ' + totalVenta + '. Stock actual: ' + stockActual + ' Unidades.') ;
        }
        else{
            alert('El producto '+nombre+' no existe');
        }

        document.getElementById('nombreVenta').value = '';
        document.getElementById('nombreVenta').value = '';
  
    }

}

