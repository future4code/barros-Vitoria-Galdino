// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. A- O código ira mostrar se o resto do número que o usuário informou, se é divisivel por 2.
// Se sim, saíra "Passou no teste.", e se não, ira aparecer "Não passou no teste.".

// B- Para números pares.

// C- Para números ímpares.

// 2. A- Se o valor da variável for igual ao que está no case, o código irá mostrar no console. Será executado.

// B. Será impresso: "O preço da fruta maçã é R$ 5".

// C. Seria impresso: "O preço da fruta Pêra é R$ 5".

// 3. A- A primeira linha está pedindo para o usuário informar um número. Mas se a primeira linha
// for a partir do if(numero>0) {}, está perguntando se o número que o usuário informar, se é 
// maior que 0.

// B. Se o número for 10, a mensagem seria: "Esse número passou no teste", e se o número for
// -10, não iria aparecer mensagem, daria erro.

// C. Se for algum número inferior a 0, não irá aparecer nenhuma mensagem, porque a mensagem 
// não foi definida.


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1. A, B, C
// let idadeUsuario = Number(prompt("Digite sua idade"))
//     console.log(idadeUsuario)  

// let idadeParaDirigir = Number(18)


// function maior18(podeDirigir, naoPDirigir) {
//    if(podeDirigir>=naoPDirigir) {
//    return "Pode dirigir"
//     }else{
//     return "Não pode dirigir"
//     }
// } 

// console.log(maior18(idadeUsuario, idadeParaDirigir))


// 2.
// let horarios = prompt("Qual turno você estuda? Digite: M(matutino), V(Vespertino) ou N(Noturno)")
// if (horarios == "m") {console.log("Bom dia")

// }if (horarios == "v") {console.log("Boa tarde")} 

// if (horarios == "n") {console.log("Boa noite")}


// 3.
//  let turnos = prompt("Qual turno você estuda? Digite: M(matutino), V(Vespertino) ou N(Noturno)")

//  switch(turnos) {

//      case  "M":
//          console.log("Bom dia")
//          break
//     case "V":
//         console.log("Boa tarde")
//         break
//     case "N":
//         console.log("Boa noite")
        
//         default:

//         break;
// }
   

// 4.
// let filme = prompt("É fantasia?")
//    if (filme==="sim") {
//     console.log("Bom filme")
// }else{
//       if (filme==="nao") {
//       console.log("Escolha outro filme")
// }
// }

// let ingresso = Number(prompt("Qual o valor do ingresso?"))
// if (ingresso<=15) {
//     console.log("Bom filme")
// }else{
//       if (ingresso>=15) {
//       console.log("Escolha outro filme")
// }
// }


// DESAFIO

// 1.
// let filme = prompt("É fantasia?")
// if (filme==="sim") {
//  console.log("Bom filme")
// }

// let lanches = prompt("Qual lanche você vai comprar: chocolate, pipoca ou doces?")
// console.log(`Aproveite o seu ${lanches}`)
