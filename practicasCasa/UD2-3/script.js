/*
/**
 * @author: Sergio Jurado Trillo
 * @description: Escribe una función llamada sumar arrays. como parámetro dos arrays del mismo tamaño y me devuelva un nuevo array que sea la suma de cada uno de los elementos: ArrayTotal: [a1+b1, a2+b2, a3+b3, ...];
 * 
 */
const letras = ['a','b','c'];
const numeros2 = [1, 2, 3];
const numeros = [1, 2, 3];

const  concatenarArrays = sumaArrays(numeros2, numeros);
console.log(concatenarArrays);

/**
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns arrayFinal
 */
function sumaArrays(arr1, arr2){
    const arrayFinal = [];

    if(arr1.length !== arr2.length){
        //ESTE SI:
        throw new Error('Los arrays deben de ser del mismo tamaño');
    }else{
        // ESTE SI LO QUE QUEREMOS ES CONCATENAR
        /*for(let i = 0; i < arr1.length; i++){
            arrayFinal.push(arr1[i] + arr2[i]);
        }*/
        //ESTE SI QUEREMOS SUMAR DOS ARRAYS
        for(const [indice, valor] of arr1.entries()){
            for(const [indice2, valor2] of arr2.entries()){
                if(indice === indice2){
                    arrayFinal.push(valor + valor2);
                }
            }
        }
        
        return arrayFinal;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @author: Sergio Jurado Trillo
 * @description: Define una función llamada eliminarDuplicados que tome un array arr.
 * La función debe eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo el orden original
 */
const ejerciciodublicar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 10]
console.log(eliminarDuplicados(a));

/**
 * 
 * @param {*} arr 
 * @returns 
 */
function eliminarDuplicados(arr) {
    const sinDuplicados = [];
    // ASI SI
    for (const num of arr){
        // IF NORMAL
        /*if(!sinDuplicados.includes(num)) {
            sinDuplicados.push(num);
        }*/
        // IF DE UNA LINEA
        !sinDuplicados.includes(num) ? sinDuplicados.push(num) : null;
    }
    //ASI ES PEOR PERO NO INCORRECTO
    /*for (let i = 0; i < arr.length; i++) {
        if (sinDuplicados.indexOf(arr[i]) === -1) {
            sinDuplicados.push(arr[i]);
        }
    }*/
    return sinDuplicados;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @author: Sergio Jurado Trillo
 * @description: Escribe una función llmada unirArrays que acepte un número variable de arrays y los combine en uno solo. 
 * Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
 */
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

//console.log(unirArrays(a, b));

/*function unirArrays(... arr){
    const resultado = [].concat(...arr);
    return resultado;
}*/

const ejercicio4 = (...arr) => arr.reduce((acumulador,array) => acumulador.concat(array),[]);

console.log(ejercicio4(a, b));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @author: Sergio Jurado Trillo
 * @description: Define una función llamada contarPalabras que tome una cadena de texto y devuelva un objeto que cuente cuántas veces aparece cada palabra en el texto.
 */

console.log(contarPalabras("Hola mundo soy Sergio Jurado Trillo y este es mi mundo de los juegos del hambre"));

/**
 * 
 * @param {*} cadena 
 * @returns 
 */
function contarPalabras(cadena) {
    let palabras = cadena.split(" ");
    let contador = {};
    for (let i = 0; i < palabras.length; i++) {
        if (contador[palabras[i]] === undefined) {
            contador[palabras[i]] = 1;
        } else {
            contador[palabras[i]] += 1;
        }
    }
    return contador;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @author: Sergio Jurado Trillo
 * @description: Crea una función llamada ordenarNumeros que tome un array de número arr y lo ordene de menor a mayor.
 */

console.log(ordenarNumeros([5, 4, 3, 2, 1]));

/**
 * 
 * @param {*} arr 
 * @returns 
 */
function ordenarNumeros(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @author: Sergio Jurado Trillo
 * @description: Escribe una función llamada eliminarElemento que tome un array arr y un elemento elemento, y elimine la primera aparición de ese elemento en el array
 */

console.log(eliminarElemento([1, 2, 3, 1, 2, 3], 1));

/**
 * 
 * @param {*} arr 
 * @param {*} elemento 
 */
function eliminarElemento(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            arr.splice(i, 1);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @author: Sergio Jurado Trillo
 * @description: Define una función llamda encontrarMaxMin que tome un array de números arr y devuelva un objeto con las propiedades max y min, que contengan el valor máximo y mínimo del array respectivamente.
 */

console.log(encontrarMaxMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 * 
 * @param {*} arr 
 * @returns 
 */
function encontrarMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return { max, min };
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @author: Sergio Jurado Trillo
 * @description: Crea una función llamada buscarElemento que tome un array arr y un elemento elemento. La función debe devolver el índice de la primera aparición de elemento en el array, o -1 si no se encuentra.
 */

console.log(buscarElemento([1, 8, 3, 1, 8, 3], 2));

/**
 * 
 * @param {*} arr 
 * @param {*} elemento 
 * @returns 
 */
function buscarElemento(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return i;
        }
    }
    return -1;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @author: Sergio Jurado Trillo
 * @description: Escribe una función llamada dividirFragmento que tome un array arr y un número entero tamano. La función debe dividir el array en fragmentos de tamaño tamano y devolver un nuevo array con los fragmentos.
 */

console.log(dividirFragmento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

/**
 * 
 * @param {*} arr 
 * @param {*} size 
 * @returns 
 */
function dividirFragmento(arr, size) {
    let fragmentos = [];
    for (let i = 0; i < arr.length; i += size) {
        fragmentos.push(arr.slice(i, i + size));
    }
    return fragmentos;
}
