// let numeros = "";

// for( let x= 0; x<=10; x++){
//     if(x == 10){
//     numeros = numeros + x ;
// }else{
//     numeros = numeros + x + ",";
// }
// }
// console.log(numeros);

// let soma = 0
// for(let i=1; i<= 10;i++){
//     soma = soma + i
// }
// console.log(soma)

// let contadora = 0
// for(let i=121; i<237; i++){
//     if(i%2 == 0){
//         contadora++;
//     }
// }
// console.log("Existe " + contadora+" numeros pares entre 121 e 237");

const prompt = require("prompt-sync")();
// const senhacorreta = 20304050;
// let senhainformada;

// do{
//     senhainformada = prompt("Informe a senha: ");
//     if(senhainformada != senhacorreta){
//         console.log("Senha incorreta tente novamente")
//     }else{
//         console.log("Bem Vindo")

//     }
// } while(senhainformada != senhacorreta);

// let numero = prompt("Informe o valor: ");
// while(numero != 0 ){
//     console.log(numero);
//     numero--;
// }

let paisa = 900000000
let paisb = 2000000000
let qtanos = 0;
while(paisb > paisa){
    paisa = paisa* 1.04;
    paisb = paisb *1.0195;
    qtanos++;
}
console.log("Demorou " + qtanos + " anos para o pais a ter mais habitantes que pais b");

