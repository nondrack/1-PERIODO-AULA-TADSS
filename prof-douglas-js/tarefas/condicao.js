const prompt = require("prompt-sync")();

// let numero1 = Number(prompt("informe o primeiro valor: "));
// let numero2 = Number(prompt("informe o segundo valo: "));

// if(numero1 > numero2){
//     console.log("o numero"+numero1+"é o maior");
// }else{
//     console.log("o numero "+numero2 +"é o menor");
// }


let maior,menor;

let numero1 =Number(prompt("Informe o valor: "));
maior = numero1;
menor = numero1;
let numero2 =Number(prompt("Informe o valor: "));
if(numero2 > maior){
    maior = numero2;
}
if(numero2 < menor){
    menor = numero2
}
let numero3 =Number(prompt("Informe o valor: "));
if(numero3 > maior){
    maior = numero3;
}
if(numero3 < menor){
    menor = menor
}
let numero4 =Number(prompt("Informe o valor: "));
if(numero4 > maior){
    maior = numero4;
}
if (numero4 < menor){
    menor = numero4
}
let numero5 =Number(prompt("Informe o valor: "));
if (numero5 > maior){
    maior = numero5;
}
if(numero5 < menor){
    menor = numero5
}
console.log("o maior numero é: " + maior + " o menor numero é: "+menor);
