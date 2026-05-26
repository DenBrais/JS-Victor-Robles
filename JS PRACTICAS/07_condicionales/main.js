alert("Hola, mundo!, de nuevo");
//condicional if

//ejemplo1: esta lloviendo
let estaLloviendo = false;

if (estaLloviendo) {
  //si esta lloviendo, muestra un mensaje
  alert("Está lloviendo, lleva un paraguas.");
} else {
  //si no esta lloviendo, muestra otro mensaje
  alert("No está lloviendo, disfruta el día.");
}

//ejemplo2:

let quierocebolla = true;

if (!quierocebolla) {
  alert("Quieres una cebolla, tu hamburguesa lo llevara.");
} else {
  alert("No quieres una cebolla, tu hamburguesa no la llevara.");
}

// ejemplo 3
let nombre = "Joaquin perez";
let edad = 25;

if (edad >= 18) {
  console.log(`${nombre} tiene ${edad} es mayor de edad`);
  if (edad <= 21) {
    console.log(`${nombre} es un joven.`);
  } else if (edad >= 50) {
    console.log(`${nombre} es un anciano.`);
  }
} else {
  console.log(`${nombre} es menor de edad.`);
}
