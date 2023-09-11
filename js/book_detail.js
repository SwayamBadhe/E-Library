document.addEventListener('DOMContentLoaded', function () {
    // Get the book ID from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    // Check if a valid book ID is present in the URL
    if (bookId) {
        // Fetch book details from the JSON file
        fetch('../json/books.json') // Replace with the actual path to your JSON file
            .then(response => response.json())
            .then(books => {
                // Find the book with the specified ID
                const book = books.find(item => item.id === parseInt(bookId)); // Parse bookId as an integer

                if (book) {
                    // Update the placeholders with book data
                    document.getElementById('book-cover').src = book.coverImageUrl;
                    document.getElementById('book-title').textContent = book.title;
                    document.getElementById('book-author').textContent = `Author: ${book.author}`;
                    document.getElementById('book-genre').textContent = `Genre: ${book.genre}`;
                    document.getElementById('book-published').textContent = `Published: ${book.published}`;
                    document.getElementById('book-description').textContent = book.description;

                    // Update the borrow/download links (you may provide actual URLs)
                    document.getElementById('borrow-button').href = book.borrowLink;
                    document.getElementById('download-button').href = book.downloadLink;
                } else {
                    console.error('Book not found.');
                }
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
            });
    } else {
        console.error('Invalid or missing book ID in the URL.');
    }
});
