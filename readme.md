# Kurs zaawansowanych aplikacji webowych

Repozytorium zawiera zadania wykonywane podczas kursu. Jednym z nich jest prosta aplikacja CLI do zarządzania listą zadań.

## Wymagania

- Node.js
- terminal (np. PowerShell)
- opcjonalnie Git i Visual Studio Code

## Uruchomienie aplikacji CLI

Przejdź do katalogu aplikacji:

```powershell
cd zadanie/mb05-zadania-cli
```

Aplikacja nie wymaga instalowania dodatkowych pakietów.

## Dostępne komendy

Wyświetlenie wszystkich zadań:

```powershell
node app.js lista
```

Dodanie nowego zadania:

```powershell
node app.js dodaj "Zrobić zakupy"
```

Oznaczenie zadania jako wykonanego (liczba oznacza pozycję na liście):

```powershell
node app.js zrobione 1
```

Przykładowy wynik komendy `lista`:

```text
1. [x] Zrobić zakupy
2. [ ] Posprzątać pokój
```

## Struktura aplikacji CLI

| Plik | Zawartość |
|---|---|
| `app.js` | Obsługa komend wpisywanych w terminalu |
| `magazyn.js` | Odczyt i zapis listy zadań |
| `zadania.json` | Dane aplikacji tworzone podczas jej działania |
| `package.json` | Podstawowe informacje o projekcie Node.js |

Każde zadanie jest zapisywane w formacie:

```json
{
  "tekst": "Zrobić zakupy",
  "zrobione": false
}
```

Plik `zadania.json` jest lokalnym magazynem danych i nie jest dodawany do repozytorium.

## Pozostałe zadania

- `zadanie/mb03-wizytówka` – prosta wizytówka przygotowana w HTML, CSS i JavaScript.
- `zadanie/mb05-zadania-cli` – lista zadań obsługiwana z poziomu terminala.