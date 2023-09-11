document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = {
            username,
            email,
            password,
        };


        fetch("../json/users.json")
            .then((response) => response.json())
            .then((existingUsers) => {
                // Check if user already exists
                const userExists = existingUsers.some(
                    (user) => user.username === username || user.email === email
                );

                if (userExists) {
                    alert("Username or email already exists");
                } 
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    });
});
