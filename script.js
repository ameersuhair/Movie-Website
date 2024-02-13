document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const phoneInput = document.getElementById("phone");

    const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const phoneRule = /^[0-9]{10}$/;

    passwordInput.addEventListener("input", function () {
        validateInput(this, passwordRule, "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.");
    });

    phoneInput.addEventListener("input", function () {
        validateInput(this, phoneRule, "Phone number must be 10 digits long and contain only numbers.");
    });

    function validateInput(input, rule, errorMessage) {
        const isValid = rule.test(input.value);
        const errorSpan = input.nextElementSibling;

        if (!isValid) {
            input.classList.add("invalid");
            input.classList.remove("valid");
            errorSpan.textContent = errorMessage;
            errorSpan.style.display = "block";
        } else {
            input.classList.remove("invalid");
            input.classList.add("valid");
            errorSpan.textContent = "";
            errorSpan.style.display = "none";
        }
    }
});
