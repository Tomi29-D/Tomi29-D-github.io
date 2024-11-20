// Obtener la ventana de login
var modal = document.getElementById('abrirLogin');

// Cuando el usuario hace clic en cualquier lugar fuera del modal, se cierra la ventana
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//funcion login

function loguearse(){
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    
    if(user=="Tomi"&& pass=="12345"){
        window.location="./index1.html";
    }
    else{
        aler("usuario o contraseña incorrecta")
    }
}