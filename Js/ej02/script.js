
let colores= ["red","green","yellow","orange"];
let indice  =0;
let contenido = document.getElementById("contenido");

function cambio(){

    contenido.style.backgroundColor= colores[indice];
    
    indice = (indice + 1) % colores.length;

}

setInterval(cambio,1000);