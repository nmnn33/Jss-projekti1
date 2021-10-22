//Tuo esiin itsesyöttö kentän kun valitsee sen
function Itsesyöte() {
    var teksti = document.getElementById("tapahtuma");
    var piilo = document.getElementById("Itses")
    if (teksti.value == "Itse") {
        piilo.style.display = "block";
        document.getElementById("itses").required = true;
    }  else {
        piilo.style.display = "none";
    }
}

//Lisää tapahtuma nappia lisää taulukkoon
function insertRows() { 
    var taulu = document.getElementById("taulu");
    var aika = document.getElementById("num"); 
    if (aika.value == null || aika.value <= 0) {
        alert("Syötä aika!");
        aika.style.borderColor= "red";
    } else {
    aika.style.borderColor= "gray";
    var rivi = taulu.insertRow(-1);
    var solu1 = rivi.insertCell(0);
    var solu2 = rivi.insertCell(1);
    var solu3 = rivi.insertCell(2);
    var solu4 = rivi.insertCell(3);
    solu1.innerHTML = document.getElementById("num").value; 
    solu2.innerHTML = document.getElementById("tapahtuma").value;
    solu3.innerHTML = document.getElementById("kategori").value;
    solu4.innerHTML = "<button onclick='poisto(this)'>poista</button>";
    }
}

//poistaa rivin
function poisto(r) {
    var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("taulu").deleteRow(i);
}