import path from "path";
import fs from "fs/promises"

const sciezka = path.join(import.meta.dirname, "zadania.json");
export const wczytaj = async ()=>{
    try{
        const tekst = await fs.readFile(sciezka, "utf-8");
        let tablica = JSON.parse(tekst)
        return tablica
    }
    catch(blad){
        if(blad.code==="ENOENT"){
            return []
        }
    }
}

export const zapisz = async (zadania) =>{
    fs.writeFile(sciezka, JSON.stringify(zadania, null, 2), "utf-8")
}
