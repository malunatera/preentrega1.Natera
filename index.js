

// Funciones

//Descuentos 
function descuento1(p1, precioNoche) {
    let resultado = 80 * p1 * precioNoche / 100
    console.log(resultado)
    return resultado
}

function descuento2(p1, precioNoche) {
    let resultado = 70 * p1 * precioNoche / 100
    console.log(resultado)
    return resultado
}

function descuento3(p1, precioNoche) {
    let resultado = 60 * p1 * precioNoche / 100
    console.log(resultado)
    return resultado
}


//Calculo de descuento segun noches
const descuentoxNoches = (x) => {
    const precioNoche = 100
    let resultado
    if (x >= 1 && x <= 2) {
        resultado = descuento1(x, precioNoche)
    }
    else if (x >= 3 && x <= 4) {
        resultado = descuento2(x, precioNoche)
    }
    else if (x >= 5) {
        resultado = descuento3(x, precioNoche)
    }
    return resultado
}



// Variables

let reserva
let noches
let seguirCotizando = true
let decision

//Cotizador 

alert(`¡Bienvenidos a Ayres Apartments!`)
reserva = prompt(`¿Desea realizar una cotización? Ingrese si o no`)
while (seguirCotizando = true) {
    if (reserva.toLowerCase() === `si`) {
        noches = parseInt(prompt(`Ingrese la cantidad de noches que desea quedarse en numeros`))
        const precioxCantidad = descuentoxNoches(noches)
        alert(`El precio de tu reserva seria de ${precioxCantidad}USD, por las ${noches} noches.`)
        console.log(precioxCantidad)
        decision = prompt(`¿Desea seguir cotizando? Ingrese si o no`)
        while (seguirCotizando = true){
            if (decision.toLowerCase() === `si`){
                noches = parseInt(prompt(`Ingrese la cantidad de noches que desea quedarse en numeros`))
                const precioxCantidad = descuentoxNoches(noches)
                alert(`El precio de tu reserva seria de ${precioxCantidad}USD, por las ${noches} noches.`)
                console.log(precioxCantidad)
                decision = prompt(`¿Desea seguir cotizando? Ingrese si o no`)        
            }
            else if (decision.toLowerCase()===`no`){
                seguirCotizando = false
                break
            }
            else{
                alert('Disculpe, no ingreso una respuesta valida')
                decision = prompt(`¿Desea seguir cotizando? Ingrese si o no`)
            }
        }
    }
    else if (reserva.toLowerCase()===`no`){
        seguirCotizando = false
        break
    }
    else {
        alert(`Disculpe, no ingreso una respuesta valida`)
        reserva = prompt(`¿Desea realizar una cotización? Ingrese si o no`)
    }     
    seguirCotizando = false
    break
}
    
alert(`Bienvenido a nuestra web, podes ver nuestros servicios para una proxima reserva`)