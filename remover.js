let usuarios = require('./usuarios')

function removerUsuarios(index, id) {
    index = usuarios.findIndex(usuario => usuario.id === id);

    usuarios.splice(index, 1)
}

module.exports = removerUsuarios