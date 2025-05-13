/* obsluga guziczkow przewijania i dotyku*/

const sections = document.querySelectorAll(".project");
const upBtn = document.getElementById("up-button");
const downBtn = document.getElementById("down-button");

let currentIndex = 0;
let startY = 0;
let endY = 0;


function scrollToSection(index) {
    if (index < 0) {
        currentIndex = sections.length - 1; 
    } else if (index >= sections.length) {
        currentIndex = 0; 
    } else {
        currentIndex = index;
    }

    sections[currentIndex].scrollIntoView({ behavior: "auto" }); 
}


upBtn.addEventListener("click", () => scrollToSection(currentIndex - 1));
downBtn.addEventListener("click", () => scrollToSection(currentIndex + 1));


document.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY; 
});

document.addEventListener("touchend", (e) => {
    endY = e.changedTouches[0].clientY; 

    if (startY - endY > 50) {

        scrollToSection(currentIndex + 1);
    } else if (endY - startY > 50) {

        scrollToSection(currentIndex - 1);
    }
});





/* efekty po najechaniu */

document.querySelectorAll(".go-to-project").forEach(button => {
    button.addEventListener("mouseenter", function() {
        this.closest(".project-description").style.background = "rgba(0, 0, 0, 0.390)";
        this.closest(".project-description").style.backdropFilter = "blur(0.5px)";
        this.closest(".project").style.backgroundSize = "105%";
    });

    button.addEventListener("mouseleave", function() {
        this.closest(".project-description").style.background = "rgba(0, 0, 0, 0.850)";
        this.closest(".project").style.backgroundSize = "100%";
    });
});



