window.onload = function() {
    if (localStorage.getItem("ulogovanKorisnik") == null) {
        window.location.href = "login.html";
        return;
    }

    let korisnik = JSON.parse(localStorage.getItem("ulogovanKorisnik"));        
    $("#imeNaslov").append(korisnik.ime);
    $("#ime").append(korisnik.ime);
    $("#prezime").append(korisnik.prezime);
    $("#email").append(korisnik.email);
    $("#telefon").append(korisnik.telefon)
    $("#datumRodjenja").append(korisnik.datumRodjenja);
    if (korisnik.pol=="M") $("#pol").append("Muški");
    else $("#pol").append("Ženski");

    $("#slika").attr('src', korisnik.slika);

    
    let oglasi=JSON.parse(localStorage.getItem("oglasi"));
    for(let i=0; i<oglasi.length; i++){
        if(korisnik.email==oglasi[i].emailKorisnika){
            let row=$('<tr></tr>');
            let column=$('<td></td>').append('<p><b>Ime ljubimca: </b><label>'+ oglasi[i].ime +
            '</label><br><b>Opis: </b><label>'+ oglasi[i].opis+'</p><button class="btn btn-dark" onclick="obrisiOglas('+oglasi[i].id+')">Obriši oglas</button><hr>');
            $(row).append(column);
            $("#oglasi").append(row);
        }
    }

    let komentari=JSON.parse(localStorage.getItem("komentari"));
    for(let i=0; i<komentari.length; i++){
        if(korisnik.email==komentari[i].korisnik){
            let row=$('<tr></tr>');
            let idO=komentari[i].idOglasa;
            let nazivO="";
            for(let j=0; j<oglasi.length; j++){
                if(idO==oglasi[j].id) nazivO=oglasi[j].ime;
                break;
            }
            let column=$('<td></td>').append('<p><b>Ime oglasa: </b><label>'+ nazivO +
            '</label><br><b>Komentar: </b><label>'+ komentari[i].text+'</p><hr>');
            $(row).append(column);
            $("#komentari").append(row);
        }
    }
    

}

function odjaviSe() {
    localStorage.removeItem("ulogovanKorisnik");
    window.location.href = "login.html"
}

function obrisiOglas(id) {
    let oglasi=JSON.parse(localStorage.getItem("oglasi"));
    for(let i=0; i<oglasi.length; i++){
        if(id==oglasi[i].id){
            let index = oglasi.indexOf(oglasi[i]);
            oglasi.splice(index,1);
            break;
        }
    }
    localStorage.setItem("oglasi", JSON.stringify(oglasi));
    window.location.href = "mojNalog.html";
}