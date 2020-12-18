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

(function () {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
        /* Store the element in el */
        let el = document.getElementsByClassName("tilt")[0];

        /* Get the height and width of the element */
        const height = el.clientHeight;
        const width = el.clientWidth;

        /*
         * Add a listener for mousemove event
         * Which will trigger function 'handleMove'
         * On mousemove
         */
        el.addEventListener("mousemove", handleMove);

        /* Define function a */
        function handleMove(e) {
            /*
             * Get position of mouse cursor
             * With respect to the element
             * On mouseover
             */
            /* Store the x position */
            const xVal = e.layerX;
            /* Store the y position */
            const yVal = e.layerY;

            /*
             * Calculate rotation valuee along the Y-axis
             * Here the multiplier 20 is to
             * Control the rotation
             * You can change the value and see the results
             */
            const yRotation = 5 * ((xVal - width / 2) / width);

            /* Calculate the rotation along the X-axis */
            const xRotation = -5 * ((yVal - height / 2) / height);

            /* Generate string for CSS transform property */
            const string =
                "perspective(500px) rotateX(" +
                xRotation +
                "deg) rotateY(" +
                yRotation +
                "deg)";

            /* Apply the calculated transformation */
            el.style.transform = string;
        }

        /* Add listener for mouseout event, remove the rotation */
        el.addEventListener("mouseout", function () {
            el.style.transform = "perspective(200px) rotateX(0) rotateY(0)";
        });

        /* Add listener for mousedown event, to simulate click */
        el.addEventListener("mousedown", function () {
            el.style.transform = "perspective(200px) rotateX(0) rotateY(0)";
        });

        /* Add listener for mouseup, simulate release of mouse click */
        el.addEventListener("mouseup", function () {
            el.style.transform = "perspective(200px) rotateX(0) rotateY(0)";
        });
    }
})();

(function () {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
        /* Store the element in el */
        let el = document.getElementsByClassName("tilt")[1];

        /* Get the height and width of the element */
        const height = el.clientHeight;
        const width = el.clientWidth;

        /*
         * Add a listener for mousemove event
         * Which will trigger function 'handleMove'
         * On mousemove
         */
        el.addEventListener("mousemove", handleMove);

        /* Define function a */
        function handleMove(e) {
            /*
             * Get position of mouse cursor
             * With respect to the element
             * On mouseover
             */
            /* Store the x position */
            const xVal = e.layerX;
            /* Store the y position */
            const yVal = e.layerY;

            /*
             * Calculate rotation valuee along the Y-axis
             * Here the multiplier 20 is to
             * Control the rotation
             * You can change the value and see the results
             */
            const yRotation = 5 * ((xVal - width / 2) / width);

            /* Calculate the rotation along the X-axis */
            const xRotation = -5 * ((yVal - height / 2) / height);

            /* Generate string for CSS transform property */
            const string =
                "perspective(500px) rotateX(" +
                xRotation +
                "deg) rotateY(" +
                yRotation +
                "deg)";

            /* Apply the calculated transformation */
            el.style.transform = string;
        }

        /* Add listener for mouseout event, remove the rotation */
        el.addEventListener("mouseout", function () {
            el.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
        });

        /* Add listener for mousedown event, to simulate click */
        el.addEventListener("mousedown", function () {
            el.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
        });

        /* Add listener for mouseup, simulate release of mouse click */
        el.addEventListener("mouseup", function () {
            el.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
        });
    }
})();

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
