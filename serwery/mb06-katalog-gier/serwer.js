import express from "express";
import { gry } from "./dane.js";

const app = express();

/** GET / — strona powitalna z listą dostępnych tras. */
app.get("/", (req, res) => {
 res.send(`
    <h1>Katalog gier planszowych</h1>
        <ul>
            <li><a href="/gry">/gry</a> — wszystkie gry</li>
            <li><a href="/gry/1">/gry/:id</a> — jedna gra</li>
            <li><a href="/szukaj?max=150">/szukaj</a> — wyszukiwanie</li>
            <li><a href="/statystyki">/statystyki</a> — podsumowanie</li>
        </ul>`);
});

/** GET /gry/:id — jedna gra o podanym numerze; 404, gdy gra nie istnieje. */
app.get("/gry/:id", (req, res)=>{
    const SzukaneId = req.params.id;
    const gra = gry.find((g)=>
        SzukaneId==g.id
    )
    if(!gra){
        res.status(404)
        res.json({blad:"Nie ma takiej gry"})
        return;
    }
    res.json(gra);
})

/** GET /szukaj?wydawca=&max=&gracze= — filtrowanie katalogu; brak parametrów zwraca całą listę. */
app.get("/szukaj", (req, res)=>{
    const {wydawca, max, gracze} = req.query;
    let wyszukaneGry = gry;
    if(wydawca)wyszukaneGry = gry.filter((gra)=>wydawca.toLowerCase()==gra.wydawca.toLowerCase())
    if(max)wyszukaneGry = wyszukaneGry.filter((gra)=>Number(gra.cena)<=Number(max));
    if(gracze)wyszukaneGry = wyszukaneGry.filter((gra)=>Number(gra.gracze)>=Number(gracze));
    res.json(wyszukaneGry)
})

/** GET /gry — pełna lista gier w katalogu. */
app.get("/gry", (req, res)=>{
    res.json(gry);
})

/** GET /statystyki — liczba gier, średnia cena i nazwa najdroższej gry. */
app.get("/statystyki", (req, res)=>{
    const liczbaGier = gry.length;
    let sumaCen = gry.reduce((suma, {cena})=>{
        return suma+=Number(cena)
    }, 0)
    sumaCen = Math.round((sumaCen/liczbaGier)*100)/100;
    let maks={nazwa:gry[0].nazwa, cena:gry[0].cena}
    for(const {nazwa, cena}of gry){
        if(cena>maks.cena)maks={nazwa, cena};
    }
    res.json({
        liczbaGier: liczbaGier, sredniaCena: sumaCen, najdrozsza:maks.nazwa
    })
})

app.listen(3000, ()=>{
    console.log("Serwer aktywny na: http://localhost:3000")
})
