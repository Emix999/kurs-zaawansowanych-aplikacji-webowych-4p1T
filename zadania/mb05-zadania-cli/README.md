# Lista zadań w konsoli

Program w Node.js do zarządzania listą zadań z poziomu terminala. Pozwala wyświetlać i dodawać zadania oraz oznaczać je jako wykonane. Dane zapisuje w pliku `zadania.json`, dzięki czemu pozostają dostępne po zakończeniu programu.

## Struktura projektu

| Plik | Zawartość |
|---|---|
| `app.js` | obsługa komend z terminala |
| `magazyn.js` | odczyt i zapis pliku z danymi |
| `package.json` | konfiguracja projektu i skrypty npm |
| `.gitignore` | pomijanie pliku z danymi użytkownika |
| `zadania.json` | dane użytkownika; powstaje przy pierwszym zapisie |

## Skrypty

| Polecenie | Działanie |
|---|---|
| `npm run lista` | wypisuje wszystkie zadania |
| `npm run dodaj -- "tekst"` | dodaje nowe zadanie |
| `npm run zrobione -- 2` | oznacza zadanie o podanym numerze jako wykonane |

Podwójny myślnik `--` oddziela opcje npm od argumentów przekazywanych do programu.
