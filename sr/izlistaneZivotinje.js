$(document).ready(function() {
    let zivotinje;
    if(localStorage.getItem("zivotinje") == null) {
        zivotinje = pocetneZivotinje; 
        localStorage.setItem("zivotinje", JSON.stringify(pocetneZivotinje));
    }
    else zivotinje = JSON.parse(localStorage.getItem("zivotinje"));
    izlistajZivotinje();

    function izlistajZivotinje(){
        for(let i=0; i< zivotinje.length; i++){
            if(zivotinje[i].tip!=document.getElementById('tipZivotinje').value) continue;
            let firstdiv=$('<div class="card mb-3 zivotinje"></div>')
            let rowdiv=$('<div class="row g-0"></div>');
            let photodiv=$('<div class="col-md-3"></div>');
            let srcString = zivotinje[i].img_src;
            let src=[];
            src = srcString.split(",");
            let image=$('<img src=" ' + src[0] + '" class="img-fluid rounded-start img-in-card">');
            $(photodiv).append(image);
            let text=$('<div class="col-md-9"></div>');
            let cardbody=$('<div class="card-body"></div>');
            $(cardbody).append('<h5 class="card-title">' + zivotinje[i].ime +'</h5>');
            paragraf=$('<p class="card-text"> Opis: <label>'+ zivotinje[i].opis +
            '</label><br>Godine: <label class="g">' + zivotinje[i].godine + '</label><br>Težina: ' + zivotinje[i].tezina + '<br></p>');
            $(cardbody).append(paragraf);
            $(text).append(cardbody);
            profil=$('<a> <button type="button" class="btn btn-dark profil" style="margin-left: 2.5%;" id="'+ zivotinje[i].id+'">Vidi profil</button></a>');
            $(text).append(profil);
            $(rowdiv).append(photodiv);
            $(rowdiv).append(text);
            $(firstdiv).append(rowdiv);
            $('#lista').append(firstdiv);
        }
    }

    $("#sortiraj").click(function() {
        let val = $('input[name="sort"]:checked').val();
        let opadajuce = $('#opadajuce').is(":checked");
        if (opadajuce) {
            if (val == 1) {
                zivotinje.sort(maksimum_godine);
            } else {
                zivotinje.sort(maksimum_naziv);
            }
        } else {
            if (val == 1) {
                zivotinje.sort(minimum_godine);
            } else {
                zivotinje.sort(minimum_naziv);
            }
        }
        $('div.zivotinje').remove();
        izlistajZivotinje();
    });

    function maksimum_godine(a, b) {
        return -(a.godine - b.godine);
    }

    function maksimum_naziv(a, b) {
        return -( ( a.ime == b.ime ) ? 0 : ( ( a.ime > b.ime ) ? 1 : -1 ) );
    }

    function minimum_godine(a, b) {
        return a.godine - b.godine;
    }

    function minimum_naziv(a, b) {
        return ( ( a.ime == b.ime ) ? 0 : ( ( a.ime > b.ime ) ? 1 : -1 ) );
    }

    $("#pretrazi").click(function () {
        let val = $('input[name="pretraga"]:checked').val();
        let krit = $("#polje_pretrage").val();
        let arr = $('div.zivotinje');
        for (let i = 0; i < arr.length; i++) {
            $(arr[i]).show();
        }
        krit = krit.toLowerCase();
        if (krit != "") {
            if(val==1) {
                for (let i = 0; i < arr.length; i++) {
                    let obj = $(arr[i]).find(".row").find(".col-md-9").find(".card-body").find(".card-text").find(".g");
                    let godine = obj[0].innerHTML;
                    if (godine!=krit) {
                        $(arr[i]).hide();
                    }
                }
            } 
            else {
                for (let i = 0; i < arr.length; i++) {
                    let obj = $(arr[i]).find(".row").find(".col-md-9").find(".card-body").find("h5");
                    let ime = $(obj).text();
                    ime = ime.toLowerCase();
                    if (!(ime.includes(krit))) {
                        $(arr[i]).hide();
                    }
                }
            }
        }
    });

    $(".profil").click(function(){
        let id=$(this).attr("id");
        localStorage.setItem("zivotinjaProfil",JSON.stringify(id));
        window.location.href = "nalogZivotinja.html";
    });

});
