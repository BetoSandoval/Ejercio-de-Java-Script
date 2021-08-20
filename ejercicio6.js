/* ¿Cuanto es el X % de X número?*/

const numberPorcent = (porcent ,number ) => {

    const result = number * (porcent/100);
    return result;
}

console.log(numberPorcent(7,23000));