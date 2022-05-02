/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    // *DESAFIO COMEÇA A PARTIR DAQUI*

//     let usuarioDesafio = []
//     let maquina = []

// if(confirm("Bem-vinde ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")){

  
//    let cartasOk = false
//    while (!cartasOk){
//       usuarioDesafio.push(comprarCarta())
//       usuarioDesafio.push(comprarCarta())
//       maquina.push(comprarCarta())
//       maquina.push(comprarCarta())
//       if ((usuarioDesafio[0].valor === 11 && usuarioDesafio[1].valor === 11) ||
//          (maquina[0].valor === 11 && maquina[1].valor === 11)) {
//             usuarioDesafio = []
//             maquina = []
//       } else {
//          cartasOk = true
//       }
//    }

  
//    let comprando = true

//    while(comprando){
//       let textos = ""
//       let pontos = 0
//       for (let carta of usuarioDesafio){
//          textos += carta.texto + " "
//          pontos += carta.valor
//       }

//       if (pontos > 21){
//          comprando = false
//       } else {
//          let confirmCompra = confirm(
//             `Suas cartas são ${textos}. A carta revelada do computador é ${maquina[0].texto}.` +
//             "\n"+ 
//             "Deseja comprar mais uma carta?"
//          )
      
//          if (confirmCompra){
//             usuarioDesafio.push(comprarCarta())
//          } else {
//             comprando = false
//          }
//       }
//    }
   
   
//    let pontosComputador = 0
//    let pontosJogador = 0
//    let textosComputador = ""
//    let textosJogador = ""

//    for (let carta of maquina){
//       pontosComputador += carta.valor
//       textosComputador += carta.texto + " "
//    }
//    for (let carta of usuarioDesafio){
//       pontosJogador += carta.valor
//       textosJogador += carta.texto + " "
//    }

   
//    if (pontosJogador <= 21){
//       while (pontosComputador < pontosJogador && pontosComputador <= 21){
//          maquina.push(comprarCarta())
//          pontosComputador = 0
//          textosComputador = ""
//          for (let carta of maquina){
//             pontosComputador += carta.valor
//             textosComputador += carta.texto + " "
//          }
//       }
//    }
  
//    let resultado = ""
  
//    if (pontosJogador > pontosComputador && pontosJogador <= 21){
//       resultado = "O usuário ganhou!"
//    } else if (pontosComputador > pontosJogador && pontosComputador <= 21){
//       resultado = "O computador ganhou!"
//    } else if (pontosComputador > 21 && pontosJogador <= 21){
//       resultado = "O usuário ganhou!"
//    } else if (pontosJogador > 21 && pontosComputador <= 21){
//       resultado = "O computador ganhou!"
//    } else {
//       resultado = "Empate!"
//    }

  
//    alert(
//       `Usuario - Cartas: ${textosJogador} - Pontuação: ${pontosJogador}` + 
//       "\n" + 
//       `Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}` + 
//       "\n" + 
//       resultado
//    )
   
// } else {
//    alert("O jogo acabou.")
// }
   
