const prompt = require("prompt-sync")();

// EX: 1

// let valorinteiro = Number(prompt("Digite um numero inteiro: "));
// console.log("a metade de " + valorinteiro + " é: " + valorinteiro / 2);


// EX: 2

// let valordecimal = Number(prompt("Digite um numero decimal: "));
// console.log(valordecimal + " dividido por 5 é: " + (valordecimal/5));

// EX: 3

// let valordecimal = Number(prompt("Digite um valor decimal: "));
// let valorinteiro = Number(prompt("Digite um valor inteiro: "));
// console.log("o numero " + valordecimal + " dividido por " + valorinteiro + " é: " + (valordecimal/valorinteiro));

// EX: 4

// let nome = prompt("Qual seu nome: ");
// let endereco = prompt("Qual seu endereço: ");
// let telefone = prompt("Qual seu telefone: ");
// console.log("")
// console.log("Nome: " + nome);
// console.log("Endereço: " + endereco);
// console.log("Telefone: " + telefone);

// EX: 5

// let lado = Number(prompt("Digite o lado de um triangulo equilátero: "));

// console.log("");
// console.log("O lado do triangulo é: " + lado);
// console.log("A area do triangulo equilatero dado o lado anterior é: " + ((lado*lado*(Math.sqrt(3)))/4));

// EX: 6

// let raio = Number(prompt("Digite o raio de um circulo: "));
// let pi = 3.1415

// let area = (pi*Math.pow(raio,2));
// console.log("area do circulo é : " + area);

// EX: 7

// Faça um algoritmo que com um valor em segundos retorne à quantidade
// de horas, minutos e segundos equivalentes. Por exemplo, 6010
// segundos são 1 hora, 40 minutos e 10 segundos.

// let duracao = Number(prompt("Digite uma quantidade de segundos: "));
// let horas = (parseInt(duracao/3600));
// let resto = (duracao%3600);

// let minutos = (parseInt(resto/60));
// let segundos = (resto%60);

// console.log(horas + " : " + minutos + " : " + segundos);

// EX: 8

// Sabendo-se que 300 quilowatts de energia custam um
// sexto do salário-mínimo  (1/6), fazer uma função, que com o valor do
// salário-mínimo e a quantidade de quilowatts gastas por uma residência,
// calcule o valor em reais a ser pago.

// let salarioMinimo = Number(prompt("Digite o salário minimo atual: "));
// let kwGasto = Number(prompt("Digite a quanmtidade de Quilowatts gasto: "));
// let valor300kw = (salarioMinimo/6);
// let valorR$ = (kwGasto/300*valor300kw);

// console.log("O valor pago em eletrecidade no mes será de : R$ " + valorR$);

// EX 9 

// Dado um conjunto de valores que representam a quantidade diária de
// chuva (em polegadas) que caiu na última semana (segunda a sexta) em
// Campo Mourão, faça um algoritmo para converter a quantidade total de
// chuva da semana em milímetros. Sabe-se que 1 polegada corresponde
// a 25,4 milímetros.

// let chuvaPolegadaPorDia = Number(prompt("Digite a quantidade de chuva na semana em Polegadas: "));
// let chuvaTotalMm = (chuvaPolegadaPorDia*5*25.4);

// console.log("A quantidade de chuva em MM é de : " + chuvaTotalMm + " MM");

// EX: 10

// Calcule a média de um aluno na disciplina de algoritmos. Sabe-se que a
// média é composta por 4 avaliações bimestrais.

// let av1 = Number(prompt("Nota da avaliação 1: "));
// let av2 = Number(prompt("Nota da avaliação 2: "));
// let av3 = Number(prompt("Nota da avaliação 3: "));
// let av4 = Number(prompt("Nota da avaliação 4: "));
// let Total = (av1+av2+av3+av4);
// let media = (Total/4);
// console.log("A media do aluno é de: " + media);

//EX: 11

// Faça um algoritmo para calcular a média ponderada de 4 valores
// inteiros. Sabe-se que os pesos são respectivamente 1, 2, 3 e 4.

// pesos 1,2,3 e 4

// let va1 = Number(prompt("Digite um valor inteiro: "));
// let va2 = Number(prompt("Digite um valor inteiro: "));
// let va3 = Number(prompt("Digite um valor inteiro: "));
// let va4 = Number(prompt("Digite um valor inteiro: "));

// let mediaPonderada = (va1*1 + va2*2 + va3*3 + va4*4)/(1+2+3+4);

// console.log("A media ponderada dos Valores é: " + mediaPonderada);

// EX: 12

// let centena = Number(prompt("Digite um numero de 1 a 9: "));
// let dezena = Number(prompt("Digite um numero de 1 a 9: "));
// let unidade = Number(prompt("Digite um numero de 1 a 9: "));

// console.log(centena,dezena,unidade);
// console.log(unidade,dezena,centena);

// EX 13

// let valorAplicado = Number(prompt("Digite o valor à ser aplicado: "));
// let resultado = ((valorAplicado/100)*11);

// console.log("O valor do rendimento de 11% será de : " + resultado);
// console.log("");
// console.log("O saldo total após o rendimento será de: " + (resultado+valorAplicado));

// EX 14

// let preco = Number(prompt("Digite o preço: "));
// let valorDesconto = Number(prompt("Digite o Desconto: "));
// let percentualDeDesconto = (((preco - valorDesconto)/preco)*100)

// console.log("O desconto é de: " + (100 - percentualDeDesconto) + "%");

// EX 15

// let tempoGasto = Number(prompt("Digite o tempo gasto na viagem: "));
// let velocidadeMedia = Number(prompt("Digite a velociade media durante a viagem: "));
// let distancia = (tempoGasto*velocidadeMedia);
// let litrosUsados = distancia/16

// console.log("A distância percorrida foi de: " + distancia + "Km");
// console.log("A quantidade de combustivel gasto foi de: " + litrosUsados + " Litros");

// EX 16

// let hora = Number(prompt("Digite o valor hora: "));
// let minutos = Number(prompt("Digite o valor minuto: "));
// let segundos = Number(prompt("Digite o valor segundos: "));

// let duracao = ((hora*3600) + (minutos*60) + (segundos));

// console.log(duracao + " Segundos");

// EX 17 

// let valor = Number(prompt("Digite o valor a ser aplicado: "));
// let porcLucro =Number(prompt("Digite o valor da porcentagem de lucro: "));

// let rendimento = (porcLucro*valor/100);

// console.log("O rendimento de " + porcLucro + " % " + "é " + rendimento + " R$");

// EX 18

// let numero = Number(prompt("Digite um numero inteiro: "));
// let quadrado = (Math.pow(numero,2));
// let raiz = (Math.sqrt(numero));

// console.log("O quadrado do numero " + numero + " é " + quadrado);
// console.log("A raiz quadrada do numero " + numero + " é " + raiz);