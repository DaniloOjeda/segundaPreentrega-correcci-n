class Producto {
    constructor(nombre, modelo, precio, cantidad) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.disponible = true;
    }
        precioFinal() {
            return this.precio * 1.21
        }

        Vender() {
            this.disponible = false;
        }
        nombreUC() {
            return this.nombreUC.toUpperCase()
        }
}


let arrayProductos = []; // Declaramos el arrayProductos en una nueva posición de memoria
do{
    let comprobacion = prompt("Ingrese producto luego FIN para terminar de agregar");
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombreP = comprobacion;
        let modeloP = prompt("Ingrese el modelo del producto");
        let precioP = prompt("ingrese el precio del producto");
        let cantidadP = prompt("ingrese cantidad del producto");
        arrayProductos.push(new Producto(nombreP, modeloP, precioP, cantidadP));
    }  
}
while (comprobacion!= "fin" || comprobacion!= "FIN" || comprobacion!= "Fin" );
  console.log(arrayProductos)

 for (let producto of arrayProductos) {
  document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
  document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
  document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li>");
  document.write("<li><h3> Precio: " + producto.precio + "</h3></li>");
  document.write("<li><h3> Precio con IVA es: " + producto.precioFinal() + "</h3></li></ul><br>");
  console.log(producto.nombre);
  console.log(producto.modelo);
  console.log(producto.cantidad);
  console.log(producto.precioFinal());
}

//POCO STOCK MENOR A 10 UNIDADES
let pocoStock = arrayProductos.filter(producto => producto.cantidad <= 10 );
console.log("Productos con Poco Stock, comprar nuevamente: ");
console.log(pocoStock);
document.write("<h3> lista de productos con poco Stock (menos de 10 unidades): </h3>");

for (let producto of pocoStock) {
    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}

//PRODUCTO SIN STOCK

let sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de Productos sin Stock (cantidad = 0 o disponible = false): </h3>");
for (let producto of sinStock) {
    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}

//BUSCAR PRODUCTO ESPECIFICO POR NOMBRE INGRESADO

let ingresado = prompt("ingresar el producto que quiere buscar");
let prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
console.log(prodIngresado);
document.write("<h3> Lista de Productos ingesados por busqueda: </h3>");

for (let producto of prodIngresado)  {
    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
    document.write("<li><h3> Precio: " + producto.precio + "</h3></li></ul><br>");
}

//PRODUCTO ORDENADO POR CANTIDAD

let ordenadosCantidad = []; // Declaramos el array ordenadosCantidad en una nueva posición de memoria
ordenadosCantidad = arrayProductos.map(elemento => elemento);
ordenadosCantidad.sort(function(a, b)  {
    return a.cantidad- b.cantidad;
});
console.log("Ordenados por Cantidad Ascendente:  ");
console.log(ordenadosCantidad);
document.write("<h3> Lista de Productos ordenados por cantidad: </h3>");

for (let producto of ordenadosCantidad)  {
    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Modelo: " + producto.modelo + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}


