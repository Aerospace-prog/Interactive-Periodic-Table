const table = document.getElementById("periodic-table");

function renderTable(elements) {
  // why need to clear table content before displaying.
  //because if we don't clear the table content then the search result will be appended to th
  table.innerHTML = "";

  // yaha se s,p,d block elements render hoga
  elements.forEach((rowData) => {
    const row = document.createElement("tr");

    rowData.forEach((cellData) => {
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

  // yaha se f block elements render hoga
  //This fblock loop iterates 2 times (first - lanthanides , second - actinides)
  fBlock.forEach((block) => {
    const row = document.createElement("tr");
    const labelcell = document.createElement("td");
    labelcell.colSpan = 3;
    labelcell.classList.add("f-block-label");
    labelcell.textContent = block.label;
    row.appendChild(labelcell);

    //this loop iterates 14 times (for each element in the f block)
    block.elements.forEach((element) => {
      const cell = document.createElement("td");
      cell.classList.add("element", "f-block");
      cell.innerHTML = `<strong>${element.symbol}</strong><span class="atomic-no">${element.atomicNo}</span>`;
      row.appendChild(cell);
    });

    table.appendChild(row);
  });
}
//render table function ends here

//Search function starts
function searchElement(event) {
  event.preventDefault(); 
  //trims the whitespace ,convert into lower case for case insensitive search
  const searchTerm = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();

 // Show an alert if the input is empty 
  if (!searchTerm) {
    alert("Please enter a search term."); 
    return;
  }

  // Display the button
  document.querySelector('.show-table-btn').style.display = 'block';

  //calling the function for tracking when search button clicked
  tracksSearchHistory();

  // why need to clear table content before displaying.
  //because if we don't clear the table content then the search result will be appended to th
  table.innerHTML = "";

  //why created set here not else for storing
  //because set is faster than array for storing unique elements and to display only unique elements
  const uniqueElements = new Set();

  //checks the matched elements when searched by the user.
  periodicTable.forEach((row) => {
    row.forEach((element) => {
      if (element) {
        const matchesSymbol = element.symbol.toLowerCase().includes(searchTerm);
        const matchesAtomicNo = element.atomicNo.toString().includes(searchTerm);

        //if the element matches the search term then add it to the set
        //json stringify kyu use kiya:
        //because json.stringify() returns a string of the elements in the set
        if (matchesSymbol || matchesAtomicNo) {
          uniqueElements.add(JSON.stringify(element));
        }
      }
    });
  });

  // Check for matches in f-block elements
  fBlock.forEach((block) => {
    block.elements.forEach((element) => {
      const matchesSymbol = element.symbol.toLowerCase().includes(searchTerm);
      const matchesAtomicNo = element.atomicNo.toString().includes(searchTerm);

      if (matchesSymbol || matchesAtomicNo) {
        uniqueElements.add(JSON.stringify(element));
      }
    });
  });

  //why we need to convert the set back to array
  //because set is not iterable and we can't use it in for loop
  //here we will display all unique matched elments
  uniqueElements.forEach((elementStr) => {
    const element = JSON.parse(elementStr); // parse json string back into object
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.classList.add("element");
    cell.innerHTML = `<strong>${element.symbol}</strong><span class="atomic-no">${element.atomicNo}</span>`;
    row.appendChild(cell);
    table.appendChild(row);
  });

  //When result is not found then below will handle it
  if (uniqueElements.size === 0) {
    alert("No results : Enter a Valid Searchable content");
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 1;
    cell.textContent = "No results found.";
    cell.classList.add("no-results");
    row.appendChild(cell);
    table.appendChild(row);
  }
}
//Search function ends here

// calling kar rahe hai for rendering table function
renderTable(periodicTable);


//resetting the input box
function resetInput() {
  const searchInput = document.getElementById("search-input");
  searchInput.value = "";
}



//  saving the search history in localStorage
function tracksSearchHistory() {
  const searchInput = document.getElementById("search-input").value.trim();

  // Ignore empty input
  if (!searchInput) return;

  // Get existing search history from localStorage or create a new array
  const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

  // Add the search term only if it's unique
  if (!searchHistory.includes(searchInput)) {
    searchHistory.push(searchInput); // adds the input value

    // Limit the number of history items to 10 
    if (searchHistory.length > 10) {
      searchHistory.shift(); // used array methods - to remove the first element
    }

    // Save updated search history back to localStorage
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }

  // Update the sidebar with the new history
  displaySidebarHistory();
}

// Function to display search history in the sidebar
function displaySidebarHistory() {
  const historyList = document.getElementById("sidebar-history-list");
  const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

  // Clear the sidebar list before updating
  historyList.innerHTML = "";

  // Add each search term as a list item
  searchHistory.forEach((term) => {
    const listItem = document.createElement("li");
    listItem.textContent = term;
    listItem.classList.add("history-item");

    //when user clicks the particular history so we can use in input to search again
    listItem.onclick = () => {
      document.getElementById("search-input").value = term;
    };

    historyList.appendChild(listItem);
  });
}

// Function to toggle the visibility of the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("history-sidebar");
  
  if(sidebar.style.display === "block"){
    sidebar.style.display = "none";
  }else{
    sidebar.style.display = "block";
  }

  // Update the sidebar whenever it is opened
  if (sidebar.style.display === "block") {
    displaySidebarHistory();
  }
}

// Call this on page load to populate sidebar with existing history
displaySidebarHistory();

//After the show table btn clicked so making its display none
function btnDisplayNone(){
  document.querySelector('.show-table-btn').style.display = "none";
}