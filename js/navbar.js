// JavaScript to load the navigation bar content
window.addEventListener('DOMContentLoaded', function () {
    const navbarDiv = document.getElementById('navbar');
    navbarDiv.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark " style="background-color: purple;">
            <!-- Your navigation bar HTML goes here -->
            <a class="navbar-brand" href="home.html">E-Library</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="search.html">Search</a>
                    </li>
                    <!-- Add links to other pages as needed -->
                </ul>
            </div>
        </nav>
    `;
});
