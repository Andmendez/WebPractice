
console.log('Imprime en console');



// VARIABLES

const name = 'Variable';
let apellido;

apellido = 'Cambiable';

console.log('My name is', name + apellido);

// TIPOS DE VARIABLES

let numero = 1;
let texto = "Hola!";
let boolean = true;
let indefinido;
let nulo = null;

console.log(typeof(numero));
console.log(typeof(texto));
console.log(typeof(boolean));
console.log(typeof(indefinido));
console.log(typeof(nulo));

var boton = document.querySelector(".botonOne");
var contador = 0;
boton.addEventListener("click", function() {
    
    contador++;
    console.log("Clickeaste el boton", contador, "veces!");

    if (contador >= 10) {
        console.log("Inicia de cero jajajaja :)")
        contador = 0
    }
    
});




const titlePage = document.querySelector("h1");

titlePage.textContent = "JavaScript"