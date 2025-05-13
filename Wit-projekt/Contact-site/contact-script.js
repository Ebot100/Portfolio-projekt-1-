document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const emailInput = form.querySelector("input[name='email']");

    const errorMsg = document.createElement("div");
    errorMsg.style.color = "red";
    errorMsg.style.fontSize = "14px";
    errorMsg.style.margin = "10px";
    emailInput.after(errorMsg);

    form.addEventListener("submit", function (e) {
        const email = emailInput.value.trim();
        errorMsg.textContent = "";

        if (!email.includes("@")) {
            e.preventDefault();
            errorMsg.textContent = "Adres e-mail musi zawierać znak @";
            return;
        }

        const domain = email.split("@")[1];
        if (!domain || !domain.includes(".")) {
            e.preventDefault();
            errorMsg.textContent = "Adres e-mail musi zawierać poprawną domenę (np. gmail.com)";
            return;
        }
    });
});