import './main.scss';

function initEndPoints() {
    const screen = document.querySelector("#screen");

    const mouseHandler = (ev: MouseEvent) => {
        ev.preventDefault();

        if(ev.button === 2){
            screen.removeEventListener("mousedown", mouseHandler);
            addStartingPoint();
            return;
        }

        let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        newElement.setAttribute("cx", ev.offsetX.toString());
        newElement.setAttribute("cy", ev.offsetY.toString());
        newElement.setAttribute("r", "4");
        newElement.classList.add("point");
        newElement.style.fill = "#1565C0"; //Set stroke colour

        screen.appendChild(newElement);
    }

    screen.addEventListener("mousedown", mouseHandler);
}

initEndPoints();

function addStartingPoint(){
    const screen = document.querySelector("#screen");

    const mouseHandler = (ev: MouseEvent) => {
        let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        newElement.setAttribute("cx", ev.offsetX.toString());
        newElement.setAttribute("cy", ev.offsetY.toString());
        newElement.setAttribute("r", "1");
        newElement.setAttribute("id", "player")
        newElement.style.fill = "#AB0101"; //Set stroke colour

        // @ts-ignore
        ev.target.appendChild(newElement);

        screen.removeEventListener("mousedown", mouseHandler);

        initGame();
    }

    screen.addEventListener("mousedown", mouseHandler);
}

async function initGame() {
    const screen = document.querySelector("#screen")
    const points = document.querySelectorAll(".point");
    const player = document.querySelector("#player");

    const numberOfIterations = 10000;

    for (let i = 0; i < numberOfIterations; i++) {
        let speed = +(document.querySelector("#speed") as HTMLInputElement).value;
        copyPlayer();
        changeDotPosition();
        await sleep(speed);
    }

    function changeDotPosition() {
        const random = generateRandom(points.length);

        const pointCoords = {
            x: +points[random].getAttribute("cx"),
            y: +points[random].getAttribute("cy")
        }

        // 1/2
        const midPointX = (pointCoords.x + +player.getAttribute("cx")) / 2;
        const midPointY = (pointCoords.y + +player.getAttribute("cy")) / 2;

        // 2/3 not working
        /*const midPointX = Math.floor((pointCoords.x + +player.getAttribute("cx")) * (2/3));
        const midPointY = Math.floor((pointCoords.y + +player.getAttribute("cy")) * (2/3));*/

        player.setAttribute("cx", midPointX.toString())
        player.setAttribute("cy", midPointY.toString())
    }

    function copyPlayer() {
        let playerCopy = player.cloneNode(true);

        // @ts-ignore
        playerCopy.removeAttribute("id");

        // @ts-ignore
        playerCopy.style.fill = "#FFF";

        screen.appendChild(playerCopy);
    }

    function generateRandom(numberOfPoints: number){
        return Math.floor(Math.random() * numberOfPoints);
    }

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function addEndPoints(){

    }
}