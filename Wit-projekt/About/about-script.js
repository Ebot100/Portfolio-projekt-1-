const cards = document.querySelectorAll('.rotating'); 

const MAX_ROTATE_X = 12; 
const MAX_ROTATE_Y = 5; 

document.addEventListener('mousemove', (e) => {
    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const deltaX = e.clientX - cardCenterX;
        const deltaY = e.clientY - cardCenterY;

        let rotateX = -(deltaY / cardRect.width) * MAX_ROTATE_X;
        let rotateY = (deltaX / cardRect.height) * MAX_ROTATE_Y;

        rotateX = Math.max(Math.min(rotateX, MAX_ROTATE_X), -MAX_ROTATE_X);
        rotateY = Math.max(Math.min(rotateY, MAX_ROTATE_Y), -MAX_ROTATE_Y);

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; 
    });
});

/*zmienianie opisow*/ 
const texts = [
    'Jestem początkującym web developerem, który uczy się technologii frontendowych i backendowych. Tworzę strony internetowe i aplikacje webowe, stale rozwijając swoje umiejętności.',
    'Oprócz programowania interesuję się nowinkami technologicznymi. W wolnym czasie lubię pograć w starsze jak i nowsze gry komputerowe.',
    'Moje umiejętności obejmują HTML, CSS, JavaScript, a także zarządzanie serwerami i bazami danych. Staram się stale rozwijać swoje umiejętności.',
];

let index = 0;
const textElement = document.getElementById("changing-text");

setInterval(() => {
    index = (index + 1) % texts.length; 
    textElement.textContent = texts[index];
}, 5000); 


/*zmiana piosenek*/
const tracks = [
    "https://open.spotify.com/embed/track/5rAxhWcgFng3s570sGO2F8?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/track/3dxiWIBVJRlqh9xk144rf4?utm_source=generator",
    "https://open.spotify.com/embed/track/3MrRksHupTVEQ7YbA0FsZK?utm_source=generator",
    "https://open.spotify.com/embed/track/6xtQ23d8GEXgcxyUKPtwc5?utm_source=generator"
];

let currentTrack = 0;
const iframe = document.getElementById("spotify-frame");

function changeTrack() {
    iframe.style.opacity = "0"; 

    setTimeout(() => {
        currentTrack = (currentTrack + 1) % tracks.length;
        iframe.src = tracks[currentTrack]; 
        iframe.style.opacity = "1"; 
    }, 800);
}

setInterval(changeTrack, 5000);


/*zmiana sociali*/

const socials = [
    {
        link: "https://github.com/Ebot100",
        icon: "../Images/Icons/instagram.svg",
        color: "linear-gradient(153deg, rgba(20,60,240,0.8309524493391106) 16%, rgba(141,18,217,0.8477591720281863) 33%, rgba(187,16,226,0.8561625333727241) 57%, rgba(223,129,0,0.875770376509979) 80%, rgba(189,182,7,0.7717647058823529) 100%)"
    },
    {
        link: "https://github.com",
        icon: "../Images/Icons/github.svg",
        color: "linear-gradient(153deg, rgba(45,45,45,0.8309524493391106) 17%, rgba(52,50,50,1) 76%, rgba(36,79,91,0.6796919451374299) 100%)"
    },
    {
        link: "https://facebook.com",
        icon: "../Images/Icons/facebook.svg",
        color: "linear-gradient(153deg, rgba(20,60,240,0.8309524493391106) 16%, rgba(7,150,189,0.7717647058823529) 85%)"
    },
    {
        link: "https://linkedin.com",
        icon: "../Images/Icons/discord.svg",
        color: "linear-gradient(63deg, rgba(66,69,73,1) 0%, rgba(54,57,62,1) 49%, rgba(30,33,36,1) 100%)"
    }
];

let counter = 0;

function changeSocial() {
    
    counter = (counter + 1) % socials.length; 

    document.getElementById("social-link").href = socials[counter].link;
    document.getElementById("social-icon").src = socials[counter].icon;
    document.querySelector(".social").style.background = socials[counter].color;
}

setInterval(changeSocial, 5000);