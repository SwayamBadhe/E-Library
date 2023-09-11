const books = [
    {
        title: "Book 1 Title",
        description: "Description of Book 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "Author 1",
        imgSrc: "../static/book1.jpg"
    },
    {
        title: "Book 2 Title",
        description: "Description of Book 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Author 2",
        imgSrc: "../static/book2.jpg"
    },
    {
        title: "Book 3 Title",
        description: "Description of Book 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        author: "Author 3",
        imgSrc: "../static/book3.jpg"
    },
];



// Function to load and display the search bar HTML
function loadSearchBar() {
    const searchBarContent = document.getElementById('search-bar');
    
    // Create the search bar HTML directly in JavaScript
    searchBarContent.innerHTML = `
        <!-- Include the reusable search bar -->
        <div class="input-group">
            <input type="text" class="form-control" id="search-input" placeholder="Search for books...">
            <div class="input-group-append">
                <button class="btn btn-primary" type="button" id="search-button">Search</button>
            </div>
        </div>
    `;
    
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResultsDiv = document.getElementById('search-results');
    
    // Add event listener for the search button
    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value;
        // Call a function to perform the search based on searchTerm
        performSearch(searchTerm);
    });
    
    // Function to perform the search based on the input term
    function performSearch(searchTerm) {
        // Filter books based on the search term
        const searchResults = books.filter(book => {
            // You can modify this condition to customize your search logic
            return book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.description.toLowerCase().includes(searchTerm.toLowerCase());
        });
    
        // Display search results
        displaySearchResults(searchResults);
    }

    function displaySearchResults(results) {
        const searchResultsDiv = document.getElementById('search-results');
        
        // Clear previous search results
        searchResultsDiv.innerHTML = '';
    
        // Check if there are any search results
        if (results.length === 0) {
            searchResultsDiv.innerHTML = '<p>No results found.</p>';
            return;
        }
    
        // Create an HTML list to display search results
const resultList = document.createElement('div');
resultList.classList.add('row');

results.forEach(result => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-4', 'd-flex', 'justify-content-center', 'mx-auto'); // Add 'mx-auto' class to center-align the column

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'book-card');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = result.imgSrc;
    img.alt = result.title;
    img.style.maxHeight = '200px';
    img.style.marginTop = '20px';
    img.style.marginBottom = '5px';
    img.style.objectFit = 'contain';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'text-center');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = result.title;

    const author = document.createElement('h6');
    author.classList.add('card-title');
    author.textContent = result.author;

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = result.description;

    const readLink = document.createElement('a');
    readLink.classList.add('btn', 'btn-primary');
    readLink.href = "book1.html"; // You can set the actual URL here
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
    
}

// Call the loadSearchBar function when the DOM is loaded
loadSearchBar();
