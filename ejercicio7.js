/* 
Dibujar un cuadrado hueco con asteriscos 

    ****
    *  *
    *  *
    ****
*/

const dibujarCuadrado = () => {
    const lineaUno = '**** \n';
    const lineaDos = '*  *\n';
    let resultado = '';

    for (let i = 1; i < 5; i++) {

        if( i === 1 || i === 4 ){
        resultado += lineaUno
        }else{
        resultado += lineaDos
        }
    }

   return resultado;
}

console.log(dibujarCuadrado());