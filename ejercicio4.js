/* 
Dada una plabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parametros de una función.

concidencias('Hola soy Pablo', 'Pablo') // Devuelve: 1
*/

/* 
Algortimo
1.- Recibir palabra y frase.
2.- Convertir frase a array
3.-Recorrer frase buscando palabra
Comparar si frase esta dentro de palabra
4.- Si palabara esta dentro de frase devolver numero de veces que la palabra se repite. Si no, devolver 0.
5.- fin.
*/

const concidencias = ( frase, palabra ) => {

    counter = 0;
    let textoLimpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
    const arr = textoLimpio.split(" ");

    for ( i = 0; i < arr.length; i++) {
        if( arr[i] === palabra ){
            counter++;
        }
    }

    console.log(counter);
}


concidencias('Hola soy Rodrigo! Para ti rodrigo, rodri pa la banda', 'rodrigo');