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
    let korisnici = JSON.parse(localStorage.getItem("korisniciEn"));
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
            alert("An account with these credentials already exists.")
            return;
        }
    }
    if (!/^.+@[a-z]+\.[a-z]{2,3}$/.test(mejl)) {
        alert("Email is invalid!");
        return;
    }
    if (!/^\w{8,}$/.test(lozinka) || !/\d/.test(lozinka) || !/[A-Z]/.test(lozinka) || !/[a-z]/.test(lozinka)) {
        alert("Password should contain at least one digit, one uppercase letter, one lowercase letter and at least 8 characters all together.");
        return;       
    }
    if (lozinka != potrvrdaLozinke) {
        alert("Password and confirmed password don't match!");
        return;    
    }
    if (!/^[A-Z][a-z]{2,}$/.test(ime)) {
        alert("First name should be longer that 2 characters and can contain only letters!");
        return;
    }
    if (!/^[A-Z][a-z]{2,}$/.test(prezime)) {
        alert("Last name should be longer that 2 characters and can contain only letters!");
        return;
    }
    if (!/^\d{7,}$/.test(telefon)) {
        alert("Phone number has to have only 7 or more numbers!");
        return;
    }
    let korisnik = {"email":mejl, "lozinka":lozinka, "ime":ime, "prezime":prezime, "pol":pol, "telefon":telefon, "datumRodjenja":datumRodjenja, "slika":slika};
    korisnici.push(korisnik);
    localStorage.setItem("korisniciEn", JSON.stringify(korisnici));
    alert("You have successfully signed in!");
    window.location.href = "login.html";
    

}