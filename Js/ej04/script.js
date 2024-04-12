function hora(){

    document.getElementById("contenido").innerHTML = Date.now();

}

setInterval(hora,1000);