# Ukázka práce s knihovnou D3.js

Při práci ve VS Code je nutné nainstalovat extension Live Sever

## Jednotlivé kroky jsou rozděleny do samostatných commitů pro případné hledání chyb:
### [1) Instalace knihovny a příprava template grafu](https://github.com/frantisekmuzik/YWEK_D3/commit/206a0fbe5cc46cc20e45bfdfb604a4f7081bbd95)
- knihovna: https://d3js.org/
- instalace knihovny: https://d3js.org/getting-started#d3-in-vanilla-html
- ukázkový graf (zobrazí pouze osy): https://d3js.org/getting-started

![](/img/graf1.png)

### [2) Rozdělení JS a HTML souborů](https://github.com/frantisekmuzik/YWEK_D3/commit/ea29841e67628ce8a55b75541bc4c68c738c787e)
- vytvoření JS souboru, do kterého se přesune kód z HTML

### [3) Přidání přímo zadaných dat](https://github.com/frantisekmuzik/YWEK_D3/commit/f694b7d625e5622db3f8f09380e8fda81edf3cec)
- vytvoření matice dat (datum, hodnota)
- základní úprava os
- vykreslování hodnot grafu
- změna atributů grafu (barva apod.)

![](/img/graf2.png)

### [4) Import dat z csv](https://github.com/frantisekmuzik/YWEK_D3/commit/c04123e071413b69d25dce000aecf2435f40d9f6)
- stažení dat v XSLX z ČSÚ (ideální data -> rok, hodnota): https://vdb.czso.cz/vdbvo2/faces/cs/index.jsf?page=statistiky
- úprava v Excelu (ponechat pouze dva sloupce - datum, hodnota) a vyexportovat včetně záhlaví jako CSV s kódováním UTF-8
- import dat v kódu
- změna datového formátu vložených atributů

![](/img/graf3.png)

### [5) Vylepšení grafu](https://github.com/frantisekmuzik/YWEK_D3/commit/adbd009054ab82ebfc8026288efbc85471730544)
- přidání titulku a zdroje dat
- případná úprava os a jejich popisu

![](/img/graf4.png)

### [6) Interaktivita](https://github.com/frantisekmuzik/YWEK_D3/commit/c622dda4a6df87b6bffd8ee205cc8481d927d2ef)
- vytvoření interaktivity grafu
- základní úprava html - vytvoření nadpisu karty, head, body
- vytvoření stylu v html pro listening rectangle
- vytvoření indikátoru zobrazené hodnoty na linii grafu
- skrytí indikátoru zobrazené hodnoty po opuštění grafu ukazatelem myši

![](/img/graf5.png)

### 7) Pop-up
- vytvoření stylu v html pro pop-up
- přidání pop-upu s výpisem vybraných hodnot 
- skrytí pop-upu, pokud nejsou zjišťované hodnoty

# Užitečné odkazy
- styly v D3: http://www.d3noob.org/2014/02/styles-in-d3js.html
- tvary v D3: https://d3-graph-gallery.com/graph/shape.html
- atributy v D3: http://www.d3noob.org/2014/02/attributes-in-d3js.html