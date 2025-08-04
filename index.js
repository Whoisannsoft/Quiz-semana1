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
  let aleatorio = Math.floor(Math.random() * palabras.length);
  palabraOculta = palabras[aleatorio];
  letrasMostradas = [];
  for (let i = 0; i < palabraOculta.length; i++) {
    letrasMostradas.push("_");
  }
  intentos = 0;
  errores = [];
  mensaje.textContent = "";
  input.disabled = false;
  actualizarPantalla();
}


function revisarLetra() {
  let letra = input.value;
  letra = letra.toUpperCase();
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
