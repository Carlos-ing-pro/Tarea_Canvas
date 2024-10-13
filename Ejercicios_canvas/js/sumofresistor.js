let sum=[];
let tamaño = prompt("Cuantos numeros desea ingresar?");

for (let index = 1; index <= tamaño; index++) {
    
    let dato = parseFloat(prompt("Ingrese el dato numero: "+index));
    
    if (dato<0) {
        dato=Math.abs(dato);
    }
    sum.push(dato);
}

let suma = sum.reduce((acc, num) => acc + num, 0);
console.log(suma+" ohm");
