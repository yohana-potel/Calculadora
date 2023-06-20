// decalracion de variables para los botones
const pantalla = document.querySelector('.pantalla');
const valorActual = document.getElementById('valorActual');
const borrar = document.getElementById('borrar');
const volver = document.getElementById('volver');
const dividir = document.getElementById('dividir');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const multiplicar = document.getElementById('multiplicar');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const restar = document.getElementById('restar');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const sumar = document.getElementById('sumar');
const igual = document.getElementById('igual');
const cero = document.getElementById('cero');

let valorAnterior = null;
let operacionActual = null;

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

function multiplicacion(a, b) {
  return a * b;
}



// Evento para los botones numéricos
cero.addEventListener('click', () => {
  valorActual.innerText += '0';
});

uno.addEventListener('click', () => {
  valorActual.innerText += '1';
});

dos.addEventListener('click', () => {
  valorActual.innerText += '2';
});

tres.addEventListener('click', () => {
  valorActual.innerText += '3';
});

cuatro.addEventListener('click', () => {
  valorActual.innerText += '4';
});

cinco.addEventListener('click', () => {
  valorActual.innerText += '5';
});

seis.addEventListener('click', () => {
  valorActual.innerText += '6';
});

siete.addEventListener('click', () => {
  valorActual.innerText += '7';
});

ocho.addEventListener('click', () => {
  valorActual.innerText += '8';
});

nueve.addEventListener('click', () => {
  valorActual.innerText += '9';
});


// Eventos de los botones de operación
sumar.addEventListener('click', () => {
  operacionActual = 'suma';
  valorAnterior = Number(valorActual.innerText);
  pantalla.innerText = `${valorAnterior} + `;
  valorActual.innerText = '';
});

restar.addEventListener('click', () => {
  operacionActual = 'resta';
  valorAnterior = Number(valorActual.innerText);
  pantalla.innerText = `${valorAnterior} - `;
  valorActual.innerText = '';
});

multiplicar.addEventListener('click', () => {
  operacionActual = 'multiplicacion';
  valorAnterior = Number(valorActual.innerText);
  pantalla.innerText = `${valorAnterior} * `;
  valorActual.innerText = '';
});

dividir.addEventListener('click', () => {
  operacionActual = 'division';
  valorAnterior = Number(valorActual.innerText);
  pantalla.innerText = `${valorAnterior} / `;
  valorActual.innerText = '';
});

// Evento para el botón de igual
igual.addEventListener('click', () => {
  const valorActualNum = Number(valorActual.innerText);
  let resultado;

  if (operacionActual === 'suma') {
    resultado = suma(valorAnterior, valorActualNum);
  } else if (operacionActual === 'resta') {
    resultado = resta(valorAnterior, valorActualNum);
  } else if (operacionActual === 'multiplicacion') {
    resultado = multiplicacion(valorAnterior, valorActualNum);
  } else if (operacionActual === 'division') {
    resultado = division(valorAnterior, valorActualNum);
  }

  pantalla.innerText += `${valorActualNum} = ${resultado}`;
  
  // Borra la operación actual y el valor actual
  operacionActual = null;
  valorAnterior = null;
  valorActual.innerText = '';
});


// Evento para el botón de borrar
borrar.addEventListener('click', () => {
  operacionActual = null;
  valorAnterior = null;
  valorActual.innerText = '';
  pantalla.innerText = '';
});

// Evento para el botón de volver atrás
volver.addEventListener('click', () => {
  const valorActualStr = valorActual.innerText;
  
  // Borra el último dígito del valor actual
  if (valorActualStr.length > 0) {
    const nuevoValorStr = valorActualStr.slice(0, -1);
    valorActual.innerText = nuevoValorStr;
  }
});

//