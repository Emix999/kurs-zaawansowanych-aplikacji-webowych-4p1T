import express from "express";

const app = express();

app.get("/gry", (req, res)=>{
    res.send("Katalog gier planszowych");
})

app.listen(()=>{
    console.log("Serwer aktywny na: http://localhost:3000")
})