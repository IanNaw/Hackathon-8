const numero1 = 12,
    numero2 = 20,
    numero3 = 15,
    numero4 = 16,
    pi = 3.14,
    base = 3,
    altura = 7,
    radio = 8,
    horas = 8,
    salarioDeHora = 20,
    pulgadas = 0.0254,
    medidas = 90,
    añoNacimineto = 1990,
    añoActual = 2021,
    soles = 100,
    A = 25,
    B = 30,
    C = 40;
salario = 1500;

let resultado;
let mayorEdad;
let menorEdad;


// 1
resultado = numero1 + numero2;
console.log(resultado);

// 2
resultado = Math.round((numero1 + numero2 + numero3 + numero4) / 4);
console.log(resultado);

// 3
resultado = base * altura;
console.log(`area del rectangulo: ${resultado} cm`);

// 4
resultado = (base * altura) / 2;
console.log(`area del triangulo: ${resultado} cm`);

// 5
resultado = pi * (radio * radio)
console.log(`area del circulo: ${resultado} cm`);

// 6
resultado = (horas * salarioDeHora) * 7;
console.log(`Sueldo semanal: ${resultado} soles`);

// 7
resultado = medidas / pulgadas;
console.log(`Pulgas: ${resultado}`)

// 8
resultado = soles / 3.6;
console.log(resultado);

// 9
resultado = añoActual - añoNacimineto;
console.log(`tiene ${resultado} años`)

// 10
mayorEdad = Math.max(A, B, C);
menorEdad = Math.min(A, B, C);

console.log(`Menor: ${menorEdad}`);

// 11


// 12
resultado = salario * 0.6 + 1500;
console.log(`Salario final: ${resultado}`);

// 13

// 14

// 15