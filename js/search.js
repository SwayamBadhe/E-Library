// JavaScript for loading the search bar and handling search functionality
window.addEventListener('DOMContentLoaded', function () {
    const searchBarDiv = document.getElementById('search-bar');
    searchBarDiv.innerHTML = `
        <!-- Include the reusable search bar -->
        <div id="search-bar-content"></div>
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
        // Logic to fetch and display search results
        // You can use AJAX, fetch API, or any other method to fetch data and update the searchResultsDiv
        // Sample code to display search results (replace with actual implementation)
        searchResultsDiv.innerHTML = `
            <h3>Search Results for "${searchTerm}":</h3>
            <ul>
                <li>Book 1 Title</li>
                <li>Book 2 Title</li>
                <li>Book 3 Title</li>
                <!-- Add more search results as needed -->
            </ul>
        `;
    }
});

// Function to load and display the search bar HTML
function loadSearchBar() {
    // Fetch the search_bar.html file
    fetch('search_bar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch search_bar.html: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            // Insert the HTML content into the search-bar-content div
            const searchBarContent = document.getElementById('search-bar-content');
            searchBarContent.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
}

// Call the loadSearchBar function when the DOM is loaded
window.addEventListener('DOMContentLoaded', function () {
    loadSearchBar();
});
