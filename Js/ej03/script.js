function hora(){

    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();

    var horaFormateada =  hora + ":" + minuto + ":"  + segundo;

    document.getElementById("contenido").innerHTML = horaFormateada;



}

setInterval(hora,1000);