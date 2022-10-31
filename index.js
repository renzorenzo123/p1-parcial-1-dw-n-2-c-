"use strict";

/*
 * MOTTA, RENZO 
 */

// Ejemplo de la estructura de un disco:
let disco = {
  nombredisco: "",
  autordisco: "",
  codigodisco: "",
  pistasdisco: [],
};

let codigosUsados = [];
// Discos:
let discos = [];

// Función Cargar:
const Cargar = () => {
  disco.nombredisco = ingresarNombre();
  disco.autordisco = ingresarAutor();
  disco.codigodisco = ValidarCodigo();
  do {
    agregarcaniones();
  } while (confirm("Desea agregar otra cancion?"));
  discos.push(disco);
  disco = {
    nombredisco: "",
    autordisco: "",
    codigodisco: "",
    pistasdisco: [],
  };
};

// Función Mostrar:
const Mostrar = () => {
  // Variable para ir armando la cadena:
  let html = "<ul> ";
  for (var pista of discos) {
    html +=
      `<li> El nombre del disco es: ${pista.nombredisco}` +
      `</li>` +
      `<li> El autor del disco es: ${pista.autordisco}` +
      `</li>` +
      `<li> El codigo del disco es: ${pista.codigodisco}` +
      `</li>`;
    for (let i = 0; i < pista.pistasdisco.length; i++) {
      html +=
        `<li> Nombre de la pista: ${pista.pistasdisco[i].nombre} - Duración <span style=color:${
          pista.pistasdisco[i].duracion > 180 ? "red" : "green"
        }>${pista.pistasdisco[i].duracion}</span> 
        </li>`; 
      }
         
  }
 

  html += "</ul>";

  // Cositas:

  // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
  document.getElementById("info").innerHTML = html; // <--- ahí es acá
}

// Todas las funciones que necesites:

class canciones {
  constructor(nombre, duracion) {
    this.nombre = nombre;
    this.duracion = duracion;
  }
}

function agregarcaniones() {
  do {
    var nombre = prompt("Ingrese el nombre de la cancion");
    if (nombre.length == 0) {
      alert("El valor no puede estar vacío. Inténtelo nuevamente...");
    }
  } while (nombre.length == 0);
  do {
    var duracion = prompt("ingrese la duracion de la cancion");
    if (duracion.length == 0) {
      alert("El valor no puede estar vacío. Inténtelo nuevamente...");
    }
    if (duracion > 7200 || duracion < 0) {
      alert(
        "la duracion de la cancion no puede ser mayor a 7200 segundos o menos a 0 segundos"
      );
    }
    if (isNaN(duracion) == true) {
      alert("solo se puede ingresar valores numericos");
    }
  } while (
    duracion.length == 0 ||
    duracion > 7200 ||
    duracion < 0 ||
    isNaN(duracion) == true
  );

  var cancion = new canciones(nombre, duracion, 0);
  disco.pistasdisco.push(cancion);
}

function ingresarNombre() {
  do {
    disco.nombredisco = prompt("Ingrese el nombre del disco");
    if (disco.nombredisco.length == 0) {
      alert("El valor no puede estar vacío. Inténtelo nuevamente...");
    }
  } while (disco.nombredisco.length == 0);
  return disco.nombredisco;
}
function ingresarAutor() {
  do {
    disco.autordisco = prompt("Ingrese el autor del disco");
    if (disco.autordisco.length == 0) {
      alert("El valor no puede estar vacío. Inténtelo nuevamente...");
    }
  } while (disco.autordisco.length == 0);
  return disco.autordisco;
}

function ValidarCodigo() {
  do {
    disco.codigodisco = parseInt(prompt("ingrese el codigo del disco"));
    var repetido = codigosUsados.includes(disco.codigodisco);
    if (repetido == true) {
      alert("Ese codigo ya esta en uso, utilize otro");
    }
    if (disco.codigodisco > 999 || disco.codigodisco < 1) {
      alert("la duracion de la cancion no puede ser mayor a 999 o menor a 1");
    }
    if (isNaN(disco.codigodisco) == true) {
      alert("solo se puede ingresar valores numericos");
    }
  } while (
    repetido == true ||
    disco.codigodisco.length == 0 ||
    disco.codigodisco > 999 ||
    disco.codigodisco < 1 ||
    isNaN(disco.codigodisco) == true
  );
  codigosUsados.push(disco.codigodisco);
  return disco.codigodisco;
}
