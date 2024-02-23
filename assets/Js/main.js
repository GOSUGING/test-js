// Pedir al usuario que ingrese los dos números
const num1 = parseFloat(prompt("Ingrese el primer número: "));
const num2 = parseFloat(prompt("Ingrese el segundo número: "));

// Pedir al usuario que elija la operación
const operacion = prompt("Ingrese la operación a realizar (+, -, *, /, %): ");

// Realizar la operación seleccionada y mostrar el resultado
let resultado;
switch (operacion) {
    case '+':
        resultado = num1 + num2;
        alert("El resultado de la suma es: " + resultado);
        break;
    case '-':
        resultado = num1 - num2;
        alert("El resultado de la resta es: " + resultado);
        break;
    case '*':
        resultado = num1 * num2;
        alert("El resultado de la multiplicación es: " + resultado);
        break;
    case '/':
        if (num2 !== 0) {
            resultado = num1 / num2;
            alert("El resultado de la división es: " + resultado);
        } else {
            alert("Error: No se puede dividir por cero");
        }
        break;
    case '%':
        resultado = num1 % num2;
        alert("El resultado del módulo es: " + resultado);
        break;
    default:
        alert("Operación no válida");
}

// Conversión grados "celsius" a "faharenheit" y "kelvin"

// Pedir al usuario que ingrese la temperatura en grados Celsius
const temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Convertir Celsius a Kelvin
const temperaturaKelvin = temperaturaCelsius + 273.15;

// Convertir Celsius a Fahrenheit
const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

// Mostrar los resultados
alert("Temperatura en grados Kelvin: " + temperaturaKelvin);
alert("Temperatura en grados Fahrenheit: " + temperaturaFahrenheit);

// Conversión de días: en años, semanas y días 

function convertirDias(dias) {
    const anos = Math.floor(dias / 365);
    const semanas = Math.floor((dias % 365) / 7);
    const diasRestantes = dias % 365 % 7;

    return `${anos} año(s), ${semanas} semana(s) y ${diasRestantes} día(s).`;
}

const cantidadDias = parseInt(prompt("Ingrese una cantidad de días:"));

if (!isNaN(cantidadDias)) {
    const resultado = convertirDias(cantidadDias);
    alert(`El equivalente es: ${resultado}`);
} else {
    alert("Por favor, ingrese un número válido.");
}

// Suma 5 numeros y promedio

function calcularSumaPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    const promedio = suma / numeros.length;
    return [suma, promedio];
}

const numerosIngresados = [];

for (let i = 0; i < 5; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    if (!isNaN(numero)) {
        numerosIngresados.push(numero);
    } else {
        console.log("Por favor, ingrese un número válido.");
        i--; // Reintentar el ingreso del número si es inválido
    }
}

const [suma, promedio] = calcularSumaPromedio(numerosIngresados);

alert(`La suma de los números es: ${suma}`);
alert(`El promedio de los números es: ${promedio}`);
