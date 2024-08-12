let usuarios = require('./usuarios')

function atualizarUsuarios(id, novoUsuario) {
    let index = usuarios.findIndex(usuario => usuario.id === id);

    let jaExiste = usuarios.find(users => users.email === novoUsuario.email)
    
    if (jaExiste) {
        throw new Error('Email ja adicionado!')
    } else {
        usuarios[index] = {id, ...novoUsuario}
    }
}

module.exports = atualizarUsuarios