let texto = prompt("Escribe una palabra o frase para verificar si es un palíndromo:");

// Convertir el texto a minúsculas y eliminar caracteres no alfanuméricos
let textoInicial = texto.toLowerCase().replace(/[^a-z0-9]/g, '');

// Invertir el texto limpio
let textoInvertido = textoInicial.split('').reverse().join('');

// Verificar si el texto limpio es igual al texto invertido
if (textoInicial === textoInvertido) {
    console.log("Es un palíndromo");
} else {
    console.log("No es un palíndromo");
}