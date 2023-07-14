
/* 
    * Un bucle o ciclo es una estructura de control que nos permite repetir un vloque de código, las veces que queramos

    Ejemplo:

    Mientras la condicion sea verdadera se ejecutará el bloque de código que tengamos DENTRO del ciclo
    Cuando la condicion deje de ser verdadera deja de ejecutarse lo que está adentro y se sale del ciclo

    while (condition) {

    }

    Ejemplo 2:

    let cuentatras = 10;

    while (cuentatras > 0) {
        cuentatras = cuentatras - 1
        console.info(cuentatras + ' segundos')
    }

    - La iteracion es cada vuelta que se le da al bucle
    - Hay que tener en cuenta el cuidado con los whiles infinitos

    ejemplo de como declarar un ciclo siempre infinito:

    while (true) {
    console.log('¡Hola hasta el infinito!')
    }

    Tenemos dos palabras reservadas: break y continue

    Break: Romper el ciclo

    Ejemplo:

    let cuentatras = 10;

    while (cuentatras > 0) {
        cuentatras = cuentatras - 1
        console.info(cuentatras + ' segundos')

        if (cuentatras === 4) {
            break;
            console.log("Despegue")
        } 
        
    }


    Continue: Seguir a la siguiente iteracion

    Ejemplo:

    let cuentatras = 10;

    while (cuentatras > 0) {
        cuentatras = cuentatras - 1
        
        if (cuentatras === 2) {
            continue;
            } 
        
        console.info(cuentatras + ' segundos')
    }

    console.log("Despegar.com")

    Otros ejemplos:

    * Creando un multiplicador

    





    let multiplicador = 5;

    while (multiplicador >= 5) {

        multiplicador = multiplicador * 5 
        
        if (multiplicador === 625) {
            console.log(typeof(multiplicador));
            continue;
        }

        if (multiplicador === 15625) {
            break;
        }
            
        
        
    }

    console.log(multiplicador + " validación exitosa.")


     */
