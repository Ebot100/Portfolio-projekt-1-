document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const passwordInput = document.querySelector("input[name='password']");
    const submitButton = form.querySelector("button[type='submit']");

    const errorBox = document.createElement("div");
    errorBox.style.color = "red";
    errorBox.style.marginTop = "10px";
    form.insertBefore(errorBox, submitButton);

    function validatePassword(password) {
        const errors = [];

        if (password.length < 8 || password.length > 24) {
            errors.push("Hasło musi mieć od 8 do 24 znaków.");
        }
        if (!/[A-Z]/.test(password)) {
            errors.push("Hasło musi zawierać wielką literę.");
        }
        if (!/[a-z]/.test(password)) {
            errors.push("Hasło musi zawierać małą literę.");
        }
        if (!/[0-9]/.test(password)) {
            errors.push("Hasło musi zawierać cyfrę.");
        }
        if (!/[\W_]/.test(password)) {
            errors.push("Hasło musi zawierać znak specjalny.");
        }

        return errors;
    }

    form.addEventListener("submit", (e) => {
        const password = passwordInput.value;
        const errors = validatePassword(password);

        if (errors.length > 0) {
            e.preventDefault();
            errorBox.innerHTML = errors.join("<br>");
        } else {
            errorBox.innerHTML = "";
        }
    });
});
