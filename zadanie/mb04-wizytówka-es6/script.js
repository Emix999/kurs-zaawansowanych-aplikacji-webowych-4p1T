const lista = [
    { nazwa: "HTML", poziom: 4, kategoria: "frontend" },
    { nazwa: "CSS", poziom: 4, kategoria: "frontend" },
    { nazwa: "JavaScript", poziom: 4, kategoria: "frontend" },
    { nazwa: "SQL", poziom: 4, kategoria: "backend" },
    { nazwa: "Git", poziom: 1, kategoria: "narzedzia" },
    { nazwa: "Node.js", poziom: 2, kategoria: "backend" }
]
let listaUmiejetnosc = document.querySelector("#lista-umijetnosci")
for(let el of lista){
    let element = document.createElement("li");
    element.textContent = el
    listaUmiejetnosc.appendChild(element)
}
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