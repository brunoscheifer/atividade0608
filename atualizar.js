let usuarios = require('./usuarios')

function atualizarUsuarios(id, novoUsuario) {
    let index = usuarios.findIndex(usuario => usuario.id === id);

    if (index !== -1) {
        usuarios[index] = {id, ...novoUsuario}
    }
}

module.exports = atualizarUsuarios