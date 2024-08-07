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
        
        let telefones = []
        let telefone
        while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            telefones.push(telefone);
        }
        
        let email = prompt('Qual o email?: ')
        
        adicionarUsuarios({ nome, email, telefones })
        
        console.log('adicionado')
        exibirMenu()
        break;
    case '3':
        listarUsuarios()

        let id = parseInt(prompt('Qual usuario deseja atualizar?: '))
        let novoNome = prompt('Qual o novo nome: ')
        
        let novosTelefones = []
        let novoTelefone
        
        while((novoTelefone = prompt('Qual o novo telefone?: '))){
            novosTelefones.push(novoTelefone)
        }
        let novoEmail = prompt('Qual o novo email?: ')
        
        atualizarUsuarios(id, {nome: novoNome, email: novoEmail, telefones: novosTelefones})
        
        console.log('Usuario atualizado!')
        exibirMenu()
        break;
    case '4':
        listarUsuarios()

        let id2 = parseInt(prompt('Qual usuario deseja remover?: '))

        removerUsuarios(id2)
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
