let celsius = document.querySelector('#celsius')
let fahrenheit = document.querySelector('#fahrenheit')
let kelvin = document.querySelector('#kelvin')

let numeroC = document.querySelector('#numeroC')
let numeroF = document.querySelector('#numeroF')
let numeroK = document.querySelector('#numeroK')

numeroC.value = celsius.value
numeroF.value = fahrenheit.value
numeroK.value = kelvin.value

//Celsius
function atualizaCC() {
    numeroC.value = celsius.value
}

function atualizaCF() {
    let celsiusFahrenheit = (parseFloat(celsius.value) * 9/5) + 32
    numeroF.value = celsiusFahrenheit.toFixed(2)
    fahrenheit.value = celsiusFahrenheit.toFixed(2)
}

function atualizaCK() {
    let celsiusKelvin = parseFloat(numeroC.value) + 273.15
    numeroK.value = celsiusKelvin.toFixed(2)
    kelvin.value = celsiusKelvin.toFixed(2)
}

//Fahrenheit
function atualizaFF() {
    numeroF.value = fahrenheit.value
}

function atualizaFC() {
    let fahrenheitCelsius = (parseFloat(fahrenheit.value - 32) * 5/9)
    numeroC.value = fahrenheitCelsius.toFixed(2)
    celsius.value = fahrenheitCelsius.toFixed(2)
}

function atualizaFK() {
    let fahrenheitKelvin = (parseFloat(fahrenheit.value - 32) * 5/9 + 273.15)
    numeroK.value = fahrenheitKelvin.toFixed(2)
    kelvin.value = fahrenheitKelvin.toFixed(2)
}

//Kelvin

function atualizaKK() {
    numeroK.value = kelvin.value
}

function atualizaKC() {
    let kelvinCelsius = parseFloat(kelvin.value) - 273.15
    numeroC.value = kelvinCelsius.toFixed(2)
    celsius.value = kelvinCelsius.toFixed(2)
}

function atualizaKF() {
    let kelvinFahrenheit = (parseFloat(kelvin.value) - 273.15) * 9/5 + 32
    numeroF.value = kelvinFahrenheit.toFixed(2)
    fahrenheit.value = kelvinFahrenheit.toFixed(2)
}

function zerar() {
    celsius.value = 0.0
    numeroC.value = celsius.value
    numeroF.value = fahrenheit.value
    numeroK.value = kelvin.value
  
}
