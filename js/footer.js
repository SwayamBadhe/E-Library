// JavaScript to load the footer content
window.addEventListener('DOMContentLoaded', function () {
    const footerDiv = document.getElementById('footer');
    footerDiv.innerHTML = `
        <footer class="fixed-bottom bg-light text-center py-2" style="background-color: purple;">
            <!-- Your footer HTML goes here -->
            <p class="mb-0">Contact Us: E-library@gmail.com</p>
            <p class="mb-0">Copyright &copy; 2023 E-Library</p>
        </footer>
    `;
});
