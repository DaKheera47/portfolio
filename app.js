const textToChange = document.getElementsByClassName("changing-text");
const staticText = document.getElementsByClassName("static-text");
const projectsContainer = document.getElementsByClassName(
    "projects-container"
)[0];
const totalOptions = [
    "shaheer sarfaraz",
    "a student",
    "A web developer",
    "A designer",
];

let i = 0;

function scroller() {
    projectsContainer.scrollIntoView(true);
}

setInterval(() => {
    if (totalOptions[i]) {
        anime({
            targets: ".changing-text",
            opacity: 0,
            duration: 200,
            direction: "alternate",
            changeComplete: () => {
                textToChange[0].innerHTML = totalOptions[i];
            },
            easing: "easeOutCubic",
        });

        i++;

        if (!totalOptions[i]) {
            i = 0;
        }
    }
}, 2000);
