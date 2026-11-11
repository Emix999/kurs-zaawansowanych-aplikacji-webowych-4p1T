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
}
