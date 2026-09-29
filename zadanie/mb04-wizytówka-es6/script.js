const lista = [
    { nazwa: "HTML", poziom: 4, kategoria: "frontend" },
    { nazwa: "CSS", poziom: 4, kategoria: "frontend" },
    { nazwa: "JavaScript", poziom: 4, kategoria: "frontend" },
    { nazwa: "SQL", poziom: 4, kategoria: "backend" },
    { nazwa: "Git", poziom: 1, kategoria: "narzędzia" },
    { nazwa: "Node.js", poziom: 2, kategoria: "backend" }
]
const listaUmiejetnosc = document.querySelector("#lista-umijetnosci")
listaUmiejetnosc.innerHTML = lista
    .map(({nazwa, poziom})=> `<li>${nazwa} ${poziom}</li>`).join("")

//obsługa podsumowania listy
let iloscUmiejetnosci = lista
    .reduce(x => x+=1, 0)

let sumaPoziomow = lista
    .reduce((suma, {poziom}) => suma+=poziom, 0)

document.getElementById("sredniPoziom").innerHTML = `Umiejętności: ${iloscUmiejetnosci} śrendi poziom: ${Math.round(sumaPoziomow/iloscUmiejetnosci)}`

//filtrowanie listy
document.getElementById("filtruj").addEventListener("click",()=>{
    let wartosc = document.getElementById("filtrowanie").value
    if(wartosc==="wszystkie")listaUmiejetnosc.innerHTML = lista.map(({nazwa, poziom})=> `<li>${nazwa} ${poziom}</li>`).join("");
    else{
        listaUmiejetnosc.innerHTML = lista
            .filter(({kategoria})=>kategoria===wartosc)
            .map(({nazwa, poziom})=> `<li>${nazwa} ${poziom}</li>`).join("")
    }

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