
//Descuentos 
const descuento1 = (p1, precioNoche) => {
    let resultado = p1 * precioNoche / 1.2
    console.log(resultado)
    return resultado
}

const descuento2 = (p1, precioNoche) => {
    let resultado = p1 * precioNoche / 1.3
    console.log(resultado)
    return resultado
}

const descuento3 = (p1, precioNoche) => {
    let resultado = p1 * precioNoche / 1.4
    console.log(resultado)
    return resultado
}


// Edificios

class Edificio {
    constructor (id, nombre, ubicacion, precio){
        this.id = id
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.precio = precio
    }
    descuento (x) {
        const precio = this.precio
        let resultado
        if (x >= 1 && x <= 2) {
            resultado = descuento1(x, precio)
        }
        else if (x >= 3 && x <= 4) {
            resultado = descuento2(x, precio)
        }
        else if (x >= 5) {
            resultado = descuento3(x, precio)
        }
        console.log(resultado)
        return resultado
    }
}

const palermo = new Edificio (1, `Palermo Apartments`, `Thames 2313`, 250)
const guido = new Edificio (2, `Ayres de Recoleta Plaza`, `Guido 1980`, 200)
const uriburu = new Edificio (3, `Ayres de Recoleta Uriburu`, `Uriburu 1756`, 180)


const edificios = [palermo, guido, uriburu]
console.log (edificios)




// Variables

let reserva
let edificio
let noches
let precioxCantidad
let seguirCotizando = true
let edificioEscogido = true
let decision


//Cotizador 

alert(`¡Bienvenidos a Ayres Apartments!`)
reserva = prompt(`¿Desea realizar una cotización? Ingrese si o no`)


while (seguirCotizando = true) {
    if (reserva.toLowerCase() === `si`) {
        noches = parseInt(prompt(`Ingrese la cantidad de noches que desea quedarse en numeros`))
        while (seguirCotizando = true) {
            if(noches){
                edificio = parseInt(prompt(`¿En que edificio desea hospedarse? Ingrese opcion segun el numero.  Opciones: 1. Palermo 2. Guido 3. Uriburu`))
                while (seguirCotizando = true) {
                    if (edificio >= 1 && edificio <=3) {
                    const edificioCliente = edificios.find(lugar => lugar.id === edificio)
                    console.log(edificioCliente)
                    precioxCantidad = edificioCliente.descuento(noches)
                    console.log(precioxCantidad)            
                    alert(`El precio de tu reserva seria de ${Math.round(precioxCantidad)}USD, por ${noches} noches en ${edificioCliente.nombre}, que esta ubicado en ${edificioCliente.ubicacion}.`)    
                    break
                    }
                    else{
                    alert (`No escogio un edificio dentro de las opciones`)
                    edificio = parseInt(prompt(`¿En que edificio desea hospedarse? Ingrese opcion segun el numero.  Opciones: 1. Palermo 2. Guido 3. Uriburu`))
                    continue
                    }
                }
            }
            else{
                alert(`Disculpe, no ingreso una respuesta valida`)
                noches = parseInt(prompt(`Ingrese la cantidad de noches que desea quedarse en numeros`))   
                continue         
            }
            seguirCotizando = false
            break    
        }
        decision = prompt(`¿Desea seguir cotizando? Ingrese si o no`)    
        if (decision.toLowerCase() === `si`){
            continue
        }
        else if (decision.toLowerCase()===`no`){
            seguirCotizando = false
            break
        }
        else{
            alert('Disculpe, no ingreso una respuesta valida')
            decision = prompt(`¿Desea seguir cotizando? Ingrese si o no`)
            continue
        }
    }

    else if (reserva.toLowerCase()===`no`){
        seguirCotizando = false
        break
    }
    else {
        alert(`Disculpe, no ingreso una respuesta valida`)
        reserva = prompt(`¿Desea realizar una cotización? Ingrese si o no`)
        continue
    }     
    // seguirCotizando = false
    // break
}
    
alert(`Bienvenido a nuestra web, podes ver nuestros servicios para una proxima reserva`)