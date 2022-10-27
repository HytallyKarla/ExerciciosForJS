/*Faça um algoritmo que receba dois números inteiros que
representam um intervalo, exemplo 1 - 50 ou 73 - 167, e informe
quantos números pares e ímpares existem nesse intervalo.*/

var num1 = parseInt(prompt("Digite o primeiro numero"))
var num2 = parseInt(prompt("Digite o segundo numero"))
var par = 0
var impar = 0 

for (var contador = num1 + 1; contador < num2; contador++) {
    if (contador % 2 == 0){
        par++
    }else {impar++}
    
}
console.log("Quantidade de numeros par no intervalo: ", par)
console.log("Quantidade de numeros impar no intervalo: ", impar)
