let usuarios = require('./usuarios')

function adicionarUsuarios(usuario) {
    usuario.id = usuarios.length + 1

    let jaExiste = usuarios.find(users => users.email === usuario.email);
    if(jaExiste) {
        throw new Error('Email ja adicionado!')
    } else {
        usuarios.push(usuario)
    }
}

module.exports = adicionarUsuarios