import { Loader, autoDetectRenderer, utils } from 'pixi.js';
import { noop as _noop } from 'lodash/util';
import Stage from './Stage';

const BACKGROUND_COLOR = 0x865CFF;

class Game {
    spritesheet: string;
    loader: any;
    renderer: PIXI.Renderer;
    timer: number;
    stage: Stage;
    /**
     * Game Constructor
     * @returns {Game}
     */
    constructor() {
        this.spritesheet = './assets/spritesheetcollection.json';
        this.loader = PIXI.Loader.shared;
        this.renderer = autoDetectRenderer(
            {
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: BACKGROUND_COLOR,
                antialias: true
            }
        );

        return this;
    }

    load() {
        this.loader
            .add('fx_settings', './assets/default-bundle.json')
            .add('fx_spritesheet', './assets/revoltfx-spritesheet.json')
            .add(this.spritesheet)
            .load((loader, resources)=>{
                document.body.appendChild(this.renderer.view);

                this.timer = 0;
        
                this.stage = new Stage({
                    spritesheet: this.spritesheet
                });
        
                this.resizeWindow();
                this.initFX(resources);
                this.bindEvents();
                this.update();
            });
    }

    initFX(resources) {
        this.stage.fx.initBundle(resources.fx_settings.data, resources.fx_spritesheet);
    }

    bindEvents() {
        window.addEventListener('resize', this.resizeWindow.bind(this));
    }

    resizeWindow() {
        this.renderer.resize(window.innerWidth, window.innerHeight);
    }

    update() {
        this.renderer.render(this.stage);

        if (this.stage.ticker.started) {
            this.stage.setFPSText('FPS: ' + Math.floor(this.stage.ticker.FPS));

            this.timer += this.stage.ticker.elapsedMS;

            this.stage.animate();
            this.stage.tickTask2Timer();

            if (this.timer >= 1000) {
                this.timer = 0;

                this.stage.addSpriteToReversedArray();
            }
        }

        requestAnimationFrame(this.update.bind(this));
    }
}

export default Game;