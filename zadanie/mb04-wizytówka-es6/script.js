import lista from "./dane.js"
import { budujListe, filtrowanie, iloscUmiejetnosci, sredniaUmiejetnosci } from "./umiejetnosci.js"


const listaUmiejetnosc = document.querySelector("#lista-umijetnosci")

listaUmiejetnosc.innerHTML = budujListe(lista) 


document.getElementById("sredniPoziom").innerHTML = `${iloscUmiejetnosci(lista)} srednia: ${sredniaUmiejetnosci(lista)}`

//filtrowanie listy
document.getElementById("filtruj").addEventListener("click",()=>{
    listaUmiejetnosc.innerHTML = filtrowanie(lista, document.getElementById("filtrowanie").value)
})

//obsługa formularza
document.addEventListener("submit", ()=>{
    event.preventDefault()
    let inputy = document.querySelectorAll("input")
    if(inputy[0]==""||inputy[1]==""){
        document.getElementById("komunikat").textContent="brak emailu lub imienia"
        document.getElementById("komunikat").style.color="red"
    }
    else{
        document.getElementById("komunikat").textContent=`Udało się! imie to:${inputy[0].value} temat: ${inputy[2].value}`
        document.getElementById("komunikat").style.color="black"
    }
})
let iloscKliknienc=0
document.getElementById("klikniecia").textContent=`Liczba kliknięć: 0`

document.getElementById("licznik").addEventListener("click",()=>{
    iloscKliknienc++
    document.getElementById("klikniecia").textContent=`Liczba kliknięć: ${iloscKliknienc}`
})