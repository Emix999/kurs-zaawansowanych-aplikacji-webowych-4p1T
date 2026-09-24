let lista = ["matma","progrmowanie","granie","czytanie","gotowanie"]
let listaUmiejetnosc = document.querySelector("#lista-umijetnosci")
for(el of lista){
    let element = document.createElement("li");
    element.textContent = el
    listaUmiejetnosc.appendChild(element)
}
document.addEventListener("submit", ()=>{
    event.preventDefault()
    inputy = document.querySelectorAll("input")
    if(inputy[0]==""||inputy[1]==""){
        document.getElementById("komunikat").textContent("brak emailu lub imienia")
        document.getElementById("komunikat").style.color="red"
    }
    else{
        document.getElementById("komunikat").textContent(`Udało się! imie to:${inputy[0]} temat: ${inputy[2]}`)
        document.getElementById("komunikat").style.color="black"
    }
}) 