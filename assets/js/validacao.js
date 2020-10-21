let nome = document.querySelector('#inputAddress')
let email = document.querySelector('#inputAddress2')
let telefone1 = document.querySelector('#inputEmail4')
let telefone2 = document.querySelector('#inputPassword4')
let cadastro = document.querySelector('.cabecalho-ficha')
let botaoEnviar = document.querySelector('.botao')
let header = document.querySelector('header')

let validaNome = () => {
    if(nome.value.trim() == '') {
        return false
    }
    else {
        return true
    }
}
let validaEmail = () => {
    if(email.value.trim() == '') {
        return false
    }
    else {
        return true
    }
}
let validaTelefone1 = () => {
    if(telefone1.value.trim() == '') {
        return false
    }
    else {
        return true
    }
}
let validaTelefone2 = () => {
    if(telefone2.value.trim() == '') {
        return false
    }
    else {
        return true
    }
}

botaoEnviar.addEventListener('click', (event) => {
     
    
    if(validaNome() && validaEmail() && validaTelefone1()) {
        let confirma = `<p>${nome.value}</p>
                        <p>${email.value}</p>
                        <p>${telefone1.value}</p>
                        `
        cadastro.innerHTML += confirma

        if(validaTelefone2()) {
            cadastro.innerHTML += `<p>${telefone2.value}</p>`
        } else {
            cadastro.innerHTML += `<p class='nao-informado'>Não informado</p>`
        }

        let msgSucesso = `<span class='mensagem-sucesso'>Candidatura enviada com sucesso!</span>`
        header.innerHTML += msgSucesso

        nome.value = ''
        email.value = ''
        telefone1.value = ''
        telefone2.value = ''
        event.preventDefault()
        
        
    }
    else {
        let msgErro = `<span class='mensagem-erro'>Preencha todos os campos obrigatórios por favor!</span>`
        header.innerHTML += msgErro
        event.preventDefault()
        
        

    }
})




