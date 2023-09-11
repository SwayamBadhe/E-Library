let books = [];

// Function to fetch and load book data from the JSON file
function loadBookData() {
    fetch('../json/books.json')
        .then(response => response.json())
        .then(data => {
            books = data; 
            displayAllBooks(); 
        })
        .catch(error => {
            console.error('Error loading book data:', error);
        });
}

// Function to display all books initially
function displayAllBooks() {
    displaySearchResults(books);
}

// Function to perform the search based on the input term
function performSearch(searchTerm) {
    console.log('Performing search for term:', searchTerm); 

    // Perform the search logic here
    const searchResults = books.filter(book => {
        // Search logic
        const match = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.description.toLowerCase().includes(searchTerm.toLowerCase());
        return match;
    });

    console.log('Search results:', searchResults);

    // Display search results
    displaySearchResults(searchResults);
}


function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById("search-results");

    // Clear previous search results
    searchResultsDiv.innerHTML = "";

    // Check if there are any search results
    if (results.length === 0) {
        searchResultsDiv.innerHTML = "<p>No results found.</p>";
        return;
    }

    // const matchingBooks = [];
    // const nonMatchingBooks = [];

    // results.forEach(result => {
    //     if (result.match) {
    //         matchingBooks.push(result);
    //     } else {
    //         nonMatchingBooks.push(result);
    //     }
    // });

    // const combinedResults = [...matchingBooks, ...nonMatchingBooks];

    // Create an HTML list to display search results
    const resultList = document.createElement("div");
    resultList.classList.add("row");

    results.forEach(result => {
        const colDiv = document.createElement("div");
        colDiv.classList.add(
            "col-md-4",
            "mb-4",
            "justify-content-center",
            "mx-auto"
        ); // Add 'mx-auto' class to center-align the column

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "book-card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = result.imgSrc;
        img.alt = result.title;
        img.style.maxHeight = "200px";
        img.style.marginTop = "20px";
        img.style.marginBottom = "5px";
        img.style.objectFit = "contain";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "text-center");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = result.title;

        const author = document.createElement("h6");
        author.classList.add("card-title");
        author.textContent = result.author;

        const description = document.createElement("p");
        description.classList.add("card-text");
        description.textContent = result.description;

        const readLink = document.createElement("a");
        readLink.classList.add("btn", "btn-primary");
        readLink.href = `book_detail.html?id=${result.id}`; // You can set the actual URL here
        readLink.textContent = "Read";

        cardBody.appendChild(title);
        cardBody.appendChild(author);
        cardBody.appendChild(description);
        cardBody.appendChild(readLink);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        colDiv.appendChild(cardDiv);

        resultList.appendChild(colDiv);
    });

    // Append the resultList to your searchResultsDiv
    searchResultsDiv.appendChild(resultList);

    // Append the list to the search results div
    searchResultsDiv.appendChild(resultList);
}

// Function to load and display the search bar HTML
function loadSearchBar() {
    const searchBarContent = document.getElementById("search-bar");
    const searchResultsDiv = document.getElementById("search-results");

    // Fetch the search bar HTML from an external file
    fetch('search_bar.html')
        .then(response => response.text())
        .then(html => {
            searchBarContent.innerHTML = html;

            const searchInput = document.getElementById("search-input");
            const searchButton = document.getElementById("search-button");

            // Add event listener for the search button
            searchButton.addEventListener("click", function () {
                const searchTerm = searchInput.value;
                // Call a function to perform the search based on searchTerm
                performSearch(searchTerm);
            });

            displayAllBooks();
        })
        .catch(error => {
            console.error('Error loading search bar: ', error);
        });
}

// Call the function to load book data when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadBookData(); // Load book data when the page loads
    loadSearchBar(); // Load the search bar and display all books
    // ... (Other code for search and displaying search results)
});
