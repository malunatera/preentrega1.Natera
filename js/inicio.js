

// // DOM de Inicio

const inicio = document.querySelector('.inicio')
const bienvenida = document.querySelector('.bienvenida')
const ingreso = document.querySelector('.ingreso')
const nombreInput = document.querySelector('.nombre')
const apellidoInput = document.querySelector('.apellido')
const continuar = document.querySelector('.continuar')

// // Eventos Inicio


continuar.onclick = () => {
    if (nombreInput.value || apellidoInput.value){
        const usuario = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value
    }
    localStorage.setItem('usuario', JSON.stringify(usuario))

    ingreso.remove()

    const saludo = document.createElement('h2')
    saludo.innerText = `${usuario.nombre} ${usuario.apellido}`
    inicio.append(saludo)
    consulta()
    }
    else{
        alert(`Por favor, ingresa los datos solicitados`)
    }
}


// Pregunta de reserva

function consulta(){
    const divConsulta = document.createElement('div')

    const pregunta = document.createElement('p')
    pregunta.innerText = `¿Te gustaria hacer una reserva?`

    const siReserva = document.createElement('a')
    siReserva.innerText = `Si deseo hacer una reserva`
    siReserva.setAttribute('href', './index.html')

    const noReserva = document.createElement('a')
    noReserva.innerText = `No, quiero ver los servicios`
    noReserva.setAttribute('href', './pages/servicios.html')

    inicio.append(divConsulta)
    divConsulta.append(pregunta, siReserva, noReserva)
}





