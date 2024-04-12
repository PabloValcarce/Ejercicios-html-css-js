let segundos = Number(document.getElementById("segundos").value);

function iniciarAlarma() {
  let cuenta = setInterval(function () {
    if (segundos > 0) {
      segundos--;
      document.getElementById("contenido").innerHTML = segundos;
    }else{
        clearInterval(cuenta);
        ring();

    }
  }, 1000);
}


function ring(){

    let pantalla = document.createElement("div");
    pantalla.id = "alarmaDiv";
    pantalla.style.marginTop = "10%"
    pantalla.style.width = "80vw";
    pantalla.style.height = "80vh";
    pantalla.innerHTML =" APAGAR"
    pantalla.style.backgroundColor="red";
    pantalla.style.textAlign = "center";
    pantalla.style.alignItems = "center";
    pantalla.style.lineHeight = "80vh";
    pantalla.style.fontSize = "50px";

    document.body.appendChild(pantalla);

    pantalla.addEventListener("click", function() {
        // Eliminar el div al hacer clic en él
        this.parentNode.removeChild(this);
        document.getElementById("contenido").innerHTML = "";
      });

}


