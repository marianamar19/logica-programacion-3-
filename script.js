let numero;

do {
    numero = prompt("Ingresa un número para calcular su factorial:");
    numero = Number(numero);

    if (isNaN(numero)) {
        alert("Error: debes ingresar un número válido.");
    }

} while (isNaN(numero));

let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

console.log("El factorial de " + numero + " es: " + factorial);
alert("El factorial de " + numero + " es: " + factorial);