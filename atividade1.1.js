var nome 
var frase = ""

for (var contador = 0; contador < 4; contador++) {
    nome=prompt ("Digite uma palavra")
    frase = frase + " " + nome
}
console.log(frase)