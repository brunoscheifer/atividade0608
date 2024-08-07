let usuarios = require('./usuarios')

function removerUsuarios(id) {
    let index = usuarios.findIndex(usuario => usuario.id === id);

    if(index !== -1) {
    usuarios.splice(index, 1)
    }
}

module.exports = removerUsuarios