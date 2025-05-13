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




