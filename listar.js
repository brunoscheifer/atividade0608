let usuarios = require('./usuarios');

function listarUsuarios() {
    for(i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i]
    
        console.log(`
        ID: ${usuario.id}
        Nome: ${usuario.nome}
        Email: ${usuario.email}`)
            
        for (let o = 0; o < usuario.telefones.length; o++) {
            console.log(` ${o + 1}. ${usuario.telefones[o]}`);
        }
        console.log('');
    }
}

module.exports = listarUsuarios