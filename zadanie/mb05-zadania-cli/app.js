import { zapisz, wczytaj } from "./magazyn.js";

const [, , komenda, argument] = process.argv;
console.log("Komenda: ", komenda)
console.log("Argument: ", argument)

switch (komenda){
    case "lista":
        const tab = await wczytaj();
        if(!tab)console.log("brak zadań");
        else{
            let i=0;
            let tekst = tab.map((el)=>{
                i++
                return `${i}. [ ] ${el}`
            }).join("\n")
            console.log(tekst)
        }
}