class personagem{
    constructor (nomeHeroi, classe, arma){
        this.nomeHeroi = nomeHeroi
        this.classe = classe
        this.arma = arma
    }
    mensagem(){
        console.log(`O herói ${this.nomeHeroi} da classe ${this.classe} atacou usando ${this.arma}`)
    }
}

let personagem1 = new personagem("Canmi", "mago", "magia")
let personagem2 = new personagem("Numti", "guerreiro", "espada")
let personagem3 = new personagem("Kinumo", "monge", "artes marciais")
let personagem4 = new personagem("Namino", "ninja", "shuriken")

personagem1.mensagem()
console.log("-------")
personagem2.mensagem()
console.log("-------")
personagem3.mensagem()
console.log("-------")
personagem4.mensagem()
console.log("-------")
