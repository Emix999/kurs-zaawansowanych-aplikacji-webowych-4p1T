# Serwer katalogu gier planszowych

Serwer Express udostępnia katalog gier planszowych jako stronę HTML i dane JSON. Pozwala pobrać pełną listę, jedną grę, filtrować katalog oraz wyświetlić statystyki.

## Uruchomienie

Po sklonowaniu repozytorium zainstaluj zależności:

```bash
npm install
```

Uruchomienie standardowe:

```bash
npm start
```

Uruchomienie deweloperskie z automatycznym restartem:

```bash
npm run dev
```

Serwer działa pod adresem <http://localhost:3000>.

## Struktura projektu

```text
mb06-katalog-gier/
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
├── serwer.js
└── dane.js
```

- `serwer.js` — trasy i uruchomienie serwera.
- `dane.js` — katalog gier wbudowany w aplikację.

## Trasy

| Metoda | Adres | Opis | Odpowiedź |
|---|---|---|---|
| GET | `/` | strona powitalna z linkami | HTML |
| GET | `/gry` | pełna lista gier | JSON |
| GET | `/gry/:id` | jedna gra; 404, gdy numer nie istnieje | JSON |
| GET | `/szukaj?wydawca=&max=&gracze=` | filtrowanie po wydawcy, cenie maksymalnej i liczbie graczy | JSON |
| GET | `/statystyki` | liczba gier, średnia cena i najdroższa gra | JSON |

## Autor

Emix999
