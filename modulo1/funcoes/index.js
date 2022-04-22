// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1 - A. Será impresso no console somente o resultado da multiplicação 5*2 = (10) e 5*10 = (50).

// B. Não iria aparecer nada no console, nenhuma resposta com o resultado da multiplicação.

// 2 - A. A primeira função (prompt) pede ao usuário para inserir um texto.
// Já as outras funções (toLowerCase() e includes() ) informa para deixar o texto em letras
// minúsculas e incluir a palavra cenoura no texto. A função function é para poder invocar o
// texto do usuário depois.
// E a outra função mostra no console a resposta, com as devidas alterações.

// B. i - eu gosto de cenoura
// ii - cenoura é bom pra vista
// iii - cenouras crescem na terra 

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1 - A.
function sobreMim() {
    console.log("Eu sou a Vitória, tenho 22 anos, moro em São Paulo e sou estudante.")
    }
    
    sobreMim()

// B. 
function informacoes(nome, idade, cidade, profissão) {
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão} `)
}

informacoes(`Vitória`, `22`, `São Paulo`, `futura dev`)

// 2 - A. 
function soma(primeiroValor, segundoValor) {
    return primeiroValor + segundoValor
    }
    
    console.log(soma (24,28))

// B. 
function maiorIgual(maior, igual) {
    return maior >= igual
    return igual <= maior  
    }
    
    console.log(maiorIgual (2,4))

// C. 
function parImpar(numero) {
    return numero % 2 === 0
}

console.log(parImpar("8"))

// D. 
function frase() {
const string = " estou com fome "
console.log( "O tamanho da mensagem é", string.length, "caracter" + " e em maiúsculo fica:", string.toUpperCase() )  
}

console.log(frase())

// 3 - 
let numero = Number(prompt("Escolha 2 numeros: 30 e 3"))
let numero1 = Number(prompt("Escolha 2 numeros: 30 e 3"))

function soma(valorS30, valorS3) {
    return valorS30 + valorS3
 }
 console.log(soma (30,3))
 
 
 function subtração(valorSu30, valorSu3) {
     return valorSu30 - valorSu3
  }
  console.log(subtração (30,3))
 
 
  function multiplicação(valorM30, valorM3) {
     return valorM30 * valorM3
  }
  console.log(multiplicação (30,3))
 
 
  function divisão(valorD30, valorD3) {
     return valorD30 / valorD3
  }
  console.log(divisão (30,3))


// DESAFIO:
// 1 - A.
array = [2, 4, 8, 10]

function funcaoArray() {
    
}
console.log(array)

// B.
function array2(valor1, valor2) {
return valor1 + valor2

}

console.log(array2 (20,20))


// 2 - Não consegui realizar.







  



   
    








