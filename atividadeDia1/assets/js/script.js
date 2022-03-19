let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {

    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

    function validaEmail() {

        let txtEmail = document.querySelector("#txtEmail")
        if(email.value.indexOF('@') == -1 || email.value.indexOF ('.') == -1){
            txtEmail.innerHTML = "Email Inválido"
            txtEmail.style.color = "red"
        } else{
            txtEmail.innerHTML = "Email Válido"
            txtEmail.style.color = "green"
            emailOK = true
        }
    }

    function validaAssunto(){

        let txtAssunto = document.querySelector("#txtAssunto")
        if(assunto.value.length >= 100){
            txtAssunto.innerHTML = "Texto é muito grande digite no máximo 100 caracteres"
            txtAssunto.style.color = "red"
            txtAssunto.style.display = "block"
         }else{
            txtAssunto.innerHTML = "Texto Válido"
            txtAssunto.style.display = "none"
            assuntoOK = true
        }
    }

    function enviar() {
        if (nomeOk == true && emailOK == true && assuntoOK == true){
            alert ('Formulário enviado com sucesso !')
        } else {
        alert ('Preencha o formulário corretamente antes de enviar !')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
   
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}
