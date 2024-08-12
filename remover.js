let usuarios = require('./usuarios')
const prompt = require('prompt-sync')();

function removerUsuarios(id) {
    let index = usuarios.findIndex(usuario => usuario.id === id);

    if(index !== -1) {
        let confirmacao = prompt('Tem certeza? s/n: ')
        
        if(confirmacao = 'n'){
            console.log('Quase removeu errado!!!')
            return false
            
        } else if (confirmacao = 's') {
            usuarios.splice(index, 1)
            console.log('Removido')
            return true
            
        } else {
            console.log('Tente Denovo')
        }
    
    }
}

module.exports = removerUsuarios