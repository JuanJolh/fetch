function render(){
    let productos = obtproductosLS();
    let contenido = ``;

    for (let producto of productos){
        contenido += `<div class="col-md-4 py-2">
        <div class="card d-flex align-items-center text-center">
        <img src="./assets/img/${producto.imagen}" width="300" height="300" alt="${producto.nombre}">
        <div class="card-body">
        <h5 class="card-title header_color">${producto.nombre}</h5>
        <p class="card-text">Marca: ${producto.marca}</p>
        <p class="card-text">Precio: $${producto.precio}</p>
        <p class="card-text"><a href="#" class="btn btn-success" onclick="agregarCarrito(${producto.id})">Agregar</a></p>
        </div>
        </div>
        </div>`;
    }
    document.getElementById("productos").innerHTML = contenido;
}
render();