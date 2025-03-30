const prompt = require("prompt-sync")();

// EX:1 

// let nome = prompt("Digite um nome: ");
// let altura = prompt("Digite sua altura em Metros: ");
// let peso = prompt("Digite seu peso em Kg: ");

// let pesoIdeal = (peso/(altura*altura));

// if(pesoIdeal < 17){
//     console.log(nome + " sua Faixa de peso é " + pesoIdeal +" e você Esta muito abaixo do peso");
// }
// if((pesoIdeal >= 17) && (pesoIdeal <= 18.49)){
//     console.log(nome + " sua Faixa de peso é " + pesoIdeal +" e você esta abaixo do peso");
// }
// if((pesoIdeal >= 18.5) && (pesoIdeal <= 24.99)){
//     console.log(nome + " sua Faixa de peso é " + pesoIdeal +" e você Esta com peso normal");
// }
// if((pesoIdeal >= 25)&& (pesoIdeal <= 29.99)){
//     console.log(nome + " sua Faixa de peso é " + pesoIdeal +" e você Esta acima do peso ");
// }
// if((pesoIdeal >= 30)&& (pesoIdeal<= 34.99)){
//     console.log(nome + " sua Faixa de peso é " + pesoIdeal +" e você Esta com Obesidade 1");
// }
// if((pesoIdeal >= 35)&& (pesoIdeal<= 39.99)){
//     console.log(nome + " sua Faixa de peso é " + pesoIdeal +" e você Esta com Obesidade 2 " + "(Severa)");
// }
// if(pesoIdeal >= 40){
//     console.log(nome + " sua Faixa de peso é " + pesoIdeal +" e você Esta Obesidade 3 " + "(mórbida)");
// }

//EX: 2

// let lado1 = Number(prompt("Digite um lado de um triangulo: "));
// let lado2 = Number(prompt("Digite o segundo lado de um triangulo: "));
// let lado3 = Number(prompt("Digite o terceiro lado de um triangulo: "));

// if((lado1 == lado2)&&(lado3 == lado2)){
//     console.log("Triangulo equilátero")
// }
// if((lado1 == lado2 && lado3 != lado1)||(lado1 == lado3 && lado2 != lado1)||(lado2 == lado3 && lado1 != lado2)){
//     console.log("Triangulo isósceles")
// }
// if((lado1 != lado2)&&(lado1 != lado3)&&(lado2 != lado3)){
//     console.log("Triangulo escaleno");
// }

//EX: 3

// O governo do estado autorizou um aumento de salário para os funcionários
// públicos. Para tentar aproximar os valores pagos, o aumento depende do
// valor do salário atual. Para funcionários que ganham até R$ 1320 o aumento
// será de 11%, para funcionários que ganham entre R$ 1320 e R$ 3000 o
// aumento será de 9%, para funcionários que ganham entre R$ 3000 e R$
// 7000, o aumento será de 6%, e finalmente, para os funcionários que ganham
// mais que R$ 7000, aumento de 1%. Faça um algoritmo que calcule o novo
// salário a partir do salário atual.

// let salario = Number(prompt("Digite seu salário: "));

// if(salario <= 1320){
//     console.log("O aumento foi de 11 % e o salario atual é de: " + " R$" + (salario/100*11+salario));
// }
// if(salario > 1320 && salario < 3000){
//     console.log("O aumento foi de 9 % e o salario atual é de: " + " R$" + (salario/100*9+salario));
// }
// if(salario > 3000 && salario < 7000){
//     console.log("O aumento foi de 6 % e o salario atual é de: " + " R$" + (salario/100*6+salario));
// }
// if(salario > 7000){
//     console.log("O aumento foi de 1 % e o salario atual é de: " + " R$" + (salario/100*1+salario));
// }

// EX: 4

let numero1 = Number(prompt("Digite um numero inteiro: "));
let numero2 = Number(prompt("Digite um numero inteiro: "));
let numero3 = Number(prompt("Digite um numero inteiro: "));

let numeros = [numero1,numero2,numero3];
