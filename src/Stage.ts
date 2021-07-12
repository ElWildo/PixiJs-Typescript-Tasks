import {
    Point,
    Container,
    Loader
} from 'pixi.js';
import {
    FX
} from '@siri4/revolt-fx/lib';
import Hud from './Hud';
import Card from './Card';

const MAX_X = window.innerWidth;
const MAX_Y = window.innerHeight;

const HUD_POSITIONS = {
    RIGHT_TOP_CORNER: new Point(MAX_X - 125, 20),
    RIGHT_BOTTOM_CORNER: new Point(MAX_X - 10, MAX_Y - 20),
    CENTER: new Point(MAX_X * 0.50, MAX_Y * 0.50),
    CENTER_TOP: new Point(MAX_X * 0.50, 10),
    TASK1_BUTTON: new Point(MAX_X * 0.50 - 125, MAX_Y * 0.35),
    TASK2_BUTTON: new Point(MAX_X * 0.50 - 125, MAX_Y * 0.50),
    TASK3_BUTTON: new Point(MAX_X * 0.50 - 125, MAX_Y * 0.65),
    LEFT_TOP_CORNER: new Point(MAX_X * 0.01, 20),
    LEFT_BOTTOM_CORNER: new Point(10, MAX_Y * 0.95)
};

class Stage extends Container {
    fx: any;
    spritesheet: any;
    hud: Hud;
    ticker: any;
    selectedTask: number;
    sprites: any[];
    reversedSprites: any[];
    spritePositions: any[];
    cardCollection: any[];
    randomContainerTimer: number;
    randomContainerDuration: number;
    loader: any;

    /**
     * Stage Constructor
     * Container for the game
     * @param opts
     * @param opts.spritesheet - The path to the spritesheet file
     */
    constructor(opts) {
        super();
        this.spritesheet = opts.spritesheet;
        this.hud = new Hud();

        this.fx = new FX();

        this.ticker = PIXI.Ticker.shared;
        this.ticker.start();
        this.ticker.add((delta) => {
            this.fx.update();
        });

        this.loader = PIXI.Loader.shared;
        this.refreshStage = this.refreshStage.bind(this)
        this.addBackToMenuButton = this.addBackToMenuButton.bind(this)
        this.onBackToMenuButton = this.onBackToMenuButton.bind(this)
        this.addTaskButtons = this.addTaskButtons.bind(this)
        this.onTask1ButtonDown = this.onTask1ButtonDown.bind(this)
        this.onTask2ButtonDown = this.onTask2ButtonDown.bind(this)
        this.onTask3ButtonDown = this.onTask3ButtonDown.bind(this)
        this.removeAllTaskButtons = this.removeAllTaskButtons.bind(this)
        this.startTask1 = this.startTask1.bind(this)
        this.stopTask1 = this.stopTask1.bind(this)
        this.startTask2 = this.startTask2.bind(this)
        this.stopTask2 = this.stopTask2.bind(this)
        this.startTask3 = this.startTask3.bind(this)
        this.stopTask3 = this.stopTask3.bind(this)
        this.addSpriteToReversedArray = this.addSpriteToReversedArray.bind(this)
        this.animate = this.animate.bind(this)
        this.tickTask2Timer = this.tickTask2Timer.bind(this)

        this._initStage();
    }

    /**
     * _initStage
     * Private method that adds all of the elements to the scene
     * @private
     */
    _initStage() {
        this.addChild(this.hud);

        this.selectedTask = -1;

        this.hud.addText('welcome', {
            text: 'Pixi.js Typescript Tasks',
            textStyle: {
                fontFamily: "Courier New",
                fontWeight: "bold",
                stroke: "white",
                strokeThickness: 1,
                fontSize: '26px',
                align: 'center',
                fill: 'Black'
            },
            position: HUD_POSITIONS.CENTER_TOP,
            anchor: {
                x: 0.5,
                y: 0
            }
        });

        this.addFPSText();

        this.addTaskButtons();
    }

    refreshStage() {
        this.hud.removeChildren(0);
        this.removeChildren(0);
        this._initStage();
    }

    addFPSText() {
        this.hud.addText('fps', {
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '32px',
                align: 'left',
                fill: 'white'
            },
            position: HUD_POSITIONS.LEFT_TOP_CORNER,
            anchor: {
                x: 0,
                y: 0
            }
        });
    }

    setFPSText(val) {
        if (this.hud.fpsTextBox)
            this.hud.fpsTextBox.text = val;
    }

    addBackToMenuButton() {
        this.hud.addButtonContainer('returnBack', {
            spriteName: 'dieRed6.png',
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.RIGHT_TOP_CORNER,
            text: 'Back to Menu',
            anchor: {
                x: 0.5,
                y: 0
            },
            textStyle: {
                fontFamily: "Verdana, Geneva, sans-serif",
                fontWeight: "bold",
                fontSize: '25px',
                align: 'left',
                fill: 'white'
            },
            textMargin: 5,
            textAllignment: -1
        }, this.onBackToMenuButton);
    }

    onBackToMenuButton() {
        switch (this.selectedTask) {
            case 1:
                this.stopTask1();
                break;
            case 2:
                this.stopTask2();
                break;
            case 2:
                this.stopTask3();
                break;
            default:
                break;
        }
        this.refreshStage();
    }

    addTaskButtons() {
        let textSyleTasks = {
            fontFamily: "Verdana, Geneva, sans-serif",
            fontWeight: "bold",
            fontSize: '25px',
            align: 'left',
            fill: 'white'
        };

        this.hud.addButtonContainer('task1', {
            spriteName: 'dieWhite1.png',
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.TASK1_BUTTON,
            text: 'Task 1',
            anchor: {
                x: 0.5,
                y: 0.5
            },
            textStyle: textSyleTasks 
        }, this.onTask1ButtonDown);

        this.hud.addButtonContainer('task2', {
            spriteName: 'dieWhite2.png',
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.TASK2_BUTTON,
            text: 'Task 2',
            anchor: {
                x: 0.5,
                y: 0.5
            },
            textStyle: textSyleTasks
        }, this.onTask2ButtonDown);

        this.hud.addButtonContainer('task3', {
            spriteName: 'dieWhite3.png',
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.TASK3_BUTTON,
            text: 'Task 3',
            anchor: {
                x: 0.5,
                y: 0.5
            },
            textStyle: textSyleTasks
        }, this.onTask3ButtonDown);
    }

    onTask1ButtonDown() {
        this.removeAllTaskButtons();
        this.addBackToMenuButton();
        this.startTask1();
    }

    onTask2ButtonDown() {
        this.removeAllTaskButtons();
        this.addBackToMenuButton();
        this.startTask2();
    }

    onTask3ButtonDown() {
        this.removeAllTaskButtons();
        this.addBackToMenuButton();
        this.startTask3();
    }

    removeAllTaskButtons() {
        this.hud.task1Container.removeChildren(0);
        this.hud.task2Container.removeChildren(0);
        this.hud.task3Container.removeChildren(0);
    }

    startTask1() {
        this.selectedTask = 1;
        this.sprites = [];
        this.reversedSprites = [];
        this.spritePositions = [];
        this.cardCollection = [];

        let spritePadding = 0;
        //create 144 sprites and store in sprites array
        for (var i = 0; i < 144; i++) {
            //there aren't 144 different images, return back to starting positions in every 53 icons
            let index = (i > 52 ? i - 53 : i);
            index = (index > 52 ? index - 53 : index);

            let sprite = new PIXI.Sprite(this.loader.resources[this.spritesheet].textures['card' + index + '.png']);
            sprite.position.set(150, 50 + spritePadding);
            sprite.anchor.set(0.5, 0);
            spritePadding += 5; // add some padding
            this.sprites.push(sprite);
            this.spritePositions.push(sprite.position);
            this.addChild(sprite);
        }

        this.spritePositions.reverse(); //reverse all positions because reversed array will use this positions
    }

    addSpriteToReversedArray() {
        if (this.sprites) {
            if (this.sprites.length > 0) {
                let lastSprite = this.sprites[this.sprites.length - 1];

                //store last sprite from first sprite array in Card object
                //the card object includes startPosition and expectedPosition for move animation with move duration
                let card = new Card();
                card.sprite = lastSprite;
                card.startPosition = lastSprite.position;
                card.expectedPosition = new Point(MAX_X, this.spritePositions[this.reversedSprites.length].y);
                card.moveDuration = 2 * 1000;
                this.cardCollection.push(card);

                this.sprites.pop();
                this.reversedSprites.push(lastSprite);

                this.addChild(lastSprite);
            }
        }
    }

    animate() {
        if (this.cardCollection) {
            for (let card of this.cardCollection) {
                card.move(this.ticker.elapsedMS);
            }
        }
    }

    stopTask1() {
        this.selectedTask = -1;
        this.sprites = [];
        this.reversedSprites = [];
        this.spritePositions = [];
        this.cardCollection = [];
    }

    startTask2() {
        this.selectedTask = 2;
        this.randomContainerTimer = 0;
        // set duration at 2 seconds
        this.randomContainerDuration = 2 * 1000;

        if (this.hud.randomContainer)
            this.hud.randomContainer.removeChildren(0);

        this.hud.addRandomContainer("random", {
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.CENTER
        });
    }

    tickTask2Timer() {
        if (this.randomContainerDuration > 0) {
            this.randomContainerTimer += this.ticker.elapsedMS;
            if (this.randomContainerTimer >= this.randomContainerDuration) {
                this.startTask2();
            }
        }
    }

    stopTask2() {
        this.selectedTask = -1;
        this.randomContainerTimer = 0;
        this.randomContainerDuration = 0;
        this.hud.randomContainer.removeChildren(0);
    }

    startTask3() {
        var content = new PIXI.Container();
        content.x = window.innerWidth * 0.5;
        content.y = window.innerHeight * 0.5;
        this.addChild(content);

        var graphics = new PIXI.Graphics();

        graphics.drawRect(-1 * MAX_X * 0.35, -1 * MAX_Y * 0.4, MAX_X * 0.7, MAX_Y * 0.8);
        content.addChild(graphics);

        //add fire-arc fx from RevoltFX library
        //changed variables in assets/defult-bundle.json using the editor at https://editor.revoltfx.electronauts.net/
        var emitter = this.fx.getParticleEmitter('fire-arc', true, true);
        emitter.settings.autoRotation = false;
        emitter.init(content);
    }

    stopTask3() {
        this.selectedTask = -1;
    }
}

export default Stage;