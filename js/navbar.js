// JavaScript to load the navigation bar content
window.addEventListener('DOMContentLoaded', function () {
    const navbarDiv = document.getElementById('navbar');
    navbarDiv.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark " style="background-color: purple;">
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
                    <li class="nav-item">
                        <a class="nav-link" href="book_detail.html">Book Detail</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="signup.html">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
});
