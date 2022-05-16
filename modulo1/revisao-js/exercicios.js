// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numeroPar = function(numero) {
        return (numero % 2 === 0) 
    }

    const pares = array.filter(numeroPar)
    return pares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
     let numeroPar = array.filter((numero) => {
     return(numero % 2 === 0)
     })
    
    let numeroElevado = numeroPar.map((numero) => {
      return(Math.pow(numero, 2))

     })

     return numeroElevado
      
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    
    let maiorNumero = 0
    
    for(let posicao = 0; posicao < array.length; posicao++) {
        let numeroDoArray = array[posicao]
    
      if(numeroDoArray > maiorNumero) {
         maiorNumero = numeroDoArray
    
            }
    
        }
         
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 
 let numeroMaior
 let diferente
 let divisivel

 if (num1 > num2) {
     numeroMaior = num1
     divisivel = num1 % num2 === 0
     diferente = num1 - num2
}else{
     numeroMaior = num2
     divisivel = num2 % num1 === 0
     diferente = num2 - num1
 }
 objetoDoisNumeros = {
    maiorNumero: numeroMaior,
    maiorDivisivelPorMenor: divisivel,
    diferenca: diferente
 }

 return objetoDoisNumeros

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numeroPar = []
   for(let i = 0; numeroPar.length < n; i++) {
       if (i % 2 === 0) {
             numeroPar.push(i)
       }
   }
   return numeroPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
 if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    return "Escaleno"
 }else if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
    return "Equilátero"
 }else{
     return "Isósceles"
 }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const filme1 = {
        nome:'O Diabo Veste Prada',
        ano: 2006,
        diretor:'David Frankel',
        atores:['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
       
    }
    
return `Venha assistir ao filme ${filme1.nome}, de ${filme1.ano}, dirigido por ${filme1.diretor} e estrelado por ${filme1.atores[0]}, ${filme1.atores[1]}, ${filme1.atores[2]}, ${filme1.atores[3]}.`
        
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let pessoaAnonima = {
       ...pessoa,
       nome: "ANÔNIMO",
   }
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const autorizado = []
   for(let pessoa of pessoas) {
       if((pessoa.idade > 14 && pessoa.idade < 60) && pessoa.altura >= 1.5) {
           autorizado.push(pessoa)
       }
   }
   return autorizado
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizado = []
    for(let pessoa of pessoas) {
        if((pessoa.idade <= 14 || pessoa.idade >= 60) || pessoa.altura <= 1.5) {
            naoAutorizado.push(pessoa)
        }
    }
    return naoAutorizado
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 let valor = contas.map((item) => {
     return item.compras.reduce((valor1, valor2) => {
         return valor1 + valor2
 }, 0)

})

 for(let i = 0; i < contas.length; i++) {
     contas[i].saldoTotal -= valor[i]
     contas[i].compras = []
 }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}