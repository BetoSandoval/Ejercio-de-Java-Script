/* ¿Cuanto es el X % de X número?*/

const numberPorcent = (number, porcent) => {

    const result = number * (porcent/100);
    return result;
}

console.log(numberPorcent(23000,7));