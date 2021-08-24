/* 

Dado un numero entero inviertelo y devuelve el nuevo entero

Ejemplo:
inviertirNumero( 67 ) // Devuelve: 76

*/

const invertiNumero = (numeros) => {
  let stringDeNumeros = numeros.toString();
  let invertido = '';

  for (const numero of stringDeNumeros) {
    invertido = numero + invertido;
    
  }

  return Number.parseFloat(invertido) * Math.sign(numeros);
};

console.log(invertiNumero(-15));
