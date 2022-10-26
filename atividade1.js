var numero 
var maiorNumero = 0


for (var contador = 0; contador < 5; contador++) {
    numero = parseInt(prompt("Digite um numero"))
    if(numero >= maiorNumero) {
    maiorNumero = numero
    }
}
console.log ("Maior numero é:", maiorNumero)