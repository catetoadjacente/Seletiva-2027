let senha = document.getElementById("senha")

function mostrar_senha(){
    if(senha.type == "password"){
        senha.type = "text"
    }
    else {
        senha.type = "password"
    }
}