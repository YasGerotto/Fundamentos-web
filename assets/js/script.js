let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeok = false
let emailok = false
let assuntook = false
let mapa = document.querySelector('#mapa')



nome.style.width = '98%'
email.style.width = '98%'

function validaNome(){
    
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = ' Nome Inválido'
        txtNome.style.color = 'red'
        nomeok = true
    } else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }

    }
    function validaEmail (){
        let txtEmail = document.querySelector('#txtEmail')

        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red'

        } else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailok = true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(nome.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        assuntook = true
    }

}
function enviar(){
    if(nomeok == true && emailok == true && assuntook == true){
        alert(' Formulário enviado com sucesso!')
    } else{
        alert(' Preencha o formulário corretamente antes de enviar ...')
    }
    
}
function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}
function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'

}

   