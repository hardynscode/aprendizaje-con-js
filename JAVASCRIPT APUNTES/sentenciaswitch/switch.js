

/* 
    * Switch nos permite ejecutar diferentes bloques de codigo dependiendo del valor de una expresion

    * Switch evaluará una expresion comparando el valor con los diferentes casos que hemos definido

    * Para ello se utiliza break para la separacion de cada caso y evitar que se sigan evaluando el resto de casos
    * 
    
    * Sintaxis

    switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión coincide con valor1
    break

  case valor2:
    // código a ejecutar si la expresión coincide con valor2
    break
  default:
    // código a ejecutar si la expresión no coincide con ningún valor
    break
}

ejemplo 2:

        const dia = new Date().getDay()

    // segun el dia de la semana, mostramos un mensaje diferente
    switch (dia) {
    case 0:
        console.log("¡Hoy es domingo! 😴")
        break
    case 1:
        console.log("¡Nooo, es lunes! 😢")
        break
    case 2:
        console.log("¡Hoy es martes! 🥵")
        break
    case 3:
        console.log("¡Hoy es miércoles! 🤓")
        break
    default:
        console.log("Se acerca el fin de! 🚀")
        break
    }

    AGRUPACION DE CASOS:

    Podemos agrupar los casos para un mismo fragmento de codigo3

    const dia = new Date().getDay()

switch (dia) {
  case 0:
  case 6:
    console.log("¡Hoy es fin de semana! 🥳")
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("¡Nooo, a trabajar! 😢")
    break
  case 5:
    console.log("¡Hoy es viernes! 🤓")
    break
}

Siempre hay que poner break al final de cada caso




 */