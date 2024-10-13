let nombre = prompt("Ingrese su nombre: ");
let age = prompt("Ingrese su edad: ")

let nume = prompt("Cunatas peliculas desea agregar: ");

console.log("Buenos dias: "+nombre);
console.log("Su edad es: "+age);


for (let index = 1; index <= nume; index++) {
    
    let movies = prompt("Ingrese su pelicula: ");
    console.log("Su peli favorita numero: "+index+" es: "+movies);
    
}
