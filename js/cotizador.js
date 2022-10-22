/** Cotizador seguro embarcacion **/

const seguroBase = 0.014

class seguro {
    constructor(marca, modelo, valor) {
        this.marca = marca
        this.modelo = modelo
        this.valor = valor
    }
    cotizar() {
        return this.valor * seguroBase
    }
} 

function cotizarSeguro() {
    let marca = prompt("Ingresa marca del producto").toUpperCase()
    let modelo = prompt("Ingresa modelo del producto").toUpperCase()
    let valor = parseInt(prompt("Ingresa el valor del producto")) 
    
    const valorSeguro = new seguro(marca, modelo, valor)

    console.log("valor del seguro en $", valorSeguro.cotizar())
}