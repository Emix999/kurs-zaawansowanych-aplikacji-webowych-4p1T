let lista = ["matma","progrmowanie","granie","czytanie","gotowanie"]
let listaUmiejetnosc = document.querySelector("#lista-umijetnosci")
for(el of lista){
    let element = document.createElement("li");
    element.textContent = el
    listaUmiejetnosc.appendChild(element)
}