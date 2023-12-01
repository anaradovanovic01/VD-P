let slika;
$(document).ready(function() {
    document.querySelector("#slika").addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            slika = reader.result;
        })
        reader.readAsDataURL(this.files[0]);
    });
});


function registrujSe() {
    let korisnici = JSON.parse(localStorage.getItem("korisnici"));
    let mejl = document.getElementById("email").value;
    let lozinka = document.getElementById("password").value;
    let potrvrdaLozinke = document.getElementById("confirmPassword").value;
    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;
    let pol = document.getElementById("muski").checked?'M':'Z';
    let telefon = document.getElementById("telefon").value;
    let datumRodjenja = document.getElementById("datumRodjenja").value;
    if(ime=="" || prezime=="" || telefon=="" || pol=="" || mejl=="" || lozinka=="" || potrvrdaLozinke=="" || datumRodjenja=="" || slika==null) {alert("Morate uneti sve podatke."); return}
    for(let i=0; i<korisnici.length; i++) {
        if(mejl == korisnici[i].email && lozinka == korisnici[i].lozinka) {
            alert("Već postoji nalog sa unetim podacima.")
            return;
        }
    }
    if (!/^.+@[a-z]+\.[a-z]{2,3}$/.test(mejl)) {
        alert("Nevalidna vrednost polja mejl!");
        return;
    }
    if (!/^\w{8,}$/.test(lozinka) || !/\d/.test(lozinka) || !/[A-Z]/.test(lozinka) || !/[a-z]/.test(lozinka)) {
        alert("Nevalidna vrednost polja lozinka!\nLozinka mora sadržati po bar jednu cifru, veliko i malo slovo i mora imati 8 karaktera.");
        return;       
    }
    if (lozinka != potrvrdaLozinke) {
        alert("Lozinka i potvrda lozinke se ne poklapaju!");
        return;    
    }
    if (!/^[A-Z][a-z]{2,}$/.test(ime)) {
        alert("Nevalidna vrednost polja ime!");
        return;
    }
    if (!/^[A-Z][a-z]{2,}$/.test(prezime)) {
        alert("Nevalidna vrednost polja prezime!");
        return;
    }
    if (!/^\d{7,}$/.test(telefon)) {
        alert("Nevalidna vrednost polja kontakt telefon!");
        return;
    }
    let korisnik = {"email":mejl, "lozinka":lozinka, "ime":ime, "prezime":prezime, "pol":pol, "telefon":telefon, "datumRodjenja":datumRodjenja, "slika":slika};
    korisnici.push(korisnik);
    localStorage.setItem("korisnici", JSON.stringify(korisnici));
    alert("Uspesno ste se registrovali!");
    window.location.href = "login.html";
    

}