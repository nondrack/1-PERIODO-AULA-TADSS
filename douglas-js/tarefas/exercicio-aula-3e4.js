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

// ex 12

// let laranjas = Number(prompt("Digite a quantidade de laranja que deseja comprar: "))

// if(laranjas < 12){
//     console.log("o valo Valor unitario da laranja é R$0,40, você irá pagar : R$ " +(laranjas*0.40).toFixed(2))
// }else{
//     if(laranjas >= 12){
//         console.log("o valo Valor unitario da laranja é R$0,28 você irá pagar : R$ " +(laranjas*0.28).toFixed(2))
//     }
// }

// ex 13

// let angulo1 = Number(prompt("Digite o valor do primeiro angulo: "));
// let angulo2 = Number(prompt("Digite o valor do segundo angulo: "));
// let angulo3 = Number(prompt("Digite o valor do terceiro angulo: "));
// let somaDosAngulos = (angulo1 + angulo2 + angulo3)

// if((angulo1 == 90 || angulo2 == 90 || angulo3 == 90) && somaDosAngulos == 180){
//     console.log("Triangulo Retângulo")
// }else{
//     if((angulo1 > 90 || angulo2 > 90 || angulo3 > 90) && somaDosAngulos == 180){
//         console.log("Triangulo Obtusângulo")
//     }else{
//         if((angulo1 < 90 && angulo2 < 90 && angulo3 < 90) && somaDosAngulos == 180){
//             console.log("Triangulo Acutângulo")
//         }else{
//             console.log("Angulos invalidos , pois a somatória dos angulos é menor ou maior que 180°: " + somaDosAngulos)
//         }
//     }
// }

// ex 14


// let mes = Number(prompt("Digite um numero que represente um mes: "));

// if (mes == 1) {
//   console.log("Janeiro");
// } else {
//   if (mes == 2) {
//     console.log("Fevereiro");
//   } else {
//     if (mes == 3) {
//       console.log("Março");
//     } else {
//       if (mes == 4) {
//         console.log("Abril");
//       } else {
//         if (mes == 5) {
//           console.log("Maio");
//         } else {
//           if (mes == 6) {
//             console.log("Junho");
//           } else {
//             if (mes == 7) {
//               console.log("Julho");
//             } else {
//               if (mes == 8) {
//                 console.log("Agosto");
//               } else {
//                 if (mes == 9) {
//                   console.log("Setembro");
//                 } else {
//                   if (mes == 10) {
//                     console.log("Outubro");
//                   } else {
//                     if (mes == 11) {
//                       console.log("Novembro");
//                     } else {
//                       if (mes == 12) {
//                         console.log("Dezembro");
//                       } else {
//                         console.log("Mes invalido");
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }


// ex 15 


// let anoNas = Number(prompt("Digite o ano do seu nascimento: "));
// let idade = (2025 - anoNas)

// if(idade >= 18){
//     console.log("Sua idade é de " + idade + " e Você vota esse ano")
// }else{
//     console.log("Não vota esse ano sua idade é de " + idade + " Anos")
// }

// ex 16


// let prova1 = Number(prompt("Digite a nota da Primeira prova: "));
// let prova2 = Number(prompt("Digite a nota da Segunda prova: "));
// let trabalho1 = Number(prompt("Digite a nota da Primeiro trabalho: "));
// let trabalho2 = Number(prompt("Digite a nota da Segundo trabalho: "));
// let trabalho3 = Number(prompt("Digite a nota da Terceiro trabalho: "));
// let trabalho4 = Number(prompt("Digite a nota da Quarto trabalho: "));
// let mediaProvas = ((prova1 + prova2)/2)
// let mediaTrabalhos = ((trabalho1 + trabalho2 + trabalho3 + trabalho4)/4)
// let mediaFinal = ((mediaProvas + mediaTrabalhos)/2)

    

// if(mediaFinal >= 7.0){
//     console.log("Sua média final é de: " + mediaFinal.toFixed(1) + " Aprovado")
// }else{
//     if(mediaFinal > 4.0 && mediaFinal < 6.99){
//         console.log("Sua média final é de: " + mediaFinal.toFixed(1) + " Recuperação")
//     }else{
//         console.log("Sua média final é de: " + mediaFinal.toFixed(1) + " Reprovado")
//     }
// }