// I HAVE ADDED CUSTOM NATIVE LANG - HINGLISH COMMENTS FOR BEGINNERS TO UNDERSTAND THE BELOW CODE BETTER


const table = document.getElementById("periodic-table");

function renderTable(elements) {
  // why need to clear table content before displaying.
  //because if we don't clear the table content then the search result will be appended to th
  table.innerHTML = "";


  const headerRow = document.createElement("tr");
  const groupNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  groupNumbers.forEach(group => {
    const th = document.createElement("th");
    th.textContent = group;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // yaha se s,p,d block elements render hoga
  elements.forEach((rowData) => {
    const row = document.createElement("tr");

    rowData.forEach((cellData) => {
      const cell = document.createElement("td");

      if (cellData) {
        cell.classList.add("element");
        cell.innerHTML = `<strong>${cellData.symbol}</strong><span class="atomic-no">${cellData.atomicNo}</span>`;

        //Here ham log cellData mai gradient property check kar rahe hai agar hai toh uska background color set kara hai
        if (cellData.color) {
          cell.style.background = cellData.color;
          cell.style.color = "black";
        }
        cell.onclick = () => openPopup(cellData);
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
      if (element.color) {
        cell.style.background = element.color;
        cell.style.color = "black";
      }
      cell.onclick = () => openPopup(element);
      row.appendChild(cell);
      //here ham log celldata(element) mai gradient property check kar rahe hai agar hai toh uska background color set kara hai
    });

    table.appendChild(row);
  });
}
//render table function ends here


//Search function starts
function searchElement(event) {
  event.preventDefault();
  //trims the whitespace ,convert into lower case for case insensitive search
  const searchTerm = document.getElementById("search-input").value.trim().toLowerCase();
  const stateFilter = document.getElementById("state-filter").value;
  const metallicCharacterFilter = document.getElementById("metallic-character-filter").value;


  // Display the button when clicked on search button
  
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

        //checking the state and metallic character filter
        const matchesState = stateFilter ? element.state === stateFilter : true;
        const matchesMetallicCharacter = metallicCharacterFilter ? element.metallicCharacter === metallicCharacterFilter : true;

        //if the element matches the search term then add it to the set
        //json stringify kyu use kiya:
        //because json.stringify() returns a string of the elements in the set
        if ((matchesSymbol || matchesAtomicNo) && matchesState && matchesMetallicCharacter) {
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

      //checking the state and metallic character filter
      const matchesState = stateFilter ? element.state === stateFilter : true;
      const matchesMetallicCharacter = metallicCharacterFilter ? element.metallicCharatcer === metallicCharacterFilter : true;

      if ((matchesSymbol || matchesAtomicNo)&& matchesState &&matchesMetallicCharacter) {
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
    
    //if the element matches the search term then set the background color in the searched window also
    if (element.symbol.toLowerCase().includes(searchTerm) || element.atomicNo.toString().includes(searchTerm)) {
      cell.style.background = element.color;
      cell.style.color = "black";
    }

    cell.innerHTML = `<strong>${element.symbol}</strong><span class="atomic-no">${element.atomicNo}</span>`;
    //niche wale lines user ko search result wale element par click karne par details popup mai show hoga
    cell.onclick = () => openPopup(element);

    row.appendChild(cell);
    table.appendChild(row);
  });

  //When result is not found then below will handle it
  if (uniqueElements.size === 0) {
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

// calling kar rahe hai for rendering table
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
  if (!searchInput) {
    return;
  }

  // Niche ham existing history mai se get karenge and if not availbale so empty array initialize karnge:-->
  //JSON.parse() is used to convert the string back into an object
  //localStorage.getItem() is used to get the value of the specified localStorage item
  //if the item doesn't exist, it will return null
  //if the item exists, it will return the value as a string
  const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

  // Add the search term only if it's unique
  if (!searchHistory.includes(searchInput)) {
    searchHistory.push(searchInput); // adds the input value

    // Limit the number of history items to 10 
    //if the search history is greater than 10 then remove the first element
    if (searchHistory.length > 10) {
      searchHistory.shift(); // used array methods - to remove the first element
    }

    // Save updated search history back to localStorage
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));// key mai ham string rakha and value mai array
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

    //Jab user kisi particular history item par click karega toh uska value search input box mai set ho jayega
    listItem.onclick = () => {
      document.getElementById("search-input").value = term;
    };

    // Here hamne history list (sidebar)  mai append kiya hai
    historyList.appendChild(listItem);
  });
}



// Function to toggle the visibility of the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("history-sidebar");

  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }

  // Update the sidebar whenever it is opened
  if (sidebar.style.display === "block") {
    displaySidebarHistory();
  }
}

// Calling kar rahe hai jisse update hojaye existing history
displaySidebarHistory();

//After the show table btn clicked so making its display none
function btnDisplayNone() {
  document.querySelector('.show-table-btn').style.display = "none";
}

// This function actually Clears the search history
function clearHistory() {
  localStorage.removeItem("searchHistory");
  displaySidebarHistory();
}


// Function to open the popup with element details
function openPopup(element) {
  const popup = document.getElementById("element-popup");
  const title = document.getElementById("element-title");
  const details = document.getElementById("element-details");

  title.textContent = `${element.symbol} (Atomic No: ${element.atomicNo})`;
  details.innerHTML = `<img src=${element.image} height="150px"> <br> <strong>${element.name}</strong> <br> <strong>Atomic Mass:</strong> ${element.atomicMass} `; 

  popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById("element-popup");
  popup.style.display = "none";
}

//This fucntion now will reset the filtered options
function resetFilters(){
  document.getElementById("state-filter").value = "";
  document.getElementById("metallic-character-filter").value = "";
}

// Function to open the help modal
//here i tried to make the help modal popup smooth transition
function openHelp() {
  const helpModal = document.getElementById("help-modal");
  helpModal.style.opacity = "1"; 
  helpModal.style.visibility = "visible";
}

// Function to close the help modal
function closeHelp() {
  const helpModal = document.getElementById("help-modal");
  helpModal.style.opacity = "0"; 
  helpModal.style.visibility = "hidden";
}