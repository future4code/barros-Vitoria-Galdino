// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

// 1. A- Irá ser impresso no console, os nomes e apelidos dos usuários, dentro do novo array.

// 2. A- Será impresso somente os nomes dos usuários, dentro do novo array.

// 3. A- Será impresso somente os nomes dos usuário que sejam diferente de "Chijo".


// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1-
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]
// A.
// const nomesDogs = pets.map ((pets, indice, array) => {
//     console.log(pets.nome)
// })
// B.
// const dogsSalsicha = pets.filter ((pets, indice, array) => {
//     return pets.raca === "Salsicha"
// })
// console.log(dogsSalsicha) 
// C.
// const dogsPoodles = pets.filter ((pets, index, array) => {
//     return pets.raca === "Poodle"
// })

// const nomePoodles = dogsPoodles.map((pets, index, array) => {
//    return pets.nome
// })

// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodles}!!`)


// 2-
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]
// A.
// const nomeItens = produtos.map ((produtos, indice, array) => {
// console.log(produtos.nome)
// })

// B.

// C.
// const bebidas = produtos.filter ((produtos, indice, array) => {
//     return produtos.categoria === "Bebidas"
// })
// console.log(bebidas) 

// D.
// const produtosYpe = produtos.filter ((produtos) => {
//     return produtos.nome.includes("Ypê")
// })
// console.log(produtosYpe) 

// E. 
//  function filtrarProdutoYpe(produtos) {
//     return produtos.nome.includes("Ypê")
//    }
   
//  function filtrarYpeProduto(produtos) {
//     let frase = `Compre ${produtos.nome} por ${produtos.preco}`
//     return frase
//    }
   
//  let arrayResultado = produtos.filter(filtrarProdutoYpe).map(filtrarYpeProduto)
//  console.log(arrayResultado)
 
   
// DESAFIO

// 1.
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]

// A.

// pokemons.sort((a, b) => {
 
//     if (a>b)
    
//     return -1
    
//     if (a<b)
    
//     return 1
    
//     return 0
    
// })
// console.log(pokemons)

// B.
// const tipoPokemons = pokemons.map ((pokemon, indice, array) => {
//     console.log(pokemon.tipo)
// })
