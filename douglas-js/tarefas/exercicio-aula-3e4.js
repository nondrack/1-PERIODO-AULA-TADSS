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

// let maior, menor,meio;

// let numero1 = Number(prompt("Digite um número inteiro: "));
// maior = numero1
// menor = numero1
// meio = numero1

// let numero2 = Number(prompt("Digite um número inteiro: "));
// if(numero2 > maior){
//     maior = numero2
// }else {
//     if(numero2 < menor){
//         menor = numero2
//     }
//     else{meio = numero2}
// }

// let numero3 = Number(prompt("Digite um número inteiro: "));
// if(numero3 > maior){
//     maior = numero3
// }else{
//     if(numero3 < menor){
//         menor = numero3
//     }else{meio = numero3}
// }
// let ordem =[menor, meio, maior]

// console.log("A orde crescentes dos números é: " + ordem)

// ex 5

// let prova1 = Number(prompt("Digite o valor da nota prova 1: "));
// let prova2 = Number(prompt("Digite o valor da nota prova 2: "));
// let trabalho1 = Number(prompt("Digite o valor da nota trabalho 1: "));
// let trabalho2 = Number(prompt("Digite o valor da nota trabalho 2: "));

// let media = (prova1 + prova2 + trabalho1 + trabalho2) / 4;

// if (media >= 7.0) {
//   console.log(media + " Aprovado");
// } else {
//   if (media > 4.0 && media < 6.99) {
//     console.log(media + " Recuperação");
//   }else{
//     if(media < 4.0){
//         console.log(media + " Reprovado")
//     }
//   }
// }

//ex 6

// let ano = Number(prompt("Digite um ano: "));

// if(ano % 400 == 0 || (ano % 4 == 0 && ano % 100 !==0)){
//     console.log(ano + " é um ano bissexto")
// }else{
//     console.log(ano + " Não é um ano bissexto")
// }

//ex 7

//senha 5479

// let senha = Number(prompt("Digite sua senha: "));

// if(senha == 5479){
//     console.log("ACESSO PERMITIDO")
// }else{
//     console.log("ACESSO NEGADO")
// }

// ex 8

// Um banco emprega diferentes taxas de correção (anual) para um
// investimento dependendo do valor aplicado. Para valores até R$ 2000
// (inclusive) a taxa de correção é de 10%, para valores entre R$ 2000 e R$
// 5000
// (inclusive) a taxa de correção é de 12%, para valores maiores que R$ 5000 a
// taxa de correção é de 13%. Faça um algoritmo que indique a taxa de
// correção para um dado valor aplicado

// let valor = Number(prompt("Digite um valor a ser investido: "))

// if(valor <= 2000){
//     console.log(("sua taxa de correção é de 10% ao ano, valor de " + (valor/100)*10))
// }else{
//     if(valor > 2000 && valor <= 5000){
//         console.log("Sua taxa de correção anual é de 12% eo valor sera: R$ " + ((valor/100)*12))
//     }else{
//         console.log("Sua taxa de correção anual é de 13% eo valor sera: R$ " + ((valor/100)*13))
//     }
// }

// ex 9

// let lados = Number(prompt("Digite a quantidade de lados: "));
// let medida = Number(prompt("Digite a medida do lado em cm: "));

// if (lados == 3) {
//   console.log(
//     "Triângulo eo valor da área é: " +
//       (Math.pow(medida, 2) * Math.sqrt(3)) / 4 +
//       " cm"
//   );
// } else {
//   if (lados == 4) {
//     console.log("quadrado eo valor da área é: " + Math.pow(medida, 2));
//   } else {
//     if (lados == 5) {
//       console.log("Pentágono");
//     } else {
//       if (lados < 3) {
//         console.log("Não é um polígono");
//       } else {
//         console.log("Polígno não identificado");
//       }
//     }
//   }
// }

//ex 10

// let lado1 = Number(prompt("Digite a medida do primeiro lado: "));
// let lado2 = Number(prompt("Digite a medida do segundo lado: "));
// let lado3 = Number(prompt("Digite a medida do terceiro lado: "));

// if (lado1 == lado2 && lado2 == lado3) {
//   console.log("Triangulo equilatero");
// } else {
//   if (
//     (lado1 == lado2 && lado2 != lado3) ||
//     (lado2 == lado3 && lado3 != lado1) ||
//     (lado2 == lado1 && lado1 != lado3) ||
//     (lado3 == lado1 && lado1 != lado2)
//   ) {
//     console.log("Triangulo isósceles");
//   } else {
//     console.log("Triangulo Escaleno");
//   }
// }

//ex 11

// let dia = Number(prompt("Digite um dia: "));
// let mes = Number(prompt("Digite um mes: "));
// let ano = Number(prompt("Digite um ano: "));
// if (
//   (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 !== 0)) &&
//   mes == 2 &&
//   dia <= 29
// ) {
//   console.log(dia, mes, ano + " Válido");
// } else {
//   if (
//     (dia <= 31 &&
//       (mes == 1 ||
//         mes == 3 ||
//         mes == 5 ||
//         mes == 7 ||
//         mes == 8 ||
//         mes == 10 ||
//         mes == 12)) ||
//     (dia <= 30 && (mes == 4 || mes == 6 || mes == 9 || mes == 11))
//   ) {
//     console.log(dia, mes, ano + " Valido");
//   } else {
//     console.log(dia, mes, ano + " Invalido");
//   }
// }
