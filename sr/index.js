$(document).ready(function() {
    let zivotinje = JSON.parse(localStorage.getItem("zivotinje"));

    for(let i = 1; i <= 3; i++) {
        let zivotinja = zivotinje[zivotinje.length-i];
        let slika = zivotinja.img_src.split(",")[0];
        document.getElementById("slika_zivotinje"+i).src = slika;
        document.getElementById("ime_zivotinje"+i).innerHTML = zivotinja.ime;
        document.getElementById("opis_zivotinje"+i).innerHTML = zivotinja.opis;
        let btn = document.getElementById("pogledaj_profil_zivotinje"+i);
        btn.addEventListener("click", pogledajProfil);
        btn.param = zivotinja.id;
    }

    let oglasi = JSON.parse(localStorage.getItem("oglasi"));

    for(let i = 1; i <= 3; i++) {
        let oglas = oglasi[oglasi.length-i];
        document.getElementById("slika_oglas"+i).src = oglas.slika;
        document.getElementById("ime_oglas"+i).innerHTML = oglas.ime;
        document.getElementById("opis_oglas"+i).innerHTML = oglas.opis;
        document.getElementById("telefon_oglas"+i).innerHTML = oglas.telefon;
    }

    function pogledajProfil() {
        localStorage.setItem("zivotinjaProfil", JSON.stringify(this.param));
        window.location.href = "nalogZivotinja.html";
    }

});

let pocetneZivotinje = [
    {
        id: 1,
        ime: "Boni",
        opis: "Malo stene Zlatnog Retrivera",
        tezina: "4.5",
        godine: "0",
        tip: "0", //0=pas
        pol: "1", //1=zenski
        img_src: "../slike/boni1.jpg,../slike/boni2.jpg,../slike/boni3.jpg,../slike/boni4.jpg",    
        video_src: "../slike/boni1.mp4,../slike/boni2.mp4,../slike/boni3.mp4,../slike/boni4.mp4"
    },
    {
        id: 2,
        ime: "Dante",
        opis: "Umiljat, veseleo, voli malu decu",
        tezina: "26",
        godine: "3",
        tip: "0", 
        pol: "0", 
        img_src: "../slike/dante1.jpg,../slike/dante2.jpg,../slike/dante3.jpg,../slike/dante4.jpg",
        video_src: "../slike/dante1.mp4"           
    },
    {
        id: 3,
        ime: "Iskra",
        opis: "Medena, vesela, energicna",
        tezina: "10",
        godine: "2",
        tip: "0", 
        pol: "1", 
        img_src: "../slike/iskra1.jpg,../slike/iskra2.jpg,../slike/iskra3.jpg,../slike/iskra4.jpg",
        video_src: "../slike/iskra1.mp4,../slike/iskra2.mp4,../slike/iskra3.mp4"            
    },
    {
        id: 4,
        ime: "Cemir",
        opis: "Skoro nadjen, voli da jede i da se mazi",
        tezina: "5.5",
        godine: "2.5",
        tip: "1", //1=macka
        pol: "0", 
        img_src: "../slike/cemir1.jpg,../slike/cemir2.jpg,../slike/cemir3.jpg,../slike/cemir4.jpg",
        video_src: "../slike/cemir1.mp4,../slike/cemir2.mp4,../slike/cemir3.mp4"            
    },
    {
        id: 5,
        ime: "Princeza",
        opis: "Graciozna, cista, umiljata, stalno prede",
        tezina: "3",
        godine: "1",
        tip: "1", 
        pol: "1", 
        img_src: "../slike/princeza1.jpg,../slike/princeza2.jpg,../slike/princeza3.jpg,../slike/princeza4.jpg",
        video_src: "../slike/princeza1.mp4,../slike/princeza2.mp4,../slike/princeza3.mp4"            
    },
    {
        id: 6,
        ime: "Bobi",
        opis: "Pravi mali Garfild, cak mu je i narav slicna ",
        tezina: "5",
        godine: "1.5",
        tip: "1", 
        pol: "0", 
        img_src: "../slike/bobi1.jpg,../slike/bobi2.jpg,../slike/bobi3.jpg,../slike/bobi4.jpg",
        video_src: "../slike/bobi1.mp4,../slike/bobi2.mp4"            
    },
    {
        id: 7,
        ime: "Žika",
        opis: "Zanimljiv i pričljiv",
        tezina: "0.5",
        godine: "3",
        tip: "2", //2=ptica
        pol: "0", 
        img_src: "../slike/zika1.jpg,../slike/zika2.jpg,../slike/zika3.jpg,../slike/zika4.jpg",
        video_src: "../slike/zika1.mp4,../slike/zika2.mp4,../slike/zika3.mp4"            
    },
    {
        id: 8,
        ime: "Senka",
        opis: "Pravi ljubimac za ljude u stanu, tiha je i mirna",
        tezina: "0.7",
        godine: "2",
        tip: "2", 
        pol: "1", 
        img_src: "../slike/senka1.jpg,../slike/senka2.jpg,../slike/senka3.jpg,../slike/senka4.jpg",
        video_src: "../slike/senka1.mp4,../slike/senka2.mp4"            
    },
    {
        id: 9,
        ime: "Mile",
        opis: "Pravi papagaj iz crtaca, prica, peva, zanoveta",
        tezina: "0.45",
        godine: "4",
        tip: "2", 
        pol: "0", 
        img_src: "../slike/mile1.jpg,../slike/mile2.jpg,../slike/mile3.jpg,../slike/mile4.jpg",
        video_src: "../slike/mile1.mp4,../slike/mile2.mp4,../slike/mile3.mp4"            
    },

];

if(localStorage.getItem("zivotinje") == null) localStorage.setItem("zivotinje", JSON.stringify(pocetneZivotinje));

let pocetniOglasi=[
    {
        id : 1,
        emailKorisnika: "jjovana2408@gmail.com", 
        ime:"Kedža",
        opis:"Izgubljen žuti mačak, odaziva se na ime Kedža, ako ga je neko slucajno video neka pozove na broj. Hvala.",
        telefon:"0694710330",
        slika:"../slike/kedza.jpg"
    },
    {
        id : 2,
        emailKorisnika: "nana01@gmail.com", 
        ime:"Dafina",
        opis:"Izgubljena crna mačka, kod Kalenić pijace. Molim vas pomozite, hvala. Hvala.",
        telefon:"0605556979",
        slika:"../slike/dafina.jpg"
    },
    {
        id : 3,
        emailKorisnika: "anaradovana@gmail.com", 
        ime:"Dragoljub",
        opis:"Izgubljen pas rase bišon kod Trga Republike. Molim vas pomozite, hvala.",
        telefon:"0634710330",
        slika:"../slike/dragoljub.jpg"
    },
    {
        id : 4,
        emailKorisnika: "anaradovana@gmail.com", 
        ime:"Fifi",
        opis:"Izgubljen pas, odaziva se na ime Fifi. Ako je vidite, pozovite na broj 063470330",
        telefon:"0634710330",
        slika:"../slike/fifi.jpg"
    }
]

if(localStorage.getItem("oglasi") == null) localStorage.setItem("oglasi", JSON.stringify(pocetniOglasi));

let pocetniKomentari=[
    {
        korisnik: "anaradovana@gmail.com",
        text:"Mačak viđen kod Kalenić pijace negde oko 15h 03.07.2022.",
        idOglasa:"1",
        id:"1"  
    },
    {
        korisnik: "nana01@gmail.com",
        text:"Mačak viđen kod opštine Vračar pijace 03.07.2022.",
        idOglasa:"1",
        id:"2"
    },
]

if(localStorage.getItem("komentari") == null) localStorage.setItem("komentari", JSON.stringify(pocetniKomentari));

let pocetniKorisnici=[
    {
        email: "jjovana2408@gmail.com",
        lozinka:"jokaKoka00",
        ime:"Jovana",
        prezime:"Jaćimović",
        pol:"Z",
        telefon: "0694710330",
        datumRodjenja:"2000-11-10",
        slika:"../slike/jovana.jpeg"
    },
    {
        email: "anaradovana@gmail.com",
        lozinka:"Ana012001",
        ime:"Ana",
        prezime:"Radovanović",
        pol:"Z",
        telefon: "0634710330",
        datumRodjenja:"2001-01-29",
        slika:"../slike/ana.jpeg"
    },
    {
        email: "nana01@gmail.com",
        lozinka:"nanaMuu01",
        ime:"Nastasija",
        prezime:"Avramović",
        pol:"Z",
        telefon: "0605556979",
        datumRodjenja:"2001-02-04",
        slika:"../slike/nana.jpeg"
    }
]

if(localStorage.getItem("korisnici") == null) localStorage.setItem("korisnici", JSON.stringify(pocetniKorisnici));