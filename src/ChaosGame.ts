import Randomizer from "./Randomizer";

interface ChaosGameSettings {
    timeBetweenJumps: number;
    distanceToMove: number;
    canNotRepeatRoll: boolean;
    numberOfIterations: number;
    sizeOfStamp: string;
}

export class ChaosGame {
    #screen: SVGElement;
    #randomizer: Randomizer;
    #settings: ChaosGameSettings;
    #gameStopped: boolean;
    #player: SVGCircleElement;
    #points: NodeListOf<SVGCircleElement>;

    constructor() {
        this.#screen = document.querySelector("#screen");
        this.#randomizer = new Randomizer();
        this.#gameStopped = true;
    }

    init() {
        this.addListeners();
    }

    addListeners() {
        // Start Game
        document.querySelector("#startGame").addEventListener("click", () => {
            const player = document.querySelector("#player") ?? false;
            const points = document.querySelectorAll(".point");

            if(points.length <= 1){
                document.querySelector("#info").innerHTML = "You have to add at least two points to start game, please Left click on screen bellow"
            }
            else if(!player) {
                document.querySelector("#info").innerHTML = "You have to add player to start game, please Right click on screen bellow"
            }
            else{
                this.startGame();
            }
        })

        // Stop Game
        document.querySelector("#stopGame").addEventListener("click", () => {
            this.stopGame();
        })

        // CLear screen
        document.querySelector("#clearScreen").addEventListener("click", () => {
            this.stopGame();
            this.clearScreen();
            document.querySelector("#stopGame").classList.add("hidden");
            document.querySelector("#startGame").classList.remove("hidden");
        })

        // Adds Points
        document.querySelector("#screen").addEventListener("click", (ev: MouseEvent) => {
            if(this.#gameStopped){
                this.addPoint(ev.offsetX.toString() ,ev.offsetY.toString());
            }
        })

        // Adds Player
        document.querySelector("#screen").addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.preventDefault();

            const player = document.querySelector("#player");

            if(player === null){
                this.addPlayer(ev);
            }
        })

        document.querySelector("#templateSelect").addEventListener("change", (ev) => {
            // @ts-ignore Can find good Event type
            this.loadTemplate(ev.target.value)
        })
    }

    async startGame() {
        document.querySelector("#startGame").classList.add("hidden");
        document.querySelector("#stopGame").classList.remove("hidden");
        this.#settings = {
            timeBetweenJumps:
                +(document.querySelector("#timeBetweenJumps") as HTMLInputElement).value * 1000,
            distanceToMove:
                +(document.querySelector("#distanceToMove") as HTMLInputElement).value,
            canNotRepeatRoll:
                ((document.querySelector("#notSameAsLast") as HTMLSelectElement).value === 'true'),
            numberOfIterations:
                +(document.querySelector("#numberOfIterations") as HTMLInputElement).value,
            sizeOfStamp:
            (document.querySelector("#sizeOfStamp") as HTMLInputElement).value
        }
        this.#player = document.querySelector("#player");
        this.#points = document.querySelectorAll(".point") as NodeListOf<SVGCircleElement>;
        this.#gameStopped = false;

        let i = 0;

        while(!(this.#gameStopped || i > this.#settings.numberOfIterations)) {
            this.tick();
            await this.sleep(this.#settings.timeBetweenJumps);
            i++;
        }
    }

    stopGame(){
        document.querySelector("#stopGame").classList.add("hidden");
        document.querySelector("#startGame").classList.remove("hidden");
        this.#gameStopped = true;
    }

    addPoint(x: string, y: string){
        console.log("Adding point")
        const point = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        point.setAttribute("cx", x);
        point.setAttribute("cy", y);
        point.setAttribute("r", "4");
        point.classList.add("point");
        point.style.fill = "#1565C0"; //Set stroke colour

        this.#screen.appendChild(point);
    }

    addPlayer(ev: MouseEvent){
        let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        newElement.setAttribute("cx", ev.offsetX.toString());
        newElement.setAttribute("cy", ev.offsetY.toString());
        newElement.setAttribute("r", "5");
        newElement.setAttribute("id", "player")
        newElement.style.fill = "#AB0101"; //Set stroke colour

        this.#screen.appendChild(newElement);
    }

    tick(){
        this.addStamp();
        this.changeDotPosition();
    }

    changeDotPosition(){
        const random = this.#randomizer.getRandomNumber(this.#points.length, this.#settings.canNotRepeatRoll);

        const pointCoords = {
            x: +this.#points[random].getAttribute("cx"),
            y: +this.#points[random].getAttribute("cy")
        }

        const x1 = +this.#player.getAttribute("cx");
        const x2 = pointCoords.x;

        const y1 = +this.#player.getAttribute("cy");
        const y2 = pointCoords.y;

        const distanceBetweenPoints = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)
        const distanceToMove: number = eval((document.querySelector("#distanceToMove") as HTMLInputElement).value);

        const newPosX = x1 + (((distanceBetweenPoints * distanceToMove) / distanceBetweenPoints) * (x2 - x1))
        const newPosY = y1 + (((distanceBetweenPoints * distanceToMove) / distanceBetweenPoints) * (y2 - y1))

        this.#player.setAttribute("cx", newPosX.toString())
        this.#player.setAttribute("cy", newPosY.toString())
    }

    loadTemplate(templateName: string){
        /* Screen = 1379x856 */
        const templates = [
            {
                name: "carpet",
                distanceToMove: "2/3",
                canNotRepeatRoll: false,
                points: [
                    {x: 100, y: 100},
                    {x: 400, y: 100},
                    {x: 700, y: 100},

                    {x: 100, y: 400},
                    {x: 700, y: 400},

                    {x: 100, y: 700},
                    {x: 400, y: 700},
                    {x: 700, y: 700}
                ]
            },
            {
                name: "vicsek",
                distanceToMove: "2/3",
                canNotRepeatRoll: false,
                points: [
                    {x: 100, y: 100},
                    {x: 700, y: 100},

                    {x: 400, y: 400},

                    {x: 100, y: 700},
                    {x: 700, y: 700}
                ]
            },
            {
                name: "triangle",
                distanceToMove: "1/2",
                canNotRepeatRoll: false,
                points: [
                    {x: 400, y: 100},
                    {x: 100, y: 700},
                    {x: 700, y: 700}
                ]
            }
            ,
            {
                name: "pentagon",
                distanceToMove: "1/2",
                canNotRepeatRoll: true,
                points: [
                    {x: 350, y: 100},
                    {x: 120, y: 270},
                    {x: 581, y: 270},
                    {x: 284, y: 448},
                    {x: 451, y: 448},
                ]
            }
        ]

        templates.forEach(template => {
            if(template.name === templateName){
                this.stopGame();
                this.clearScreen();
                (document.querySelector("#distanceToMove") as HTMLInputElement).value = template.distanceToMove;
                (document.querySelector("#notSameAsLast") as HTMLSelectElement).value = template.canNotRepeatRoll.toString();

                template.points.forEach(point => {
                    this.addPoint(point.x.toString(), point.y.toString())
                })
            }
        })
    }

    addStamp(){
        let playerCopy = (this.#player.cloneNode(true) as SVGCircleElement);

        playerCopy.removeAttribute("id");
        playerCopy.style.fill = "#FFF";
        playerCopy.setAttribute("r", this.#settings.sizeOfStamp)

        this.#screen.appendChild(playerCopy);
    }

    clearScreen() {
        this.#screen.innerHTML = "";
    }

    sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}