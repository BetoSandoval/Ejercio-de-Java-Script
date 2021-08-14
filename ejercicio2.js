/* 
Dado un número devolver su tabla de multiplcar completa
Ejemplo:
-Ejecuto tablaDeMultiplicar(5)
- Devuelve como resultado:
 # Tabla del 5 #
 1 X 5 = 5
 ...
 10 X 5 = 50;

 Algoritmo
1.- Función con parametro 'número'
2.- Variable con texto encabezado
3.- Concatenar a la varible string con multiplicación y su resultado
*/

const tablaDeMultiplicar = (numero) => {
    let resultado = `# Tabla del ${numero} #\n`;

    for (let i = 1; i < 11; i++) {
        multiplicacion = i * numero;
        resultado += `${i} X ${numero} = ${multiplicacion}\n`;
    }

    return resultado;
}

console.log(tablaDeMultiplicar(100));



