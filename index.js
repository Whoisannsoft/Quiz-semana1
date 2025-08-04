let palabras = ["WATER", "LIGHT", "GAMES", "HOUSE"];
let palabraOculta = "";
let letrasMostradas = [];
let intentos = 0;
let errores = [];


let wordDisplay = document.getElementById("word-display");
let tries = document.getElementById("tries");
let mistakes = document.getElementById("mistakes");
let input = document.getElementById("letter-input");
let mensaje = document.getElementById("message");
let boton = document.getElementById("random-btn");


function empezarJuego() {

  palabraOculta = palabras[Math.floor(Math.random() * palabras.length)];
  letrasMostradas = Array(palabraOculta.length).fill("_");
  intentos = 0;
  errores = [];
  mensaje.textContent = "";
  input.disabled = false;
  actualizarPantalla();
}


function actualizarPantalla() {
  wordDisplay.textContent = letrasMostradas.join(" ");
  tries.textContent = intentos + "/6";
  mistakes.textContent = errores.join(", ");
}


function revisarLetra() {
  let letra = input.value.toUpperCase();
  input.value = "";

  if (letra === "" || errores.includes(letra) || letrasMostradas.includes(letra)) {
    return; 
  }

  if (palabraOculta.includes(letra)) {
  
    for (let i = 0; i < palabraOculta.length; i++) {
      if (palabraOculta[i] === letra) {
        letrasMostradas[i] = letra;
      }
    }
  }

  actualizarPantalla();
  revisarFinal();
}

function revisarFinal() {
  if (!letrasMostradas.includes("_")) {
    mensaje.textContent = ":3 Ganaste!";
    input.disabled = true;
  } else if (intentos >= 6) {
    mensaje.textContent = ":c Game Over";
    input.disabled = true;
  }
}


input.addEventListener("input", revisarLetra);


boton.addEventListener("click", empezarJuego);


empezarJuego();
