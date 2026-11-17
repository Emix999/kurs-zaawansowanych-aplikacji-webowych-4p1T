import path from "path";
import fs from "fs/promises"

const sciezka = path.join(import.meta.dirname, "zadania.json");

/** wyczytuje dane z pliku zadania
 * @returns {Promise<Array<{tekst:string, zrobione:boolean}>>} Obiekt zadania z treścią i tym czy wykonane; pusta tablica jeśli nie ma pliku
*/
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
        throw blad;
    }
}
/**
 * 
 * @param {Array<{tekst:string, zrobione:boolean}>} zadania - zadania które chcemy zapisać do pliku
 */
export const zapisz = async (zadania) =>{
    await fs.writeFile(sciezka, JSON.stringify(zadania, null, 2), "utf-8")
}
