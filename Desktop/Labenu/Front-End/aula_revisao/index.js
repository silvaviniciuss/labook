// EXERCÍCIO 01
   // const nomeProduto = prompt('Insira nome produto: ')
   // let precoProduto = Number(prompt('Insira preço produto: '))

   // console.log(`${nomeProduto} está com desconto ${precoProduto -= 1} R$/KG`)


//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 02
// const operacoes = () => {
//    // pede 2 numeros ao usuário e retorna operações matemática
//    const num1 = Number(prompt('Digite o primeiro número: '))
//    const num2 = Number(prompt('Digite o segundo número: '))
//    return (`Soma: ${num1 + num2}
//    Subtração: ${num1 - num2}
//    Multiplicação: ${num1 * num2}
//    Divisão: ${(num1 / num2).toFixed(2)}
//    Resto da Divisão: ${(num1 % num2).toFixed(2)}`)
// }

// operacoes()
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 03

// const comparacaoSorteio = () => {
//    const numeroSorteado = Math.floor(Math.random() *10) + 1
//    const numeroUsuario = Number(prompt('Informe um número(1 - 10)'))
//    // const numeroUsuario = 8
//    let comparacao = ''
//    if (numeroUsuario > numeroSorteado){
//       comparacao = 'maior'
//    } else if (numeroUsuario < numeroSorteado) {
//       comparacao = 'menor'
//    } else {
//       comparacao = 'igual'
//    }

//    return `Número Sorteado: ${numeroSorteado} - Número Usuário: ${numeroUsuario}\nSeu número é ${comparacao} ao número sorteado`
// }

// console.log(comparacaoSorteio())

//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 04

// const proibidoEntrarBrinquedo = () => {
//    const idade = Number(prompt('Informe a Idade: '))
//    const altura = Number(prompt('Informe a Altura: '))
//    const problemaCardiaco = confirm('Possui problema cardiaco? ')

//    let entrada = ''

//    if (idade >= 18 && altura >= 160 && problemaCardiaco === false) {
//       entrada = 'Pode Entrar'
//    } else {
//       entrada = 'Não Pode Entrar'
//    }

//    return `${entrada} no Brinquedo`

// }

// console.log(proibidoEntrarBrinquedo())



//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 05
const frase = "  Hoje eu vou comer cenoura ebaaa  "


//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 06
// const listaDeCompras = ["batata", "cenoura", "beterraba"]

// console.log(listaDeCompras[1])
// console.log("Tamanho da lista:", listaDeCompras.length)
// listaDeCompras.push("Mandioca")
// console.log(listaDeCompras)
// console.log("Tem cenoura?", listaDeCompras.includes("cenoura"))

// listaDeCompras.splice(1, 1)
// console.log(listaDeCompras)
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 07
// const array = [6, 7, 8, 9, 10]

// function divideDois1 (arrayDeNumeros) {
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
//     return arrayDeNumeros
// }

// let divideDois2 = function (arrayDeNumeros) {
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
//     return arrayDeNumeros
// }

// let divideDois3 = (arrayDeNumeros) => {
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
//     return arrayDeNumeros
// }


// console.log(divideDois1(array))
// console.log(divideDois2(array))
// console.log(divideDois3(array))
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 08

// const pessoa = {
//     nome: "Letícia",
//     idade: 27,
//     generoMusical: "Rock"
// }

// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

// const outraPessoa = {
//     ...pessoa,
//     nome: "Amanda"
// }

// console.log(outraPessoa)
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 09
// const numero = Number(prompt("Digite um número"))

// if (numero % 2 === 0){
//     console.log("É par")
// } else {
//     console.log("É ímpar")
// }
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 10
// const bichinho = prompt("Digite um bichinho")

// if (bichinho === "cachorro"){
//     console.log("Au au")
// } else if (bichinho === "gato"){
//     console.log("Miau")
// } else if (bichinho === "vaca"){
//     console.log("Muuuu")
// } else {
//     console.log("Barulho não encontrado")
// }

// switch(bichinho){
//     case "cachorro":
//         console.log("Au au")
//         break;
//     case "gato":
//         console.log("Miau")
//         break;
//     case "vaca":
//         console.log("Muuuu")
//         break;
//     default:
//         console.log("Barulho não encontrado")
//         break
// }

//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 11
// const numeros = [11, 15, 18, 14, 120, 13, 100]

// let maior = -Infinity

// let i = 0
// while(i < numeros.length) {
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
//     i++
// }

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
// }

// numero = numeros[i]
// for (let numero of numeros){
//     if(numero > maior){
//         maior = numero
//     }
// }

// console.log(`O maior número é ${maior}`)

//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 12
// const prof = {
//     nome: "Letícia Chijo",
//     idade: 27,
//     aulasFront: true,
//     aulasBack: false,
//     jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
//     contaPiada: () => console.log("É pave ou pacume?"),
//     pet: {
//         nome: "Polly",
//         especie: "cachorrinha",
//         raca: "Lhasa Apso",
//         snacksFavoritos: ["biscoito", "maçã", "frango"]
//     }
//  }

//  const verificaAula = (aula) => {
//     if (aula) {
//         return "Dou"
//     } else {
//         return "Não dou"
//     }
//  }

//  const aulasBack = verificaAula(prof.aulasBack)
//  const aulasFront = verificaAula(prof.aulasFront)

//  const jogos = []


//  for(let i = 1; i <= prof.jogosFavoritos.length; i++){
//      jogos.push(`${i}) ${prof.jogosFavoritos[i-1]}`)
//  }

//  console.log(jogos)

//  const frase = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
//  ${aulasFront} aulas de front e ${aulasBack} aulas de back.
//  Meus jogos favoritos são: ${jogos}
//  Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}
//  `
// console.log(frase)
// prof.contaPiada()
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 13
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
//     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const produtosComDesconto = produtos.map((prod)=>{
//     return {...prod, preco: (prod.preco*0.9).toFixed(2)}
//  })

//  console.log(produtosComDesconto)

//  const hortifruti = produtos.filter((prod) => {
//     return prod.categoria === "Hortifruti"
//  })

//  console.log(hortifruti)

//  const hortifrutiComDesconto = produtos
//  .filter((prod) => {
//     return prod.categoria === "Hortifruti"
//  }).map((prod)=>{
//     return {...prod, preco: (prod.preco*0.9).toFixed(2)}
//  })

//  console.log(hortifrutiComDesconto)
