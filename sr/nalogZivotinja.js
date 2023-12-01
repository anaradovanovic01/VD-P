$(document).ready(function() {
    let id=JSON.parse(localStorage.getItem("zivotinjaProfil"));
    let zivotinje = JSON.parse(localStorage.getItem("zivotinje"));
    let ime,opis,tezina,pol,godine,tip,img_src,video_src;

    for(let i=0; i < zivotinje.length ; i++){
        if(zivotinje[i].id==id){
            ime=zivotinje[i].ime;
            opis=zivotinje[i].opis;
            tezina=zivotinje[i].tezina;
            pol=zivotinje[i].pol;
            godine=zivotinje[i].godine;
            tip=zivotinje[i].tip;
            img_src=zivotinje[i].img_src;
            video_src=zivotinje[i].video_src;
            break;
        }
    }
    $("#imeNaslov").append(ime);
    $("#ime").append(ime);
    $("#opis").append(opis);
    $("#tezina").append(tezina);
    $("#godine").append(godine);
    if (pol=="0") $("#pol").append("Muški");
    else $("#pol").append("Ženski");

    let slike=img_src.split(",");
    $("#heder").append('<img src="'+ slike[0] +'" class="rounded-circle img-fluid" style="width: 200px; height: 200px;">');
    for(let i=0; i<slike.length; i++){
        $("#slike").append('<div id="div'+i+'" class="col-lg-6 my-2 pr-2 pl-2"><div><img onclick="povecajSliku('+i+')" src="'+slike[i]+'" class="img-fluid rounded shadow-sm slikeUGaleriji" style="width: 250px; height: 250px;"></div><div class="modal"> <span id="'+i+'" onclick="smanjiSliku('+i+')" class="close">x</span> <img src="'+slike[i]+'" class="modal-content"></div></div> ');
    }
    let videi=video_src.split(",");
    for(let i=0; i<videi.length; i++){
        $("#videi").append('<div class="col-lg-6 my-2 pr-2 pl-2"><video class="rounded" width="250" height="250" controls muted><source src="'+videi[i]+'" type="video/mp4">Ovaj pretraživač ne podržava video tag.</video></div> ');
    }
    let tip_innerHTML, tip_href;
    if(tip == 0) { tip_innerHTML = "Psi"; tip_href = "psi.html"; }
    else if(tip == 1) { tip_innerHTML = "Mačke"; tip_href = "macke.html"; }
    else { tip_innerHTML = "Ptice"; tip_href = "ptice.html"; }
    document.getElementById("ubaci-ime").innerHTML = ime;
    document.getElementById("ubaci-vrstu").innerHTML = tip_innerHTML;
    document.getElementById("ubaci-vrstu").href = tip_href;
});

function povecajSliku(id) {
    var div = document.getElementById("div"+id);
    var modalDiv = $(div).find("div")[1];
    modalDiv.style.display = "block";
}

function smanjiSliku(id) {
    var div = document.getElementById("div"+id);
    var modalDiv = $(div).find("div")[1];
    modalDiv.style.display = "none";
}
