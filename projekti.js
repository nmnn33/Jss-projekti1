function Itsesyöte() {
    var teksti = document.getElementById("Tapahtuma");
    var piilo = document.getElementById("Itsesyöte")
    if (teksti.value == "Itse") {
        piilo.style.display = "block";
    }
}