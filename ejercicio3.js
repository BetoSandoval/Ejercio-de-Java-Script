/* 
Dada una cadena de texto, comprobar si es un palindromo o no.
Los palindromos son palabras que se leen igual aun estando invertidas
Por ejmplo: ana, bob, otto, allivessevilla
*/

/* Función que recibe parametros y verfica tre o false */
function esPalindromo ( word ) {
    const arr = [...word];
    const arrReverse = arr.reverse();
    wordReverse = arrReverse.join('');

    if( word === wordReverse ) {
        console.log('Es palindromo');
    }else{
        console.log('No es palindromo');
    }
}



esPalindromo('elmo');