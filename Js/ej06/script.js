let imagenes = [
    "pez.jpg",
    "patricio.jpg",
    "calamardo.jpg",
    "gary.jpg",
    "bob.jpg"
];
function pintar(){
    let pantalla = document.getElementById("imagenes");

    if(pantalla.children.length<5){
        let imagen = document.createElement("img");
        imagen.style.width ="50px";
        imagen.style.height = "100px";
        let indice = pantalla.children.length;
        imagen.src = imagenes[indice];
        pantalla.appendChild(imagen);
    }else{
        alert("Fuera de limites");
    }

}
function eliminar() {

    let posicion = Number(document.getElementById("posicion").value);
    let contenedor = document.getElementById("imagenes");

    if (!isNaN(posicion) && posicion >= 1 && posicion <= contenedor.children.length) {
      contenedor.removeChild(contenedor.children[posicion - 1]);
    } else {
      alert("Por favor, introduce una posición válida");
    }
  }