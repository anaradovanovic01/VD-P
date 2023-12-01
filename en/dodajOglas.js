let slika = null;
$(document).ready(function() {
    let lastIndex;
    let oglasi = JSON.parse(localStorage.getItem("oglasiEn"));
    lastIndex=oglasi.length;

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
        if(ime=="" || opis=="" || telefon=="" || slika==null) {alert("You have to fill all the fields."); return}
        if (!/^[A-z]{2,}$/.test(ime)) {
            alert("Pet's name should be longer that 2 characters and can contain only letters!");
            return;
        }
        if (!/^\d{7,}$/.test(telefon)) {
            alert("Phone number has to have only 7 or more numbers!");
            return;
        }
        let oglas = {"id" :lastIndex, "emailKorisnika": ulogovan.email, "ime":ime, "opis":opis, "telefon":telefon, "slika":slika};
        oglasi.push(oglas);
        localStorage.setItem("oglasiEn", JSON.stringify(oglasi));
        alert("You have successfully added an ad.");
    }
});