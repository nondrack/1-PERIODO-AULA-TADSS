// 1. Para os exercícios abaixo, desenvolver um algoritmo em C++:
// 1.1. Faça um algoritmo para imprimir os números de 1 a 100.
// 1.2. Faça um algoritmo para imprimir os números pares de 10 a 50.
// 1.3. Faça um algoritmo para imprimir os números ímpares de 10 a 50.
// 1.4. Faça um algoritmo para imprimir os números de 20 a 0.
// 1.5. Faça um algoritmo para somar os números entre 3 e 10.
// 1.6. Faça um algoritmo para somar os números pares de 4 a 20.
// 1.7. Faça um algoritmo para somar os números ímpares de 10 a 15.
// 1.8. Faça um algoritmo para multiplicar os números no intervalo
// fechado de 2 a 5.
// 1.9. Faça um algoritmo para calcular a média dos números de 1 a 10.
// 1.10. Faça um algoritmo para calcular a média dos números ímpares de
// 10 a 50.
// 1.11. Faça um algoritmo para calcular a média dos números divisíveis
// por 5 no intervalo de 10 a 50

// const prompt = require("prompt-sync")();

// for(x= 0; x<= 100; x= x+1){
//     console.log(x)
// }

// 1.2. Faça um algoritmo para imprimir os números pares de 10 a 50.

// for(x=0; x<=50; x= x+2){
//     console.log(x)
// }

// 1.3. Faça um algoritmo para imprimir os números ímpares de 10 a 50.

// for(x= 1; x<=50; x= x+2){
//     console.log(x)
// }

// 1.4. Faça um algoritmo para imprimir os números de 20 a 0.

// for(x= 20; x=0; x= x-1){
//     console.log(x)
//  }

// 1.5. Faça um algoritmo para somar os números entre 3 e 10

// let soma = 0
// for(let x=4; x<=9; x=x+1){
//     soma = soma + x
//     console.log(x)
// }
// console.log("a soma dos numeros entre 3 e 10 são: " + soma)

// 1.6. Faça um algoritmo para somar os números pares de 4 a 20.

// let soma = 0
// for(let x=4; x<=20; x=x+2){
//     soma = soma + x
// }
// console.log(soma)

// 1.7. Faça um algoritmo para somar os números ímpares de 10 a 15

// let soma = 0

// for(let x=11; x<=15; x=x+2){
//     soma= soma + x
// }
// console.log(soma)

// 1.8. Faça um algoritmo para multiplicar os números no intervalo
// fechado de 2 a 5.

// let resultado = 1

// for(let x=2; x<=5; x=x+1){
//     resultado = (resultado*x)
// }
// console.log(resultado)

// 1.9. Faça um algoritmo para calcular a média dos números de 1 a 10

// let media = 0
// let soma = 0
// let quant =0
// for(let x=1; x<=10; x=x+1){
//     soma = soma+x
//     quant++
//     media = soma/quant
// }
// console.log(media)

// 1.10. Faça um algoritmo para calcular a média dos números ímpares de
// 10 a 50.

// let media = 0
// let soma = 0
// let quant =0
// for(let x=11; x<=50; x=x+2){
//     soma = soma+x
//     quant++
//     media = soma/quant
// }
// console.log(media)

// 1.11. Faça um algoritmo para calcular a média dos números divisíveis
// por 5 no intervalo de 10 a 50

// let media = 0
// let soma = 0
// let quant =0
// for(let x=10; x<=50; x=x+5){
//     soma = soma+x
//     quant++
//     media = soma/quant
// }
// console.log(media)

// EX  2

// Implemente um algoritmo para apresentar a tabuada de um número lido pelo
// usuário. O número recebido do Usuário deve ser natural. (Números naturais
// são números inteiros positivos).

// const prompt = require("prompt-sync")();

// let numero = Number(prompt("Digite um numero inteiro: "));

// for(let x = 1; x <= 10; x= x+1){
//     console.log(numero + " x " + x + " = " + (numero * x))
// }

// EX 3

// 3. Implemente um algoritmo para apresentar a tabuada de 1 a 10

// for(let x = 1; x <= 10; x= x+1){
//     console.log("Tabuada do " + x + " :");
//     for(let y = 1; y<=10; y=y+1){
//         console.log(x + " x " + y + " = " + (x * y))
//     }
//     console.log("")
// }

// ex 4

// Faça um programa que lê um valor inteiro e, em seguida, encontre e imprima
// os divisores desse número.

// const prompt = require("prompt-sync")();
// let numero = Number(prompt("Digite um numero inteiro: "));

// for(let x = 1; x<= numero; x= x+1){
//    if(numero % x == 0){
//     console.log("O nuemero " + numero + " é divisivel por: " + x)
//    }
// }

// EX 5

// Faça um programa que lê um valor inteiro inicial e um valor inteiro final e
// imprima os números entre eles. (Exemplo os números entre 5 e 10 são:
// 6,7,8,9)

// const prompt = require("prompt-sync")();

// let inicial = Number(prompt("Digite o numero inteiro inicial: "));
// let final = Number(prompt("Digite o numero inteiro final: "));

// for (let x = inicial + 1; x <final; x = x + 1) {
//   console.log(x)
// }

// EX 6

// Faça um programa que lê um valor inteiro inicial e um valor inteiro final e
// imprima os números entre eles (incluindo eles), mas só imprima se os
// números forem múltiplos de 3

// const prompt = require("prompt-sync")();

// let inicial = Number(prompt("Digite o numero inteiro inicial: "));
// let final = Number(prompt("Digite o numero inteiro final: "));

// for (let x = inicial; x <= final; x = x + 1) {

//     if(x % 3 == 0){
//         console.log(x + " é ultiplo de 3")
//     }
// }

// EX 7

// Faça um programa que lê dois valores inteiros e calcule a soma dos números
// entre eles, incluindo os valores lidos.

// const prompt = require("prompt-sync")();

// let valor1 = Number(prompt("Digite o primeiro valor Inteiro: "));
// let valor2 = Number(prompt("Digite o segundo valor Inteiro: "));
// let soma = 0
// for(let x= valor1; x<=valor2; x= x+1){
//     soma = soma + x
// }console.log(soma)

// EX 8

// Faça um programa como o do exercício 7, mas, deve ser validado e somado
// somente os números pares.

// const prompt = require("prompt-sync")();

// let valor1 = Number(prompt("Digite o primeiro valor Inteiro: "));
// let valor2 = Number(prompt("Digite o segundo valor Inteiro: "));
// let soma = 0
// let numPares = 0
// for(let x= valor1; x<=valor2; x= x+1){
//     if(x %2 == 0){
//         soma = soma + x
//         numPares = numPares + x + ","
//     }
// } console.log(numPares)
// console.log("A soma dos numeros pares é: " + soma)

// Ex 9

// Faça um programa como o do exercício 7, mas, deve ser validado e somado
// independente da ordem de entrada do usuário. (Ex: primeira entrada 17,
// segunda entrada 5, resultado 143)

// const prompt = require("prompt-sync")();

// let numero1 = Number(prompt("Digite o primeiro numero: "));
// let numero2 = Number(prompt("Digite o segundo numero: "));

// let soma = 0;

// if (numero1 < numero2) {
//   for (let x = numero1; x <= numero2; x = x + 1) {
//     soma = soma + x;
//   }
//   console.log(soma);
// } else {
//   if (numero1 > numero2) {
//     for (let x = numero1; x >= numero2; x = x - 1) {
//       soma = soma + x;
//     }
//     console.log(soma);
//   }
// }

// EX 10

// Faça um programa que lê um inteiro que indique a quantidade de alunos de
// uma turma (menos que 5). Depois lê a idade de todos os alunos. Calcule e
// imprima a média de idade da turma

// const prompt = require("prompt-sync")();
// let quantidadeDeAlunos = Number(
//   prompt("Digite a quantidade de alunos: " + "Menor que 5: ")
// );
// let somaIdades = 0;
// let mediaIdades = 0;

// if (quantidadeDeAlunos < 5) {
//   for (let x = 1; x <= quantidadeDeAlunos; x++) {
//     let idade = Number(prompt("Digite a idade dos alunos: "));
//     console.log("Idade do aluno " + x + " : " + idade);
//     somaIdades = somaIdades + idade;
//     mediaIdades = somaIdades / x;
//   }
//   console.log("Media de idades dos alunos são: " + mediaIdades + " anos");
// }else{
//   console.log("Digite uma quantidade de alunos valido, menor que 5")
// }

// ex 11

// Faça um algoritmo para apresentar os números naturais menores que um
// valor inserido pelo usuário que também será um número natural.

// const prompt = require("prompt-sync")();

// let numeroNatural = Number(prompt("Digite um numero natural: "));

// for(let x = numeroNatural; x>= 0; x= x-1){
//   console.log(x)
// }

// EX 12

// Faça um algoritmo para calcular o rendimento de uma aplicação bancária.
// Deve receber o valor inicial do investimento, o percentual do lucro mensal e a
// durabilidade da aplicação em meses. Deve retornar o valor de lucro de cada
// mês e o valor total dos lucros obtidos no período.

// const prompt = require("prompt-sync")();

// Ex 13

// Faça um algoritmo para imprimir os números inteiros menores que um valor
// inteiro fornecido. Caso o número lido seja negativo inverter a lógica para que
// das duas formas o último valor a ser mostrado seja 0.

// const prompt = require("prompt-sync")();

// let numero = Number(prompt("Digite um numero inteiro: "));

// if (numero < 0) {
//   for (let x = numero; x <= 0; x = x + 1) {
//     console.log(x);
//   }
// }else{
//   for(let x = numero; x>=0; x = x-1){
//     console.log(x)
//   }
// }

// EX 14

// .Faça um programa que lê 10 valores, um de cada vez, e conte quantos estão
// no intervalo de 100 a 500

// const prompt = require("prompt-sync")();
// let contar = 0
// for (let x = 0; x <= 10; x = x + 1) {
//   let numero = Number(prompt("Digite os valores: "));
//   if (numero >= 100 && numero <= 500) {
//     contar++
//   }
// }console.log(contar + " dos numeros digitados Estão entre 100 a 500");

// EX 15

// Faça um algoritmo para apresentar os 10 primeiros termos da série de
// Fibonacci. A série de Fibonacci é obtida pela soma dos dois termos
// anteriores. O primeiro termo é 0 e o segundo é 1. Exemplo: A saída do
// programa será:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 (DESAFIO)

// let numA = 0
// let numB = 1
// let numC = 0
// let Fibonacci = ""

// Fibonacci = Fibonacci + numA + " " + numB

// for(let x = 1; x<= 8; x++){
//   numC= numA + numB
//   Fibonacci = Fibonacci + " " + numC
//   numA = numB
//   numB = numC
// }
// console.log(Fibonacci)

// Ex 16 

// Um número primo é um número positivo maior que 1 com apenas dois
// divisores: 1 e o próprio número. Faça um algoritmo para determinar se um
// número é primo ou não.

// const prompt = require("prompt-sync")();

// let numero = Number(prompt("Digite um numero: "));
// let contador= 0
// for(let x=1; x<= numero; x++){
//   if(numero%x == 0){
//     contador++
//   }
// }if(contador > 2){
//   console.log(numero + " Não é numero primo ")
// }else{
//   console.log(numero + " é um numero primo")
// }




