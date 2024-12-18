const table = document.getElementById("periodic-table");

function renderTable(elements) {
  table.innerHTML = ''; // Clear the table
  elements.forEach(rowData => {
    const row = document.createElement("tr");

    rowData.forEach(cellData => {
      const cell = document.createElement("td");

      if (cellData) {
        cell.classList.add("element");
        cell.innerHTML = `<strong>${cellData.symbol}</strong><span class="atomic-no">${cellData.atomicNo}</span>`;
      } else {
        cell.classList.add("empty");
      }

      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  // Render f-block elements
  fBlock.forEach(block => {
    const row = document.createElement("tr");
    const labelCell = document.createElement("td");
    labelCell.colSpan = 3; 
    labelCell.classList.add("f-block-label");
    labelCell.textContent = block.label;
    row.appendChild(labelCell);

    block.elements.forEach(element => {
      const cell = document.createElement("td");
      cell.classList.add("element", "f-block");
      cell.innerHTML = `<strong>${element.symbol}</strong><span class="atomic-no">${element.atomicNo}</span>`;
      row.appendChild(cell);
    });

    table.appendChild(row);
  });
}

function searchElement(event) {
  event.preventDefault(); 
  const searchTerm = document.getElementById("search-input").value.trim().toLowerCase();

  
  if (searchTerm === "") {
    return; 
  }

  
  table.innerHTML = '';

  
  const uniqueElements = new Set();

  //checks the matched elements with searched by the user.
  periodicTable.forEach(row => {
    row.forEach(element => {
      if (element) {
        const matchesSymbol = element.symbol.toLowerCase().includes(searchTerm);
        const matchesAtomicNo = element.atomicNo.toString().includes(searchTerm);

        if (matchesSymbol || matchesAtomicNo) {
          uniqueElements.add(JSON.stringify(element)); 
        }
      }
    });
  });

  // Check for matches in f-block elements
  fBlock.forEach(block => {
    block.elements.forEach(element => {
      const matchesSymbol = element.symbol.toLowerCase().includes(searchTerm);
      const matchesAtomicNo = element.atomicNo.toString().includes(searchTerm);

      if (matchesSymbol || matchesAtomicNo) {
        uniqueElements.add(JSON.stringify(element)); 
      }
    });
  });

  
  uniqueElements.forEach(elementStr => {
    const element = JSON.parse(elementStr);
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.classList.add("element");
    cell.innerHTML = `<strong>${element.symbol}</strong><span class="atomic-no">${element.atomicNo}</span>`;
    row.appendChild(cell);
    table.appendChild(row);
  });

  
  if (uniqueElements.size === 0) {
    alert("No results found for your search.");
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 1; 
    cell.textContent = "No results found.";
    cell.classList.add("no-results");
    row.appendChild(cell);
    table.appendChild(row);
  }
}
// calling kar rahe hai for rendering table function
renderTable(periodicTable);