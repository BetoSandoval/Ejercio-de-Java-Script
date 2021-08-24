/* 

Dados dos  arrays, devolver array con los elementos comunes entre ambos.

Ejemplo:
elementos([4, 5, 6, 7], [7, 8, 9, 7, 5]) // devualeve: [5, 7];

1.- Funcion que recibe dos arrays
2.- filtar los elementos del arraUno con .filter() .
3.- Dentro de .filter() condicionar mediante .includes() que imprima solo aquellos items dentro de de array dos.

*/


const elementos = ( arrayUno, arrayDos ) => {
    let resultado = [];

    resultado = arrayUno.filter( item => arrayDos.includes(item) );

    return resultado;
}


console.log( elementos( [4, 5, 6, 7], [7, 4, 9, 7, 5] ) );