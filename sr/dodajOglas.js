let slika = null;
$(document).ready(function() {
    let lastIndex;
    let oglasi = JSON.parse(localStorage.getItem("oglasi"));
    if(oglasi == null) {
        oglasi = [];
        lastIndex=0;
        localStorage.setItem("oglasi", JSON.stringify(oglasi));
    }
    else lastIndex=oglasi.length;

    document.querySelector("#slika").addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            slika = reader.result;
        })
        reader.readAsDataURL(this.files[0]);
    });

    document.querySelector("#dodajOglasDugme").addEventListener("click", dodajOglas);

    function dodajOglas() {
        let ulogovan=JSON.parse(localStorage.getItem("ulogovanKorisnik"));
        if (ulogovan == null) {
            window.location.href = "login.html";
            return;
        }
        let ime = document.getElementById("imeLjubimca").value;
        let opis = document.getElementById("opis").value;
        let telefon = document.getElementById("telefon").value;
        if(ime=="" || opis=="" || telefon=="" || slika==null) {alert("Morate uneti sve podatke."); return}
        if (!/^[A-Z][a-z]{2,}$/.test(ime)) {
            alert("Nevalidna vrednost polja ime!");
            return;
        }
        if (!/^\d{7,}$/.test(telefon)) {
            alert("Nevalidna vrednost polja kontakt telefon!");
            return;
        }
        let oglas = {"id" :lastIndex, "emailKorisnika": ulogovan.email, "ime":ime, "opis":opis, "telefon":telefon, "slika":slika};
        oglasi.push(oglas);
        localStorage.setItem("oglasi", JSON.stringify(oglasi));
        alert("Uspesno ste se dodali oglas.");
    }
});