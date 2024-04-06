# Ukázka práce s knihovnou D3.js

## Jednotlivé kroky jsou rozděleny do samostatných commitů pro případné hledání chyb:
### 1) Instalace knihovny a příprava template grafu
- knihovna: https://d3js.org/
- instalace knihovny: https://d3js.org/getting-started#d3-in-vanilla-html
- ukázkový graf (zobrazí pouze osy): https://d3js.org/getting-started

### 2) Rozdělení JS a HTML souborů
- vytvoření JS souboru, do kterého se přesune kód z HTML

### 3) Přidání přímo zadaných dat
- vytvoření matice dat (datum, hodnota)
- základní úprava os
- vykreslování hodnot grafu
- změna atributů grafu (barva apod.)

### 4) Import dat z csv
- stažení dat z ČSÚ (ideální data -> rok, hodnota): https://vdb.czso.cz/vdbvo2/faces/cs/index.jsf?page=statistiky
- import dat v kódu
- změna datového formátu vložených atributů

### 5) Vylepšení graafu
- přidání titulku a zdroje dat
- případná úprava os a jejich popisu

### 6) Interaktivita
- vytvoření interaktivity grafu
- přidání pop-upu s výpisem vybraných hodnot
- skrytí pop-upu, pokud nejsou zjišťované hodnoty
