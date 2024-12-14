const Dblock = [[{symbol: "Sc" , atomic_no: 21},
    {symbol: "Ti", atomic_no: 22},
    {symbol: "V" , atomic_no: 23},
    {symbol: "cr", atomic_no: 24},
    {symbol: "Mn", atomic_no: 25},
    {symbol: "Fe", atomic_no: 26},
    {symbol: "Co", atomic_no: 27},
    {symbol: "Ni", atomic_no: 28},
    {symbol: "Cu", atomic_no: 29},
    {symbol: "Zn", atomic_no: 30}] ,
   [{symbol: "y", atomic_no: 39},
    {symbol: "Zr", atomic_no: 40},
    {symbol: "Nb", atomic_no: 41},
    {symbol: "Mo", atomic_no: 42},
    {symbol: "Tc", atomic_no: 43},
    {symbol: "Ru", atomic_no: 44},
    {symbol: "Rh", atomic_no: 45},
    {symbol: "Pd", atomic_no: 46},
    {symbol: "Ag", atomic_no: 47},
    {symbol: "Cd", atomic_no: 48}],
   [{symbol: "La", atomic_no: 57},
    {symbol: "Hf", atomic_no: 72},
    {symbol: "Ta", atomic_no: 73},
    {symbol: "W", atomic_no: 74},
    {symbol: "Re", atomic_no: 75},
    {symbol: "Os", atomic_no: 76},
    {symbol: "Ir", atomic_no: 77},
    {symbol: "Pt", atomic_no: 78},
    {symbol: "Au", atomic_no: 79},
    {symbol: "Hg", atomic_no: 80}],
   [{symbol: "Ac", atomic_no: 89},
    {symbol: "Rf", atomic_no: 104},
    {symbol: "Db", atomic_no: 105},
    {symbol: "Sg", atomic_no: 106},
    {symbol: "Bh", atomic_no: 107},
    {symbol: "Hs", atomic_no: 108},
    {symbol: "Mt", atomic_no: 109},
    {symbol: "Ds", atomic_no: 110},
    {symbol: "Rg", atomic_no: 111},
    {symbol: "Cn", atomic_no: 112}]]


const table = document.getElementById("dblock-table");


for (const row of Dblock) {
const tr = document.createElement("tr"); 

for (const element of row) {
const td = document.createElement("td"); 
td.innerHTML = `<strong>${element.symbol}</strong><br>(${element.atomic_no})`; 
tr.appendChild(td); 
}

table.appendChild(tr); 
}


