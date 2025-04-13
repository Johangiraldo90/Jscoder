// // variables
// let nombre = "Johan "
// let edad = 25
// let dia = true

// nombre = "Juan"

// console.log(nombre)
// console.log(edad)

// constante --> no puedo luego modificar el archivo
// const color = "rojo"
// const deporte = "futbol"
// const jugadores = 21

// console.log("el color del equipo es de " + color + " y el deporte es " + deporte + "con " + jugadores + " jugadores")

// const comision = prompt ("Ingrese comision")
// let curso = prompt("Ingrese el curso ")

// console.log("Bienvenidos a la comision "+ comision+ " del curso de " + curso)
// alert("Bienvenidos a la comision "+ comision+ " del curso de " + curso)

// let numeroA = parseInt(prompt("Ingres el primer numero"))
// let numeroB = parseInt(prompt("Ingresa el segundo numero"))

// let resultado = numeroA + numeroB
// console.log(resultado)

// semana # 2

// let validar = true
// if (validar){
//     console.log("Variable verdadera")
// }


// let fruta = "pera"
// let mes = "marzo"
// let edad = 25


// condicionales sencillos
// if (fruta == "mandarina"){
//     console.log("Puede ser que estemos en otoño")
// } else if (fruta == "pera") {
//     console.log("Quizas es verano")
// }else {
//     console.log("No hay cosecha")
// }

// condicionales con el or ||

// if (fruta == "mandarina " || fruta == "pera"){
//     console.log("Hay mandarina o hay peras")
// }

// operador logico AND &&

// if (fruta === "pera" && mes=="marzo"){
//     console.log("Se cumplen ambas")
// }

// operador con operaciones

// if (fruta === "pera" && (mes=="marzo" || mes == "junio" || mes =="abril")){
//     console.log("Se cumplen ambas")
// }


// operadores de igualdad
// if (edad > 18){
//     console.log("Podes ingresas a la discoteca")
// } else {
//     console.log("No puedes ingresar")
// }

// ciclos ---
//ejemplo 1
// for (let i = 1; i <=10; i++){
//     console.log(i)
// }


//ejemplo 2
// for (let i=1; i<=15; i++){
//     let resultado = i * 5
//     console.log( 5 + "X" + i + "="+ resultado)
// }

//ejemplo 3 
// console.log("cuenta regresiva")
// for (let i=10; i >= 1; i--){
//     console.log(i)
// }

// console.log("cuenta regresiva")
//     for (let i=10; i >= 1; i--){
//     console.log(i)
//     if (i ==2){
//     console.log("abortamos mision")
//     break
// }
//     if (i==1){
//     console.log("despegar")
// }
// }


//while 
// let continuar = true

// while (continuar){

// }

// let menu = parseInt(prompt("Ingrese 1 pa ver cuenta, 2 extraccion 3 deposito, otro numero salir"))
// switch(menu){
//     case 1:
//         console.log("Total")
//         break
//     case 2:
//         console.log("extraccion")
//         break
//     case 3:
//         console.log("deposito")
//         break
//     default:
//         console.log("Salir") 
//         break
// }

// function saludar(){
//     console.log("Hola, coder ")

// }

// saludar()

// function sumar(){
//     let numeroA = 35
//     let numeroB = 30
//     let total = numeroA + numeroB
//     console.log(total)
// }

// sumar()

// ejemplo

// function sumar(){
//     let numeroA = 35
//     let numeroB = 30
//     let total = numeroA + numeroB
    
//     return total
// }

// let calculo = sumar()
// let conIva = calculo*1.19
// console.log (conIva)


// const restar = function(){
//     let numeroA = 14
//     let numeroB = 12
//     let resultado = numeroA - numeroB
//     console.log(resultado)
// }

// restar()