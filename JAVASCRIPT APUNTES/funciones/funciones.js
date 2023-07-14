/*
    * Una funcion es un bloque de codigo que esta encargado de realizar una tarea especifica cuando es llamada. Puede ser parametrizada o no

    Definiendo funcion

    function saludar () {
        //cuerpo de la funcion
        console.log("Hola Midu");
    }

    La funcion se llama fuera de las llaves y es reutilizable

    saludar();

    Para hcer que una funcion devuelva algo usamos return

    function suma () {

        return  1 + 1;
    }

    suma()


    Funciones usables.
    -> Math.random | Numeros al azar
    --> Math.floor | Redondear numeros

    
    
    Creamos una funcion random que nos de un numero entre el uno y el 3


    function numerorandom () {

        const random = Math.random()
        const multiplicado = random * 10
        const redondeo = Math.floor(multiplicado)
        const resultado = redondeo + 1
        
        return resultado;

    
    }

    numerorandon()

    
    
    FUNCIONES CON PARAMETROS:

    Sintaxis de ejemplo

    function saludar (usuario) {

        console.log("Hola " + uauario);
    }

    saludar("Hardyns")

    Ejemplo 2;

    function sumar(a, b) {

        return a + b
    }
    
    sumar(2,3)




 */

    // ejercicio de practica


    function articulos(nombre, tamaño) {

        if (nombre === "" && tamaño === "") {
            return true
        }

        if (nombre !== "" && tamaño !== "") {
            return false
        }
        
    }

    

    

    function facturas(nombreusuario, fechapedido, idfactura, totalpago) {

        
        console.log("Hola tu facura es de: " + nombreusuario, fechapedido, idfactura, totalpago);

        //hay que tener algo en cuenta y es que si hacemos return solamente nos retornara el ultimo elemento pero si lo cambiamos por console.log nos mostrara todos los valores por pantalla

        //return se aplica mas que todo para numeros

        
    }

    facturas("Miguel","20 de febrero",100,12.567)

    

    /* 
        * Los argumentos son valores que se pasan a una funcion al llamarla
        * Los parametros son valores que espera recibir una funcion dentro de ella
     */