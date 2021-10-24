//Tuo esiin itsesyöttö kentän kun valitsee sen
function Itsesyöte() {
    var teksti = document.getElementById("tapahtuma");
    var piilo = document.getElementById("Itses")
    if (teksti.value == "Itse") {
        piilo.style.display = "block";
        document.getElementById("Itses").required = true;
    } else {
        piilo.style.display = "none";
    }
}

//Lisää tapahtuma nappia lisää taulukkoon kohtaan <tbody>
function insertRows() {
    var taulu = document.getElementById("taulu").getElementsByTagName('tbody')[0];
    var aika = document.getElementById("num");
    var tph = document.getElementById("tapahtuma");
    var piilo = document.getElementById("Itses");
    var kat = document.getElementById("kategori");
    //Checkaa tyhjän ajan ja varoittaa jos tosi
    if (aika.value == null || aika.value <= 0) {
        alert("Syötä aika!");
        aika.style.borderColor = "red";
    } else {
        aika.style.borderColor = "gray";
        //Lisää taulu ja rivit ja solut
        var rivi = taulu.insertRow(-1);
        var solu1 = rivi.insertCell(0);
        var solu2 = rivi.insertCell(1);
        var solu3 = rivi.insertCell(2);
        var solu4 = rivi.insertCell(3);
        solu1.innerHTML = aika.value;
        //Alhaalla solun 2 tekstikenttä mahdollisuus jos se se on valittu ja jotain kirjoitettu
        if (piilo.value != "") {
            solu2.innerHTML = piilo.value;
        } else {
            solu2.innerHTML = tph.value;
        }
        solu3.innerHTML = kat.value;
        solu3.classList.add(kat.value);
        solu4.innerHTML = "<button onclick='poisto(this)'>poista</button>";
    }
}

//poistaa rivin
function poisto(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("taulu").deleteRow(i);
}

//Kategorioittain piilotellaan/näytetään
function näytäKaikki() {
    var rivi = document.getElementById("tbodyid").getElementsByTagName("tr");    
    for (let i=0; i <rivi.length; i++) {
        rivi[i].style.display = "";
    }
}
function piilotaAOpiskelu() {
    var rivi = document.getElementById("tbodyid").getElementsByTagName("tr");
    for (let i=0; i<rivi.length; i++) {
        if (rivi[i].getElementsByClassName("Opiskelu") != true) {
        rivi[i].style.display = "none";
        }
    }
}
function piilotaATyö() {

}
function piilotaATreeni() {

}
function piilotaAMuu() {

}

//Tallentaa taulukon local storageen, josta window.onload voi lukea
function tallennus() {
    var tauluTieto = document.getElementById("taulu");
    localStorage.setItem("data", tauluTieto.innerHTML);
}

//Poistaa localStoragen
function terminoi() {
    localStorage.clear();
    var Parent = document.getElementById("tbodyid");
    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }
}

//kun sivu latautuu, tuodaan localstoragessa oleva taulu esiin
window.onload = function () {
    var taulu = document.getElementById("taulu");
    //if checkkaa onko localstoragesa mitään, jos ei, latautuu index.html sellaisenaan.
    if (localStorage.length > 0) {
        taulu.innerHTML = localStorage.getItem("data");
    }
}