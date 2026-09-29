export const budujListe = (lista)=>{
    return lista.map(({nazwa, poziom})=> `<li>${nazwa} ${poziom}</li>`).join("")
}

export const iloscUmiejetnosci = (lista)=>{
    return lista.reduce(x => x+=1, 0)
}

export const sredniaUmiejetnosci = (lista)=>{
    return (lista.reduce((suma, {poziom}) => suma+=poziom, 0))/(iloscUmiejetnosci(lista))
}

export const filtrowanie = (lista, wartosc)=>{
    if(wartosc==="wszystkie")return lista.map(({nazwa, poziom})=> `<li>${nazwa} ${poziom}</li>`).join("");
    return lista
            .filter(({kategoria})=>kategoria===wartosc)
            .map(({nazwa, poziom})=> `<li>${nazwa} ${poziom}</li>`).join("")

}