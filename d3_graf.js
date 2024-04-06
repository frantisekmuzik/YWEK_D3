type="module" // Typ skriptu = modul -> např. proměnné jsou pouze lokální

// Určení velikosti grafu (hodnoty v px)
const width = 640;
const height = 400;

// Určení okrajů grafu -> vypadá lépe vizuálně (hodnoty v px)
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

// Přidání vymyšlených testovacích dat ve formátu datum, hodnoty
const data = [
    {datum: new Date("2020-01-01"), hodnota: 520},
    {datum: new Date("2022-07-01"), hodnota: 50},
    {datum: new Date("2023-01-01"), hodnota: 10},
    {datum: new Date("2021-01-01"), hodnota: 63},
    {datum: new Date("2020-08-12"), hodnota: 28},
    {datum: new Date("2028-01-01"), hodnota: 19}
];

// Výpis dat do konzole
console.log(data)

// Vytvoření osy X
const x = d3.scaleUtc()
    .domain(d3.extent(data, d => d.datum)) // Datový rozsah osy - nastavení automaticky dle dat
    .range([marginLeft, width - marginRight]); // Pixelový rozsah osy  

// Vytvoření osy Y
const y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.hodnota)) // Nastavení rozsahu automaticky dle dat
    .range([height - marginBottom, marginTop]);

// Vytvoření SVG, do kterého se graf vykreslí
const svg = d3.create("svg") // Vytvoření prvku s názvem svg -> ten následně voláme při jeho editaci
    .attr("width", width) // Určení šířky SVG
    .attr("height", height); // Určení výšky SVG

// Vložení osy X do SVG
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`) // Určení pozice osy X vůči SVG
    .call(d3.axisBottom(x)); 

// Vložení osy Y do SVG
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

// Vytvoření linie, která bude vykreslena
const linie = d3.line()
    .x( d => x(d.datum)) // Datum -> na ose X
    .y( d => y(d.hodnota)); // Hodnota -> na ose Y

// Vykreslení linie do SVG    
svg.append("path") 
    .datum(data) // Načtení dat k vykreslení
    .attr("fill","none") // Barva výplně vykresleného obrazce
    .attr("stroke","steelblue") // Barva vykreslené linie
    .attr("stroke-width", 3) // Tloušťka linie
    .style("stroke-dasharray", ("10,3")) // Čárkovaná linie, vzor čárkování určen číselně (čára, mezera)
    .attr("d", linie);

// Vložení SVG do připraveného containeru v divu (okazujeme se před id definované v divu)
container.append(svg.node());