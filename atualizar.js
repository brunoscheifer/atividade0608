let usuarios = require('./usuarios')

function atualizarUsuarios(index, id, novoUsuario) {
    index = usuarios.findIndex(usuario => usuario.id === id);

    if (index !== -1) {
        residencias[index] = {id, novoUsuario}
    }
}

module.exports = atualizarUsuarios