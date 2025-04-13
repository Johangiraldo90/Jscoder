// tipos de referencias

// personaje de tv

let nombre = "Goku";
let anime = "Dragon ball z";
let edad = 35;

let personaje = {
    nombre:"Goku",
    anime:"Dragon ball z",
    edad:36,

};

console.log(personaje);
console.log(personaje.anime);
console.log(personaje.nombre);
console.log(personaje.edad);
console.log(personaje['edad']);
console.log(personaje['anime']);
console.log(personaje["nombre"]);

personaje.edad=20;
personaje["edad"]=35;

console.log(edad);

// otra forma para cambiar la variable ... no funciono

let llave = 'edad';

personaje[llave] = 56;

console.log(edad)

//para eliminar una llave valor del objeto. 

delete personaje.anime;
 console.log(personaje)