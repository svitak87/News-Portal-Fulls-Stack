const sumarDos = (array, num) => {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) {
        console.log(array[j]);
        resultado.push(array[i], array[j]);
      }
    }
  }
  return resultado;
};

console.log(sumarDos([3, 4, 8, 4, 9, 7, 5], 10));

const encontrarNumeroFaltante = (array) => {
  let numeroEsperado = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== numeroEsperado) {
      return numeroEsperado;
    }
    numeroEsperado++;
  }
};

console.log(encontrarNumeroFaltante([1, 2, 3, 4, 6, 7, 8]));

const eliminarDuplicados = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        result.push(array);
      }
    }
  }
  return result;
};

console.log(eliminarDuplicados([1, 2, 3, 3, 4, 5, 5]));

const formatearFecha = (str) => {
  const result = str.split("").slice(8, str.length).join("");
  console.log(result);
};

// Llamada a la función con la cadena proporcionada
const fechaFormateada = formatearFecha("https://www.perfil.com");
console.log(fechaFormateada); // Salida: "03-05-2024"

const calculadora = (a, b, operation) => {
  // Verificar si a y b son números
  if (isNaN(a) || isNaN(b) || typeof a !== "number" || typeof b !== "number") {
    return "Los valores deben ser numéricos";
  }

  // Realizar la operación correspondiente
  if (operation === "sumar") return a + b;
  else if (operation === "restar") return a - b;
  else if (operation === "dividir") return a / b;
  else if (operation === "multiplicar") return a * b;
  else {
    return "Operación no válida";
  }
};

console.log(calculadora(20, 89, "sumar"));

const numeroParesAB = (a, b) => {
  const pares = [];
  for (let i = a + 1; i < b; i++) {
    if ([i] % 2 === 0) {
      pares.push(i);
    }
  }
  return pares;
};

console.log(numeroParesAB(1, 50));

const tablaMultiplicación = (num, finalNum) => {
  const resultados = [];
  for (let i = 1; i < finalNum; i++) {
    resultados.push(num * i);
  }
  return resultados.filter((num) => num % 7 === 0);
};

console.log(tablaMultiplicación(6, 48));

const palabres = (str, letraRepetida) => {
  const arrayLetras = str.toLowerCase().split("");
  let contador = 0;
  for (let i = 0; i < arrayLetras.length; i++) {
    if (letraRepetida === arrayLetras[i]) {
      contador++
    }
  }
  if(contador > 0){
    return `La letra "${letraRepetida}" se repite: ${contador} veces`;
  }else{
    return `la letra ${letraRepetida} no se encuentra en el texto`
  }

};

console.log(palabres("Hola mundo esta es una oracion principal", "e"));

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
