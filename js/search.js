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
const performSearch = (searchTerm) => {
    console.log('Performing search for term: ', searchTerm);

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


const displaySearchResults = (results) => {
    const searchResultsDiv = document.getElementById("search-results");
    const children = searchResultsDiv.children;

    while (children.length > 1) {
        searchResultsDiv.removeChild(children[0]);
    }

    // Check if there are anu search results
    if (results.length === 0) {
        searchResultsDiv.innerHTML = "<p>No results found</p>";
        return;
    }

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
        );

        const CardDiv = document.createElement("div");
        CardDiv.classList.add("card", "book-card");

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
        readLink.href = `book_detail.html?id=${result.id}`; // actual URL here
        readLink.textContent = "Read";

        cardBody.appendChild(title);
        cardBody.appendChild(author);
        cardBody.appendChild(description);
        cardBody.appendChild(readLink);

        CardDiv.appendChild(img);
        CardDiv.appendChild(cardBody);

        colDiv.appendChild(CardDiv);

        resultList.appendChild(colDiv);
    });

    // Append the resultList to your searchResultsDiv
// Append the resultList as the first element in search-results (searchResultsDiv)
searchResultsDiv.insertBefore(resultList, searchResultsDiv.firstChild);
    
}

// Function to load and display the search bar HTML
const loadSearchBar = () => {
    const searchBarContent = document.getElementById("search-bar");

    // Fetch the search bar HTML from an external file
    fetch('search_bar.html')
        .then(res => res.text())
        .then(html => {
            searchBarContent.innerHTML = html;

            const searchInput = document.getElementById("search-input");
            const searchButton = document.getElementById("search-button");

            // Add event listener for the search button
            searchButton.addEventListener("click", () => {
                const searchTerm = searchInput.value;
                // Call a function to perform the search based on searchTerm
                performSearch(searchTerm);
            })
        })
        .catch(error => {
            console.error('Error loading search bar: ', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadBookData(); // Load book data when the page loads
    loadSearchBar(); // Load the search bar and display all books
})