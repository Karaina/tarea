/*1. FUNCIONES MATEMÁTICAS
Crea dos funciones, add y multiply. Cada una debe tomar dos argumentos. 
La función add debe sumar sus argumentos y devolver el resultado. 
La funcion multiply debe multiplicar sus argumentos. 
Usando solamente estas dos funciones, 
resuelva este simple problema matemático: 36325 * (9824 + 777).*/

const add = function(number,number1) {
   let resultado = number + number1;
  return resultado;
};
  
function multiply (number3,number4) {
    let resultado2 = number3 * number4;
 return resultado2;
};


  /*4. CONTANDO CARACTERES Y ESPACIOS
Crea una web que pida, por medio de un prompt(), una frase al usuario. La web debe presentar un mensaje que diga:
 el número de caracteres y de espacios que componen el string ingresado.
  En la consola, debe aparecer cada caracter impreso en una línea separada, en mayúscula. 
  Si el usuario ingresa un campo vacío, la web debe dar un mensaje de error.

Arma tu archivo JavaScript para que tenga 3 funciones:

Una función que imprima todos los caracteres de un string, cada uno en una línea separada, en mayúscula.
Una función que cuente el número de caracteres de un string (¡sin utilizar .length!)
Una función que cuente el número de espacios de un string*/

let frase = prompt("Escriba una frase");
