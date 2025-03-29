const prompt = require("prompt-sync")();

// let numero1 = Number(prompt("informe o primeiro valor: "));
// let numero2 = Number(prompt("informe o segundo valo: "));

// if(numero1 > numero2){
//     console.log("o numero"+numero1+"é o maior");
// }else{
//     console.log("o numero "+numero2 +"é o menor");
// }


// let maior,menor;

// let numero1 =Number(prompt("Informe o valor: "));
// maior = numero1;
// menor = numero1;
// let numero2 =Number(prompt("Informe o valor: "));
// if(numero2 > maior){
//     maior = numero2;
// }
// if(numero2 < menor){
//     menor = numero2
// }
// let numero3 =Number(prompt("Informe o valor: "));
// if(numero3 > maior){
//     maior = numero3;
// }
// if(numero3 < menor){
//     menor = menor
// }
// let numero4 =Number(prompt("Informe o valor: "));
// if(numero4 > maior){
//     maior = numero4;
// }
// if (numero4 < menor){
//     menor = numero4
// }
// let numero5 =Number(prompt("Informe o valor: "));
// if (numero5 > maior){
//     maior = numero5;
// }
// if(numero5 < menor){
//     menor = numero5
// }
// console.log("o maior numero é: " + maior + " o menor numero é: "+menor);


// let numero =    Number(prompt("Informe um numero:"));
// if (numero % 2 == 0){
//     console.log("o numero " + numero +" é par");} else{
//         console.log("o numero " + numero + " é impar");
//     }
    

// let numero = Number(prompt("Informe o numero: "));
// if((numero %2 == 0) && (numero % 10 == 0)){
//     console.log("o numero é divisivel por 10 e é par: "+numero);
// } else{
//     console.log("numero ou não é par, ou não é divisivel por 10: " + numero);
// }

// let numero = Number(prompt("Informe um numero :"));
// if((numero %7 == 0) || (numero %23 == 0)){
//     console.log("o numero " + numero + " é divisivel por 7 ou por 23: ");
// }else{
//     console.log("o numero não é divisivel por 7 ou por 23")
// }
    


let maior;

let primeiro = Number(prompt("Informe o primeiro numero inteiro : "));
maior = primeiro;

let segundo = Number(prompt("Informe o segundo numero inteiro : "));
if(segundo > maior){
    maior = segundo
}

let terceiro = Number(prompt("Informe o terceiro numero inteiro : "));
if(terceiro > maior){
    maior = terceiro
}

let quarto =Number(prompt("Informe o quarto numero inteiro : "));
if(quarto > maior){
    maior = quarto
}

let quinto = Number(prompt("Informe o quinto numero inteiro: "));
if (quinto> maior){
    maior = quinto
} console.log(maior + ": é o maior numero");


if(maior == primeiro){
    console.log("primeiro digitado é o maior.");
}
if(maior == segundo){
    console.log("segundo digitado é o maior. ");
}
 if(maior == terceiro){
    console.log("terceiro digitado é o maior.");
}
 if(maior == quarto){
    console.log("quarto digitado é o maior.");
}
if(maior == quinto){
    console.log("quinto digitado é o maior.");
}