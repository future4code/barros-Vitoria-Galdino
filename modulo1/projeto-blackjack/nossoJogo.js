/**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */ 
// 
 
//  console.log("Boas vindas ao jogo Blackjack!")

//  let mensagem = confirm("Quer iniciar uma nova rodada?")

//  if (mensagem) {
//    let cartaUsuario1 = comprarCarta()
//    let cartaUsuario2 = comprarCarta()
//    let cartaComputador = comprarCarta()
//    let cartaComputador2 = comprarCarta()

//    let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
//    let pontuacaoComputador = cartaComputador.valor + cartaComputador2.valor

//    console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${pontuacaoUsuario}`)
//    console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - ${pontuacaoComputador}`)

//    if (pontuacaoUsuario > pontuacaoComputador) {
//        console.log("O usuário ganhou!")
//    } else if (pontuacaoComputador > pontuacaoUsuario) {
//        console.log("O computador ganhou!")
//    } else if (pontuacaoUsuario === pontuacaoComputador) {
//        console.log("Empate!")
//    }

// } else {
//    console.log("O jogo acabou")
// }


