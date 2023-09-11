class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar (msg) {
        console.log(`${this.nome} esta falando ${msg}`)
    }

    comer() {
        console.log(`${this.nome} esta comendo`)
    }

    beber() {
        console.log(`${this.nome} ${this.sobrenome} esta bebendo...`)
    }
}

class Carro {
    constructor(modelo) {
        this.marca = "Honda"
        this.modelo = modelo
    }

    imprimir() {
        console.log(`${this.marca} ${this.modelo}`)
    }
}