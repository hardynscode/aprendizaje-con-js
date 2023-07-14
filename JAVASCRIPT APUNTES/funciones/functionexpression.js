
/* 
    * Una function expression son funciones asignadas a una variable

    * Para llamar la funcion usamos el nombre de la variable declarada dentro de la funcion

    * Ejemplo

    const validacion = function (agua, luz) {

        console.log(agua, luz)

    }

    validacion(!true, !false);

    // EJEMPLOS

    // esto es una function expression
    const sum = function (a, b) {
    return a + b
    }

    // esto es una declaración de función
    function sum(a, b) {
    return a + b
    }

    Para hacer el proceso del hosting primero hay que escirbir la funcion y arriba de esta llamarla

    el hoisting es un termino que usa javascript para describir como javascript reacciona ante la lectura de una llamada de funcion antes de la definicion de la misma

    ejemplo del hoisting

        sum(1, 2) // 3

    function sum(a, b) {
    return a + b
    }

    

 */