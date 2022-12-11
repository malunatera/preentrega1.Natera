// DOM INDEX

const reservas = document.querySelector('.reservasInicio')
const divDepto = document.querySelector('.ubiDepto')
const ubicacion = document.querySelector('.ubicacion')
const habitacion = document.querySelector('.habitacion')
const fecha = document.querySelector('.fecha')
const noches = document.querySelector('.noches')
const cotizar = document.querySelector('.cotizar')



//  Funciones para calcular noches INDEX


//Descuentos 
const descuento1 = (p1, precioNoche) => {
    console.log({p1,precioNoche});
    let resultado = p1 * precioNoche / 1.2
    console.log(resultado)
    return resultado
}

const descuento2 = (p1, precioNoche) => {
    console.log({p1,precioNoche});
    let resultado = p1 * precioNoche / 1.3
    console.log(resultado)
    return resultado
}

const descuento3 = (p1, precioNoche) => {
    console.log({p1,precioNoche});
    let resultado = p1 * precioNoche / 1.4
    console.log(resultado)
    return resultado
}


// Edificios

class Edificio {
    constructor (nombre, ubicacion, precio){
        this.nombre = nombre
        this.ubicacion = ubicacion
        this.precio = precio
    }
}

const palermo = new Edificio (`Palermo Apartments`, `Thames 2313`, 250)
const guido = new Edificio (`Ayres de Recoleta Plaza`, `Guido 1980`, 200)
const uriburu = new Edificio (`Ayres de Recoleta Uriburu`, `Uriburu 1756`, 180)


const edificios = [palermo, guido, uriburu]
console.log (edificios)


const tipoHabitacion = [
    {
        tipo: `Doble`,
        porcentaje: 1,
    },
    {
        tipo: `Triple`,
        porcentaje: 1.2,
    },
    {
        tipo: `Cuadruple`,
        porcentaje: 1.4,
    }
  
]
console.log (tipoHabitacion)



const descuento = (x) => {
    // la x te la estaba devolviendo como string, por eso fallaba la multiplicacion
    x = parseInt(x)
    // tambien aca estabas buscando el precio en el array completo, no en el edificio en si. 
    // decia edificios.precio, pero precio es de un elemento del array, no del array en si.
    const edificio = edificios.find(edificio => edificio.nombre === ubicacion.value)
    let resultado
    if (x >= 1 && x <= 2) {
        resultado = descuento1(x, edificio.precio)
    }
    else if (x >= 3 && x <= 4) {
        resultado = descuento2(x, edificio.precio)
    }
    else if (x >= 5) {
        resultado = descuento3(x, edificio.precio)
    }
    console.log(resultado)
    return resultado
}



// Opciones de edificios

edificios.forEach(edificio => {
    const optionEdificio = document.createElement('option')
    optionEdificio.innerText = `${edificio.nombre}`
    ubicacion.append(optionEdificio)
})


// Opciones de habitacion

tipoHabitacion.forEach(hab =>{
    const optionhab = document.createElement('option')
    optionhab.innerText = `${hab.tipo}`
    habitacion.append(optionhab)
})


// Calcuos


// Creando div de cotizacion

cotizar.onclick = () => {
    const habCliente = habitacion.value
    console.log(habCliente)

    const porcentajePax = tipoHabitacion.find(pax => pax.tipo === habCliente).porcentaje
    console.log(porcentajePax)

    const edificioCliente = ubicacion.value
    console.log(edificioCliente)

    const checkin = fecha.value
    console.log(checkin)

    const cantidadNoches = noches.value
    console.log(cantidadNoches)

    const descuentoxNoches = descuento(cantidadNoches , edificioCliente.precio)
    console.log((descuentoxNoches))

    const presu = document.createElement('h2')
    presu.innerText = `Aca podes ver tu presupuesto`
    reservas.append(presu)
    
    const cotizacion = () => {
        console.log({descuentoxNoches,porcentajePax});
        let resultado = descuentoxNoches * porcentajePax
        
        return resultado
    }
    console.log(cotizacion())

    const presupuesto = () => {

        const divPresupuesto = document.createElement('div')
    
        const presupuesto = document.createElement('h3')
        presupuesto.innerText = `¡FELICITACIONES! Ya estas a un solo paso de completar tu Reserva`
    
        const noches = document.createElement('p')
        noches.innerText = `El presupuesto para ${cantidadNoches} noches, iniciando desde ${checkin} para un depto ${habitacion.value} en el edificio de ${ubicacion.value} seria de:`
    
        const precio = document.createElement('h4')

        // precio.innerText = `${Math.round(cotizacion)}` en este caso te estaba faltando ejecutar la funcion. los parentesis nomas.

        precio.innerText = `${Math.round(cotizacion())} USD`
    
        reservas.append(divPresupuesto)
        divPresupuesto.append(presupuesto, noches, precio)
    }    
    presupuesto()

}

// Creando presupuesto










//Cotizador 

// alert(`¡Bienvenidos a Ayres Apartments!`)
// reserva = prompt(`¿Desea realizar una cotización? Ingrese si o no`)


// while (seguirCotizando = true) {
//     if (reserva.toLowerCase() === `si`) {
//         noches = parseInt(prompt(`Ingrese la cantidad de noches que desea quedarse en numeros`))
//         while (seguirCotizando = true) {
//             if(noches){
//                 edificio = parseInt(prompt(`¿En que edificio desea hospedarse? Ingrese opcion segun el numero.  Opciones: 1. Palermo 2. Guido 3. Uriburu`))
//                 while (seguirCotizando = true) {
//                     if (edificio >= 1 && edificio <=3) {
//                     const edificioCliente = edificios.find(lugar => lugar.id === edificio)
//                     console.log(edificioCliente)
//                     precioxCantidad = edificioCliente.descuento(noches)
//                     console.log(precioxCantidad)            
//                     alert(`El precio de tu reserva seria de ${Math.round(precioxCantidad)}USD, por ${noches} noches en ${edificioCliente.nombre}, que esta ubicado en ${edificioCliente.ubicacion}.`)    
//                     break
//                     }
//                     else{
//                     alert (`No escogio un edificio dentro de las opciones`)
//                     edificio = parseInt(prompt(`¿En que edificio desea hospedarse? Ingrese opcion segun el numero.  Opciones: 1. Palermo 2. Guido 3. Uriburu`))
//                     continue
//                     }
//                 }
//             }
//             else{
//                 alert(`Disculpe, no ingreso una respuesta valida`)
//                 noches = parseInt(prompt(`Ingrese la cantidad de noches que desea quedarse en numeros`))   
//                 continue         
//             }
//             seguirCotizando = false
//             break    
//         }
//         decision = prompt(`¿Desea seguir cotizando? Ingrese si o no`)    
//         if (decision.toLowerCase() === `si`){
//             continue
//         }
//         else if (decision.toLowerCase()===`no`){
//             seguirCotizando = false
//             break
//         }
//         else{
//             alert('Disculpe, no ingreso una respuesta valida')
//             decision = prompt(`¿Desea seguir cotizando? Ingrese si o no`)
//             continue
//         }
//     }

//     else if (reserva.toLowerCase()===`no`){
//         seguirCotizando = false
//         break
//     }
//     else {
//         alert(`Disculpe, no ingreso una respuesta valida`)
//         reserva = prompt(`¿Desea realizar una cotización? Ingrese si o no`)
//         continue
//     }     
//     // seguirCotizando = false
//     // break
// }
    
// alert(`Bienvenido a nuestra web, podes ver nuestros servicios para una proxima reserva`)