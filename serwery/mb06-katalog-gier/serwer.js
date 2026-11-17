import express from "express";
import { gry } from "./dane.js";

const app = express();

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

app.get("/gry", (req, res)=>{
    res.json(gry);
})



app.listen(3000, ()=>{
    console.log("Serwer aktywny na: http://localhost:3000")
})