'use strict'

var form = document.querySelector("#formulario");

form.addEventListener('submit', function(){

    var nombre = document.querySelector("#nombre").value;
    var nom_style = document.querySelector("#nombre");
    
    var email = document.querySelector("#email").value;
    var ema_style = document.querySelector("#email");

    var asunto = document.querySelector("#asunto").value;
    var sub_style = document.querySelector("#asunto");

    if (nombre.trim() <= 0  || nombre.trim() == null || !isNaN(nombre)){
        document.querySelector("#error").innerHTML = "Error encontrado! Verifique los campos.";
        nom_style.style.border = "1px solid #cd0000";

    } else {
        document.querySelector("#error_nom").style.display = "none";
        nom_style.style.border = "1px solid #A0A0A0";
    }

    if (email.trim() <= 0  || email.trim() == null){
        document.querySelector("#error").innerHTML = "Error encontrado! Verifique los campos.";
        ema_style.style.border = "1px solid #cd0000";

    } else {
        document.querySelector("#error_nom").style.display = "none";
        ema_style.style.border = "1px solid #A0A0A0";
    }
    
    if (asunto.trim() <= 0  || asunto.trim() == null || asunto.length > 80) {
        document.querySelector("#error").innerHTML = "Error encontrado! Verifique los campos.";
        sub_style.style.border = "1px solid #cd0000";

    } else {
        document.querySelector("#error_nom").style.display = "none";
        sub_style.style.border = "1px solid #A0A0A0";
    }
    
});


