let usuarios = require('./usuarios');

function listarUsuarios() {
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}.   ID: ${usuario.id}
        Nome: ${usuario.nome}
        Email: ${usuario.email}
        Telefone: ${usuario.telefone}`)
    })       
}

module.exports = listarUsuarios