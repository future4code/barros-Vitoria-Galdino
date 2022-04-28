// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. A- No primeiro log, será impresso o nome "Matheus Nachtergaele". No segundo log, será impresso
// o nome da última pessoa do elenco "Virginia Cavendish". 
// E no terceiro log, será impresso "canal: "Globo", horario: "14h".

// 2. A- No primeiro log, será impresso, as informações sobre o cachorro, que seria o nome, idade e raça.
// No segundo log, será alterado o nome do cachorro para "Juba".
// E no terceiro log, será substituido a letra "a", para a letra "o".

// B- Ela faz a cópia inteira de um objeto para outro.

// 3. A- No primeiro log irá aparecer "false".
// E no segundo log não irá aparecer nenhuma informação e sim "undefined".

// B- Aconteceu porque não foi informado nenhuma altura (valor) na função.


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1. A e B-
const pessoa = {
    nome: "Vitoria",
    apelidos: ["vivi", "vic", "vitorinha"]
}

console.log(`sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

function receber(novoApelido)  {
    const nomeVi = {
        ... pessoa,
        apelidos:["vi", "vix", "torinha"],
    
    }
    console.log(receber(nomeVi))
}




// 2. A- 
const objeto1={
    nome:"Safyra",
    idade:23,
    profissao: "dev",
}

const objeto2={
    nome:"Demitri",
    idade:28,
    profissao: "ceo",
}

// B-
function informacoesArray(obj1, obj2) {
    let array=[obj1.nome,obj1.nome.length, obj1.idade, obj1.profissao,obj1.profissao.length, obj2.nome,obj2.nome.length,obj2.idade, obj2.profissao,obj2.profissao.length]
    
return array

} 

console.log(informacoesArray(objeto1, objeto2))

// 3 - A,B,C,D

// DESAFIOS 1,2,3

// Não consegui efetuar os outros exercícios e desafios, porque ainda estou com dificuldade de como estruturar eles, para fazer o que está sendo solicitado.
// Mas estou estudando, revendo as aulas e buscando informações, para conseguir realizar todos os exercícios e desafios. 
// E também não consigo ter muito tempo para concluir todos eles, porque como revejo as aulas, 
// e vou tentando entender a demanda, acaba não tendo tempo habil, para finalizar tudo.





    
