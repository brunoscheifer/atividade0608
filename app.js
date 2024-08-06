const prompt = require('prompt-sync')();
const listarUsuarios = require('./listar')
const adicionarUsuarios = require('./adicionar.js')
const atualizarUsuarios = require('./atualizar')
const removerUsuarios = require('./remover')

exibirMenu()

function exibirMenu() {
    console.log(`  Menu de usuarios
        1. Listar
        2. Adicionar
        3. Atualizar
        4. Remover
        5. Sair `)

let opcao = prompt('Oque deseja fazer?: ')
let index

switch(opcao) {
    case '1':
        listarUsuarios()
        exibirMenu()
        break;
    case '2':
        let nome = prompt('Qual o nome?: ')
        let email = prompt('Qual o email?: ')
        let telefone = prompt('Qual o telefone?: ')
        
        adicionarUsuarios({ nome, email, telefone })
        console.log('adicionado')
        exibirMenu()
        break;
    case '3':
        index = parseInt(prompt('Qual usuario deseja atualizar?: ')) - 1

        let novoNome = prompt('Qual o novo nome')
        let novoEmail = prompt('Qual o novo email')
        let novoTelefone = prompt('Qual o novo telefone')

        atualizarUsuarios({nome: novoNome, email: novoEmail, telefone: novoTelefone})

        exibirMenu()
        break;
    case '4':
        index = parseInt(prompt('Qual usuario deseja atualizar?: ')) - 1

        removerUsuarios(index)
        console.log('Removido')

        exibirMenu()
        break;
    case '5':
        break;
    default:
        console.log('Numero Invalido')
        exibirMenu()
        break;
    }
}
