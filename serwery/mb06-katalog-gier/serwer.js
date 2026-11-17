import express from "express";

const app = express();

app.get("/gry", (req, res)=>{
    res.send("Katalog gier planszowych2");
})

app.listen(3000, ()=>{
    console.log("Serwer aktywny na: http://localhost:3000")
})