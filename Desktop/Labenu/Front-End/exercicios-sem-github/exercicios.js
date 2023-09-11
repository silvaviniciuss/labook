
// // const soma = (n1, n2) => {
// //     return n1 + n2
// // }

// // const multiplicacao = (n1, n2) => {
// //     return n1 * n2
// // }

// // let operacao = 'm'

// // console.log(operacao === 'm' ? multiplicacao(5, 5) : soma(5, 5))

// const dados = (nome) => {
//     return console.log(`Nome: ${nome[0]}`)
// }

// const cliente = {
//     nome: "Vinicius"
// }


// dados(cliente)
// let n1 = [1, 2, 6]

// primeiro = n1.splice(0,1)[0]


// ultimo = n1.splice((n1.length - 1), 1)

// console.log(ultimo)

// // n1.unshift(ultimo)
// // n1.push(primeiro)
// // console.log(n1)


// n1 = 'olÁ'
// n2 = 'olé'
// console.log(n1.localeCompare(n2))

// function checaValidadeInscricaoLabenu() {
//     maiorIdade = 'sim'
//     ensinoMedio = 'sim'
//     horariosCurso = 'sim'

//     return maiorIdade === 'sim' && ensinoMedio === 'sim' && horariosCurso === 'sim'

//   }

// console.log(checaValidadeInscricaoLabenu())

// let array = [1,2,3,4,5,6,7]
// lista.forEach(function(valor, index) {return console.log(valor, index)})

// const retornaMaiorNumero = (array) => {

//     for (let valor in array) {
//         maiorNumero = valor
//         if (valor > maiorNumero) {
//             maiorNumero = valor
//         }

//     } 

// }

// for (let valor of array) {
//     console.log(valor)
// }

// console.log(maiorNumero)
// console.log(retornaMaiorNumero(array))


// const retornaObjeto = (n1, n2) => {
//     let maiorNumero = n1 > n2 ? n1 : n2
//     let menorNumero = n1 < n2 ? n1 : n2
//     let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0 ? true : false
//     let diferenca = maiorNumero - menorNumero

//     const objeto = {
//         'maiorNumero': maiorNumero,
//         'maiorDivisivelporMenor': maiorDivisivelPorMenor,
//         'diferenca': diferenca
//     }
//     return  objeto
// }


// console.log(retornaObjeto(15, 30))

// let array = [0, 1, 2, 3, 5, 6]

// const nPares = (n) => {
//     let numerosPares = []
//     // for(i = 0; numerosPares.length < n; i++) {
//     //     if (i % 2 === 0) {
//     //         numerosPares.push(i)
//     //     }
//     // }
//     let valor = 0
//     while (numerosPares.length < n) {
//         if (valor % 2 === 0) {
//             numerosPares.push(valor)
//         }
//         valor++
//     }

//     return numerosPares

// }

// console.log(nPares(3))

// const triangulo = (ladoA, ladoB, ladoC) => {
//     if(ladoA === ladoB && ladoA == ladoC){
//         return "Equilátero"
//     } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//         return "Isósceles"
//     } else {
//         return "Escaleno"
//     }
// }

// console.log(triangulo(1,2,1))


// const filme  =  {
//     nome: 'O Diabo Veste Prada',
//     ano: 2006,
//     diretor: 'David Frankel',
//     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
//  }

// const objeto = {
// 	nome: "Astrodev",
// 	idade: 25,
// 	email: "astrodev@labenu.com.br",
// 	endereco: "Rua do Futuro, 4"
// }


// const anononimo = (objeto) => {
//     const retorno = {
//         ...filme,
//         nome: "ANÔNIMO"
//     }
//     return retorno
// }

// console.log(anononimo(objeto))

// "Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const retorno = pessoas.filter((n) => {return n.altura < 1.5 || (n.idade < 14 || n.idade > 60)})

// console.log(retorno)

// const cliente = [
//     { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
//     { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
//     { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
//     { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
//     { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
//     { cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// const soma = (cliente) => {
//     for (i = 0; i < cliente.length; i++) {
//         let soma = 0
//         for (j = 0; j < cliente[i].compras.length; j++) {
//             soma = soma + cliente[i].compras[j]

//         }
//         cliente[i].compras= []
//         cliente[i].saldoTotal =  cliente[i].saldoTotal - soma
//     }


//      const novoValor = {
//          ...cliente,
//     }

//     return novoValor
// }

// console.log(soma(cliente))
// const consultas = [
//     { nome: "João", dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia", dataDaConsulta: "04/05/2021" }
// ]

// const alfabetica = (a, b) => {
//     if(a.nome < b.nome) {return -1}
//     if(a.nome > b.nome) {return 1}
//     return 0
// }

// const dataConsulta = (a, b) => {
//     return a.dataDaConsulta.getTime() - b.dataDaConsulta.getTime()
// }

// console.log(consultas.sort(dataConsulta))

// const filmes = {
//     nome: 'O Diabo Veste Prada',
//     ano: 2006,
//     diretor: 'David Frankel',
//     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
// }

// const chamadaFilme = (filmes) => {
//     return ` "Venha assistir ao filme ${filmes.nome}, de ${filmes.ano}, dirigido por ${filmes.diretor} e estrelado por ${filmes.atores[0]}, ${filmes.atores[1]}, ${filmes.atores[2]}, ${filmes.atores[3]}" `
// }

// console.log(chamadaFilme(filmes))

// chamadaFilme(filmes)
//  "Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."


// const checarIgualdade = (a, b) => {
//     return `No comparador de igualdade ${a} === ${b} é ${a === b}`

// }

// console.log(checarIgualdade(1, 3))

// const verificaSeEMaior = (a, b) => {
//     if (a > b) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(verificaSeEMaior(321, 2156))



// const cadastro = () => {
//     const usuario = []
//     usuario.push(prompt('Digite seu Usuário: '))
//     let anoNascimento = Number(prompt('Ano Nascimento: '))
//     while (anoNascimento > 2005) {
//         alert('Usuário Menor de Idade')
//         anoNascimento = Number(prompt('Ano Nascimento: '))
//     }
//     usuario.push(anoNascimento)
//     let senhaDoUsuario = prompt('Senha: ')
//     while (senhaDoUsuario.length > 6) {
//         alert(`Tamanho dos caractere excedido\nSenha deve possui no máximo 6 carateres`)
//         senhaDoUsuario = prompt('Senha: ')
//     }
//     usuario.push(senhaDoUsuario)
//     const nascionalidade = prompt('Nascionalidade: ')
//     usuario.push(nascionalidade)

// }

// // console.log(cadastro());
// cadastro()


// let numeros = [1,2]

let valores = ['pedra', 'papel', 'tesoura']


// console.log(valores[Math.floor(Math.random() * 3)])
// import { soma } from "./functionjs";
// console.log(Math.floor(Math.random() * 3))

// console.log(soma(2,3))
