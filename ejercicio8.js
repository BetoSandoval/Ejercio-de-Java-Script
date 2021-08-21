/* Dados dos numero resolver cuantos numero Impares hay entre ellos */

const numeroImpares = ( firstNumeber, secondNumber ) => {

    let counter = 0;

    for (let i = firstNumeber; i <= secondNumber; i++) {
        if( i % 2 !== 0 ){
            counter += 1;
        }    
    }

    return `Hay ${counter} numeros IMPARES entr el ${firstNumeber} y el ${secondNumber} `;

}


console.log(numeroImpares(2, 100));