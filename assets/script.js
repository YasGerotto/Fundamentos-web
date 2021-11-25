let nome = document.querySelectorAll('#nome')


function validarNome(){
    let textNome = document.querySelector('#txtNome')
    if(nome.values.length < 3){
        textNome.innerHTML = 'nome invalido'
        textNome.style.color = 'red'
    }

    else{
        textNome.innerHTML = 'nome valido'
        textNome.style.color = ' green'
        nomeOK = true
    }
}

function enviar(){
    if(nomeOK == true){
        alert('enviado')
    }else{
            alert('preencha o nome corretamente')
        }
        
    }
    