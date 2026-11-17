# Katalog gier planszowych

Prosty serwer HTTP napisany w Node.js i Express. Aplikacja udostępnia katalog gier planszowych w formacie JSON, pozwala pobrać jedną grę, filtrować katalog oraz wyświetlić podstawowe statystyki.

## Uruchomienie

Wymagany jest zainstalowany Node.js.

```powershell
cd serwery/mb06-katalog-gier
npm install
npm run dev
```

Serwer działa pod adresem [http://localhost:3000](http://localhost:3000).

Do zwykłego uruchomienia bez automatycznego restartu można użyć:

```powershell
npm start
```

## Struktura projektu

```text
mb06-katalog-gier/
├── .gitignore        pliki pomijane przez Git
├── README.md         dokumentacja projektu
├── dane.js           dane katalogu gier
├── package.json      konfiguracja projektu i skrypty
├── package-lock.json zapis wersji zależności
└── serwer.js         trasy i uruchomienie serwera
```

## Trasy

| Metoda | Adres | Opis | Odpowiedź |
|---|---|---|---|
| GET | `/` | Strona powitalna z linkami do dostępnych tras | HTML |
| GET | `/gry` | Pełna lista gier | JSON |
| GET | `/gry/:id` | Gra o podanym numerze; kod 404, gdy nie istnieje | JSON |
| GET | `/szukaj?wydawca=&max=&gracze=` | Filtrowanie według wydawcy, maksymalnej ceny i minimalnej liczby graczy | JSON |
| GET | `/statystyki` | Liczba gier, średnia cena i nazwa najdroższej gry | JSON |

Parametry trasy `/szukaj` są opcjonalne i mogą być ze sobą łączone:

- `wydawca` — zwraca gry danego wydawcy bez rozróżniania wielkości liter,
- `max` — zwraca gry o cenie nie wyższej niż podana,
- `gracze` — zwraca gry przeznaczone dla co najmniej podanej liczby graczy.

Przykład:

```text
http://localhost:3000/szukaj?wydawca=Rebel&max=150&gracze=4
```

## Autor

Emix999
