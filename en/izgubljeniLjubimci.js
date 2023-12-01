$(document).ready(function() {

    let oglasi = JSON.parse(localStorage.getItem("oglasiEn"));
    let komentari = JSON.parse(localStorage.getItem("komentariEn"));
    izlistajOglase();

    function izlistajOglase(){
        for(let i=0; i< oglasi.length; i++){
            let firstdiv=$('<div class="card mb-3 oglasi"></div>')
            let rowdiv=$('<div class="row g-0"></div>');
            let photodiv=$('<div class="col-md-3"></div>');
            let image=$('<img src="'+oglasi[i].slika+'" class="img-fluid rounded-start img-in-card">');
            $(photodiv).append(image);
            let text=$('<div class="col-md-5"></div>');
            let cardbody=$('<div class="card-body"></div>');
            $(cardbody).append('<h5 class="card-title oglas_'+ oglasi[i].id+'">' + oglasi[i].ime +'</h5>');
            paragraf=$('<p class="card-text oglas_'+ oglasi[i].id+'"><b>Description: </b><label>'+ oglasi[i].opis +
            '</label><br><b>Phone number: </b>' + oglasi[i].telefon + '<br></p>');
            $(cardbody).append(paragraf);
            let download = $("<br><button class='btn btn-dark'>Download PDF</button>");
                $(download).click(function() {
                    let doc = new jsPDF();
                    let elements = $(".oglas_" + oglasi[i].id);
                    doc.fromHTML($(elements[0]).get(0), 20, 20, {'width':150});
                    doc.fromHTML($(elements[1]).get(0), 20, 40, {'width':150});
                    doc.save('download.pdf');
                });
            $(cardbody).append(download);
            $(text).append(cardbody);
            let column3=$('<div class="col-md-4"></div>');
            $(column3).append('<div><br><b>Add comment</b><br><textarea cols="40" rows="3" id="kom_' + oglasi[i].id + '"></textarea><br><button class="btn btn-dark dodaj_kom" id="' + oglasi[i].id + '">Add</button></div>');
            $(rowdiv).append(photodiv);
            $(rowdiv).append(text);
            $(rowdiv).append(column3);
            let rowdiv2=$('<div class="row g-0 mt-1 mb-4 mx-3"></div>');
            let column1=$('<div class="col-md-8"><h5>Comments:</h5></div>');
            let table = $("<table class='table-striped table-light'></table>");
            let nemaKomentara = true;
            for (let j = 0; j < komentari.length; j++) {
                if (komentari[j].idOglasa == oglasi[i].id) {
                    nemaKomentara = false;
                    let tr = $("<tr></tr>");
                    let email=komentari[j].korisnik;
                    let korisnik=dohvatiKorisnikaPoEmailu(email);
                    $(tr).append("<th class='align-top'>"+ korisnik.ime + ' '+ korisnik.prezime + ": &nbsp</th>");
                    $(tr).append("<td>"+ komentari[j].text +"</td>");
                    $(table).append(tr);
                }
            }
            if(nemaKomentara == true) {
                let tr = $("<tr></tr>");
                $(tr).append("<td colspan='2'>There are no comments for this ad.</td>");
                $(table).append(tr);
            } 
            $(column1).append(table);
            $(rowdiv2).append(column1);
            $(firstdiv).append(rowdiv);
            $(firstdiv).append(rowdiv2);
            $('#lista').append(firstdiv);
        }
    }

    $(".dodaj_kom").click(function() {
        if (localStorage.getItem("ulogovanKorisnik") == null) {
            window.location.href = "login.html";
            return;
        }
        let oglas = $(this).attr("id");
        let komentar_tekst = $("#kom_" + oglas).val();
        if (/$^/.test(komentar_tekst)) {
            alert("Empty comment");
            return;
        }
        let ulogovan=JSON.parse(localStorage.getItem("ulogovanKorisnik"));
        let poslednjiKomentar = parseInt(komentari[komentari.length-1].id)+1;
        komentari.push({
            korisnik: ulogovan.email,
            text: komentar_tekst,
            idOglasa: oglas,
            id: poslednjiKomentar
        });
        alert("You have successfully added an comment!");
        localStorage.setItem("komentariEn", JSON.stringify(komentari));
        location.reload();
    });

    function dohvatiKorisnikaPoEmailu(email){
        korisnici=JSON.parse(localStorage.getItem("korisniciEn"));
        for(let i=0; i< korisnici.length; i++){
            if(email==korisnici[i].email) return korisnici[i];
        }
    }

    
});