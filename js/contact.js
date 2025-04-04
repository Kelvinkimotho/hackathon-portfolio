const myBtn = document.querySelector(".submit-btn");
const inputs = document.querySelectorAll(".input-field");

myBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent actual form submission

    let allValid = true;

    inputs.forEach((field) => {
        const value = field.value.trim();
        const type = field.getAttribute("type") || field.tagName.toLowerCase();
        const errorMessage = document.getElementById(`${field.id}-error`);

        let isValid = true;

        if (value === "") {
            isValid = false;
            errorMessage.textContent = "This field is required.";
        } else if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            isValid = false;
            errorMessage.textContent = "Enter a valid email address.";
        } else if (type === "tel" && !/^\+?\d{7,15}$/.test(value)) {
            isValid = false;
            errorMessage.textContent = "Enter a valid phone number.";
        }

        if (!isValid) {
            field.classList.add("error-border");
            errorMessage.style.display = "block";
            allValid = false;
        } else {
            field.classList.remove("error-border");
            errorMessage.style.display = "none";
        }
    });

    if (allValid) {
        alert("Sent successfully!");
        inputs.forEach((field) => {
            field.value = "";
            document.getElementById(`${field.id}-error`).style.display = "none";
        });
    } else {
        alert("Please fill all fields correctly.");
    }
});

