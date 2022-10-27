/* *Exercício Bônus que combinamos em aula* Faça um algoritmo que
receberá 4 palavras diferentes de seu usuário e irá concatenar todas
elas.*/


var nome 
var frase = ""

for (var contador = 0; contador < 4; contador++) {
    nome=prompt ("Digite uma palavra")
    frase = frase + " " + nome
}
console.log(frase)