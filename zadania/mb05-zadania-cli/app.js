import { wczytaj, zapisz } from "./magazyn.js";

const [, , komenda, argument] = process.argv;

switch (komenda) {
  case "lista": {
    const zadania = await wczytaj();

    if (zadania.length === 0) {
      console.log("Brak zadań.");
      break;
    }

    zadania.forEach((zadanie, index) => {
      const znacznik = zadanie.zrobione ? "x" : " ";
      console.log(`${index + 1}. [${znacznik}] ${zadanie.tekst}`);
    });
    break;
  }

  case "dodaj": {
    const tekst = argument?.trim();

    if (!tekst) {
      console.error("Błąd: podaj treść zadania.");
      break;
    }

    const zadania = await wczytaj();
    const nowe = [...zadania, { tekst, zrobione: false }];

    await zapisz(nowe);
    console.log(`Dodano zadanie: ${tekst}`);
    break;
  }

  case "zrobione": {
    const zadania = await wczytaj();
    const numer = Number(argument);

    if (!Number.isInteger(numer) || numer < 1 || numer > zadania.length) {
      console.error(
        `Błąd: podaj numer zadania od 1 do ${zadania.length}.`,
      );
      break;
    }

    const nowe = zadania.map((zadanie, i) =>
      i === numer - 1 ? { ...zadanie, zrobione: true } : zadanie,
    );

    await zapisz(nowe);
    console.log(`Oznaczono zadanie ${numer} jako zrobione.`);
    break;
  }
}
