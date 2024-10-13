let mayor=[];

for (let index = 1; index <=10; index++) {
   
    let numeros = prompt("Ingrese el numero: "+index);

    mayor.push(numeros);

}

let max = mayor.reduce((a,b) =>(a>b ? a:b));
console.log("El numero mayor es: "+max);
