let articulosCarrito = [];
let total = 0;

function carrito(nombre, precio) {
  const item = {
    nombre: nombre,
    precio: precio,
  };

  articulosCarrito.push(item);

  const carrito = document.createElement("li");
  carrito.textContent = `${item.nombre} - $${item.precio.toFixed()}`;
  document.getElementById("productosAgregados").appendChild(carrito);

  total += item.precio;
  document.getElementById("total").textContent = `Total: $${total.toFixed()}`;
}

function comprar() {
  Swal.fire({
    title: "Gracias por comprar en Minimal Store!",
    icon: "success",
    confirmButtonText: "Volver a la tienda",
  });
}
