type="module" // Typ skriptu = modul -> např. proměnné jsou pouze lokální

// Určení velikosti grafu (hodnoty v px)
const width = 640;
const height = 400;

// Určení okrajů grafu -> vypadá lépe vizuálně (hodnoty v px)
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

// Vytvoření osy X
const x = d3.scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")]) // Datový rozsah osy 
    .range([marginLeft, width - marginRight]); // Pixelový rozsah osy  

// Vytvoření osy Y
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

// Vytvoření SVG, do kterého se graf vykreslí
const svg = d3.create("svg")
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

// Vložení SVG do připraveného containeru v divu (okazujeme se před id definované v divu)
container.append(svg.node());