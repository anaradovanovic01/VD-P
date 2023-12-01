function ulogujSe() {
    let korisnici = JSON.parse(localStorage.getItem("korisnici"));
    if(korisnici == null) korisnici = [];
    let mejl = document.getElementById("email").value;
    let lozinka = document.getElementById("password").value;
    if(mejl=="" || lozinka=="") {alert("Morate uneti sve podatke."); return}
    for(let i=0; i<korisnici.length; i++) {
        if(mejl == korisnici[i].email && lozinka == korisnici[i].lozinka) {
            localStorage.setItem("ulogovanKorisnik", JSON.stringify(korisnici[i]));
            window.location.href = "mojNalog.html";
            return;
        }
    }
    alert("Ne postoji nalog sa unetim podacima.")
}