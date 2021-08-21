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

// Otra froma de resolver el problema

function lado(numero){
    let lado = '';

    for (let i = 0; i < numero; i++) {
        lado += "*";
        
    }

    return lado;

}

function cuadrado(numero){

    let dibujo = lado(numero) + '\n';

    let contenido = "";

    for (let i = 2; i < numero; i++) {
        contenido = "*";

        for (let j = 2; j < numero; j++) {
            contenido += " ";
            
        }

        contenido += "*"

        dibujo += contenido + "\n";   
    }
    
    dibujo += lado(numero);

    return dibujo;
}

console.log(cuadrado(4));