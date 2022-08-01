const consultarproductos = async () => {
    try{
        let response = await fetch("assets/js/productos.json");
        let data = await response.json();
        let productos = data;
        localStorage.setItem("productos", JSON.stringify(productos));
    }catch (error){
        console.log(error);
    }
}

function obtproductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function obtenerprocarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
function guardarprocarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function buscarProducto (id){
    let productos = obtproductosLS();
    return productos.find(x => x.id == id);
}

function agregarCarrito(id){
    let producto = buscarProducto(id);
    let productos_carrito = obtenerprocarrito();
    producto.cantidad = 1;
    productos_carrito.push(producto);
    guardarprocarrito(productos_carrito);
    actualizarcarrito();
    
}

function actualizarcarrito(){
    let productos = obtenerprocarrito();
    let contenido = `<button type="button" class="btn btn-success position-relative">
    <img src="./assets/img/carrito.svg" width="30">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0</span></button>`;
    let total = 0;

    if (productos.length > 0){
        for (let producto of productos){
            total += producto.cantidad;
        }

        contenido = `<button type="button" class="btn btn-success position-relative">
    <img src="./assets/img/carrito.svg" width="30">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${total}</span></button>`;
    }

    document.getElementById("carrito_nav").innerHTML = contenido;
}

consultarproductos();
actualizarcarrito();