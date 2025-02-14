import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Arrays con las partes de los dominios
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  
  // Array para almacenar las combinaciones de dominios
  let combinaciones = [];
  
  // Generar todas las combinaciones posibles
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let dominio = pronoun[i] + adj[j] + noun[k] + ".com"; // Crear el dominio
        combinaciones.push(dominio); // Agregar el dominio al array
      }
    }
  }
  
  // Mostrar las combinaciones en la consola
  console.log(combinaciones);
  
  // Seleccionar un dominio aleatorio del array
  let dominioAleatorio = combinaciones[Math.floor(Math.random() * combinaciones.length)];
  
  // Mostrar el dominio aleatorio en el DOM
  let domain = document.getElementById("generador");
  if (domain) {
    domain.innerHTML = dominioAleatorio; // Actualizar el contenido del elemento
  } else {
    console.error("No se encontró el elemento con ID 'generador'");
  }
};
