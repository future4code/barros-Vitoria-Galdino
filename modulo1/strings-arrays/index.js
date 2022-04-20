// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. Na primeira e segunda mensagem impressa, não irá aparecer nenhum resultado, pois não teve nenhum valor atribuido.
// Na terceira mensagem irá aparecer o número 11, porque o comando "array.length", informa a quantidade de itens dentro de um array.
// Na quarta, quinta e sexta mensagem, não irá aparecer nada, porque não foi definido nenhum array.

// 2. O valor impresso será todo em maiusculo, com a troca do "A" pelo "I", e com a contagem do tamanho da string, contando os espaços, então ficará:
//  "SUBI NUM ÔNIBUS EM MIRROCOS" // 27 CARACTERS.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1. 

let nomeDoUsuario = prompt ("informe o seu nome")
let emailDoUsuario = prompt ("informe o seu email")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

// 2- A.

const comidasFavoritas = ["lasanha", "strogonoff", "batata-frita", "peixe", "coxinha"]

console.log(comidasFavoritas)

// B.

const comidasF = [`lasanha
strogonoff
batata-frita
peite
coxinha`]

console.log(`Essas são as minhas comidas preferidas: ${comidasF}`)

// C. Desafio

let comidaUsuario = prompt ("Informe uma comida favorita")
console.log(comidaUsuario)

// Não consegui compreender o comando onde consigo alterar a minha segunda comida favorita,
// para a que o usuário escolhe.

// 3- A.

let listaDeTarefas = []

// B. e C.

let tarefa1 = prompt ("informe uma tarefa que você precisa fazer")
let tarefa2 = prompt ("informe uma tarefa que você precisa fazer")
let tarefa3 = prompt ("informe uma tarefa que você precisa fazer")

console.log(tarefa1) 
console.log(tarefa2)
console.log(tarefa3)


listaDeTarefas.push(tarefa1)
console.log(listaDeTarefas) 

listaDeTarefas.push(tarefa2)
console.log(listaDeTarefas) 

listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas) 

// D.

let tarefasFeitas = Number(prompt ("Informe um índice de 0, 1 ou 2, correspondente a uma tarefa já realizada"))
console.log(tarefasFeitas) 

// E.

listaDeTarefas.splice(tarefasFeitas-1,1)

// F.

console.log(listaDeTarefas)

// DESAFIO

// 1. Não consegui compreender o que foi desejado desse desafio.

// 2.

let frutas = ["Banana", "Morango", "Abacaxi","Laranja", "Ameixa"]
console.log(frutas[2].length) 











