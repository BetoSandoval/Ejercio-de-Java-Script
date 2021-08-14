/* 
Enunciado ejercicio 12
Dado un número mostrar todos los números desde ese 
al 0 de 8 en 8 en una lista con guiones donde cada número
debe empesar por n°

Ejemplos:
hastaCero(100) // Devuelve:
---- Del 100 al 0 ---
-n°100
-n°92
-n°84
-n°76
-n°68
-n°60
-n°52
-n°44
-n°36
-n°28
-n°20
-n°12
-n°4
*/

const hastaCero = (numero) => {
    console.log(`Del ${numero} al 0`);
    do{
        console.log(`-n° ${numero}`);
        numero -= 8;
    }while (numero > 0)
}

hastaCero(2000);