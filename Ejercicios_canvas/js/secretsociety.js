let nombres=[];
let tamaño = prompt("Cuantos nombres desea ingresar?");

for (let index = 1; index <= tamaño; index++) {
    
    let dato = prompt("Ingrese el dato numero: "+index);
    
    nombres.push(dato);

}

let letra = nombres.map(nombre=>nombre.charAt(0));
console.log(letra);