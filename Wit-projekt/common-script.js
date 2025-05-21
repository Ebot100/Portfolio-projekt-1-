document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("active");
});


const dropdown = document.querySelector(".theme-dropdown");
const dropdownBtn = document.querySelector(".theme-dropdown-btn");
const dropdownList = document.querySelector(".theme-dropdown-list");
const themeItems = document.querySelectorAll(".theme-dropdown-list li");


dropdownBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});


document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
    }
});


themeItems.forEach((item) => {
    item.addEventListener("click", () => {
        const selectedTheme = item.getAttribute("data-theme");
        document.documentElement.setAttribute("data-theme", selectedTheme);
        localStorage.setItem("theme", selectedTheme);
        dropdownBtn.textContent = ` ${item.textContent}`;
        dropdown.classList.remove("open");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "default";
    document.documentElement.setAttribute("data-theme", savedTheme);


    themeItems.forEach((item) => {
        if (item.getAttribute("data-theme") === savedTheme) {
            dropdownBtn.textContent = ` ${item.textContent}`;
        }
    });
});


const footerBottom = document.querySelector(".footer-bottom");
let clickCount = 0;


function applyCustomFont() {
    const style = document.createElement('style');
    style.id = "custom-font-style";
    style.innerHTML = `* { font-family: "Wingding", "Courier New", monospace !important; }`;
    document.head.appendChild(style);
    localStorage.setItem("customFont", "true");
}


function resetFont() {
    const oldStyle = document.getElementById("custom-font-style");
    if (oldStyle) oldStyle.remove();
    localStorage.setItem("customFont", "false");
}


if (localStorage.getItem("customFont") === "true") {
    applyCustomFont();
}


footerBottom.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 5) {
        applyCustomFont();
    }

    if (clickCount === 10) {
        resetFont();
        clickCount = 0;
    }
});

