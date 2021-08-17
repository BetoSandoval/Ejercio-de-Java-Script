/* 
Dada una cadena de texto, darle la vuelta e invertir el orden 
de sus caracteres, sin usar métodos propios del lenguuaje, 
solo estructuras de control.

Ejemplo:
invertir( 'hola' ) // Devuelve 'aloh'
*/

const invertir = (letras) => {
    let palabraInvertida='';
    for (const letra of letras) {
        palabraInvertida = letra + palabraInvertida;
    }

   return console.log(palabraInvertida);
}

invertir('hola');