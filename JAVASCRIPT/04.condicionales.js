const edad = 17

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad")
}

const nota = 7.5

if(nota >= 9 && nota <= 10) {
    console.log("Sobresaliente")
} else if (nota < 9 && nota >= 8) {
    console.log("Notable")
} else if (nota < 8 && nota >= 5) {
    console.log("Suficiente")
} else {
    console.log("Suspenso")
}


//////////////////////////////////////

const carnet_de_conducir = true
const edad2 = 18

if(carnet_de_conducir && edad2 >= 18) {
    console.log("Puedes conducir")
} else {
    console.log("No puedes conducir")
}

////////////////////////////////////// ECMASCRIPT 6 o ES6+
///////////////////////////// TERNARIOS
carnet_de_conducir && edad2 >= 18 
    ? console.log("Puedes conducir") 
    : console.log("No puedes conducir");



