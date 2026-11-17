import { zapisz, wczytaj } from "./magazyn.js";

const [, , komenda, argument] = process.argv;
console.log("Komenda: ", komenda)
console.log("Argument: ", argument)

switch (komenda){
    case "lista":
        const tab = await wczytaj();
        if(tab.length===0)console.log("brak zadań");
        else{
            let i=0;
            let tekst = tab.map(({tekst:tekst, zrobione:zrobione})=>{
                i++
                return zrobione?`${i}. [x] ${tekst}`:`${i}. [ ] ${tekst}`
            }).join("\n")
            console.log(tekst)
        }
        break;
    case "dodaj":
        if(!argument)throw new Error("Brak zadania");
        const tab1 = await wczytaj();
        const newTab = [...tab1, {tekst:argument, zrobione:false}]
        zapisz(newTab)
        console.log("Udało się zapisać nowe zadanie")
        break;
    case "zrobione":
        const tab3 = await wczytaj();
        let nrZadania=Number(argument)
        console.log(nrZadania)
        if(nrZadania>=1 && nrZadania<=tab3.length){
            const nowaTab = tab3.map((zad, i)=>{
                return i===nrZadania-1?{...zad, zrobione:true}:zad
            })
            await zapisz(nowaTab);
        }
        else{
            throw new Error("Liczba z poza zakresu zadań");
        }
}