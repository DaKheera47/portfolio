const textToChange = document.getElementsByClassName("changing-text");
const staticText = document.getElementsByClassName("static-text");
const projectsContainer =
    document.getElementsByClassName("projects-container")[0];
const totalOptions = [
    "shaheer sarfaraz",
    "A member of project mirage",
    "A Full stack developer",
    "A team lead",
    "A React developer",
    "A WordPress developer",
];

let i = 0;

function scroller() {
    projectsContainer.scrollIntoView(true);
}

let optionCounter = 0;

anime
    .timeline({ loop: true })
    .add({
        targets: ".changing-text",
        changeBegin: () => {
            if (!totalOptions[optionCounter]) {
                optionCounter = 0;
            }
            textToChange[0].textContent = totalOptions[optionCounter];
            optionCounter++;
        },
        translateY: [-40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 300 + 30 * i,
    })
    .add({
        targets: ".changing-text",
        translateY: [0, 40],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 800,
        delay: (el, i) => 100 + 30 * i,
    });
