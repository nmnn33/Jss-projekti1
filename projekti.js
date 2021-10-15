function Itsesyöte() {
    var teksti = document.getElementById("Tapahtuma");
    var piilo = document.getElementById("Itses")
    if (teksti.value == "Itse") {
        piilo.style.display = "block";
        document.getElementById("itses").required = true;
    } else {
        piilo.style.display = "none";
    }
}

function lisääYksi() {

}