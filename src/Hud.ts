import { Container, Point, Text, Loader } from 'pixi.js';
import { assign as _extend } from 'lodash/object';
import Stage from './Stage';

const MAX_X = window.innerWidth;
const MAX_Y = window.innerHeight;

const HUD_POSITIONS = {
    RIGHT_TOP_CORNER: new Point(MAX_X - 125, 20),
    RIGHT_BOTTOM_CORNER: new Point(MAX_X - 10, MAX_Y - 20),
    CENTER: new Point(MAX_X * 0.50, MAX_Y * 0.50),
    CENTER_TOP: new Point(MAX_X * 0.50 - 200, 10),
    TASK1_BUTTON: new Point(MAX_X * 0.50 - 125, MAX_Y * 0.35),
    TASK2_BUTTON: new Point(MAX_X * 0.50 - 125, MAX_Y * 0.50),
    TASK3_BUTTON: new Point(MAX_X * 0.50 - 125, MAX_Y * 0.65),
    LEFT_TOP_CORNER: new Point(MAX_X * 0.01, 20),
    LEFT_BOTTOM_CORNER: new Point(10, MAX_Y * 0.95)
};

class Hud extends Container {
    randomContainer: any;
    task1Container: any;
    fpsTextBox: any;
    loader: any;
    parent: Stage;
    elementSupport: any;

    /**
     * Hud Constructor
     */
    constructor() {
        super();
        this.loader = PIXI.Loader.shared;
    }

    /**
     * addText for adding PIXI.Text object to the scene with options
     * @param name string - This name becomes accessable the PIXI.Text element on the Hud object
     * @param opts object - Object to text style, text, position, anchor point, etc of the text box
     */
    addText(name, opts) {
        // set defaults, and allow them to be overwritten with _extend
        const options = _extend({
            text: '',
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '18px',
                align: 'left',
                fill: 'white'
            },
            position: new Point(0, 0),
            anchor: {
                x: 0.5,
                y: 0.5
            }
        }, opts);

        this[name + 'TextBox'] = new Text('', options.textStyle);
        const textBox = this[name + 'TextBox'];
        textBox.position.set(options.position.x, options.position.y);
        textBox.anchor.set(options.anchor.x, options.anchor.y);
        textBox.text = options.text;
        this.addChild(textBox);
    }

    /**
     * addButtonContainer for adding interactive and clickable Container which includes Sprite and Text
     * @param name string - This name becomes accessable the PIXI.Container and PIXI.Text element on the Hud object
     * @param opts object - Object to text style, text, text allignment (1=right,-1=left), text margin, position, anchor point, spritesheet etc of the text box and button
     * @param pointerdown function - Function to callback after clicking the button at pointerdown event
     */
    addButtonContainer(name, opts, pointerdown) {
        const options = _extend({
            spriteName: '',
            text: '',
            textAllignment: 1,
            textMargin: 10,
            spritesheet: '',
            position: new Point(0, 0),
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '18px',
                align: 'left',
                fill: 'white'
            },
            anchor: {
                x: 0.5,
                y: 0.5
            }
        }, opts);

        this[name + 'Container'] = new Container();
        const container = this[name + 'Container'];
        container.position.set(options.position.x, options.position.y);

        const button = new PIXI.Sprite(this.loader.resources[options.spritesheet].textures[options.spriteName]);
        button.position.set(button.width, 0);
        button.anchor.set(options.anchor.x, options.anchor.y);
        container.addChild(button);

        this[name + 'TextBox'] = new Text(options.text, options.textStyle);
        const textBox = this[name + 'TextBox'];
        textBox.position.set((button.width + textBox.width + options.textMargin) * options.textAllignment, 0);
        textBox.anchor.set(options.anchor.x * options.textAllignment, 0.5 * options.textAllignment);
        container.addChild(textBox);

        container.interactive = true;
        container.buttonMode = true;
        container.on('pointerdown', pointerdown);

        this.addChild(container);
    }

    /**
     * addRandomContainer for adding Mixed Text and Images in an easy way (image + text + image, image + image + image, image + image + text, etc) and a random font size
     * @param name string - This name becomes accessable the PIXI.Container and PIXI.Text element on the Hud object
     * @param opts object - Object to text style, text, text margin, position, anchor point, spritesheet etc of the text box and sprite
     */
    addRandomContainer(name, opts) {
        const options = _extend({
            spriteName: '',
            text: '',
            textMargin: 10,
            spritesheet: '',
            position: new Point(0, 0),
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '18px',
                align: 'center',
                fill: 'white'
            },
            anchor: {
                x: 0.5,
                y: 0.5
            }
        }, opts);

        //select random font size between 12px and 48px
        let randomFontSize = this.randomInt(12, 48);
        options.textStyle.fontSize = randomFontSize + "px";

        this[name + 'Container'] = new Container();
        const container = this[name + 'Container'];

        let lastElementWidth = 0;
        //select 3 elements (image + text + image, image + image + image, image + image + text, etc)
        for (var i = 0; i < 3; i++) {
            let randomElement = this.randomInt(0, 1); //select random element text or sprite for each of them

            let element;

            if (randomElement == 0) {
                //select random sprites from the spritesheet
                options.spriteName = ((this.randomInt(0, 1) == 1 ? 'dieWhite_border' : 'dieRed_border') + this.randomInt(1, 6) + '.png');
                element = new PIXI.Sprite(this.loader.resources[options.spritesheet].textures[options.spriteName]);
            } else {
                //select random text values from the capital city of countries array
                options.text = this.randomText();
                this[name + 'TextBox'] = new Text(options.text, options.textStyle);
                element = this[name + 'TextBox'];
            }
            let positionX = lastElementWidth + options.textMargin;
            lastElementWidth = positionX + element.width;
            element.position.set(positionX, 0);
            element.anchor.set(0, options.anchor.y);
            container.addChild(element);

        }


        container.position.set((MAX_X - lastElementWidth)/2, options.position.y);

        // Remove previous element before adding a new one
        this.removeChild(this.elementSupport);
        this.elementSupport = container;
        this.addChild(container);
    }

    randomText() {
        let capitalCityOfCountriesArray = ["Sukhumi", "Kabul", "Episkopi Cantonment", "Tirana", "Algiers", "Pago Pago", "Andorra la Vella", "Luanda", "The Valley", "St. John's", "Buenos Aires", "Yerevan", "Oranjestad", "Georgetown", "Canberra", "Vienna", "Baku", "Nassau", "Manama", "Dhaka", "Bridgetown", "Minsk", "Brussels", "Belmopan", "Porto-Novo", "Hamilton", "Thimphu", "Sucre", "La Paz", "Sarajevo", "Gaborone", "Brasília", "Road Town", "Bandar Seri Begawan", "Sofia", "Ouagadougou", "Bujumbura", "Phnom Penh", "Yaoundé", "Ottawa", "Praia", "George Town", "Bangui", "N'Djamena", "Santiago", "Beijing", "Flying Fish Cove", "West Island", "Bogotá", "Moroni", "Avarua", "San José", "Zagreb", "Havana", "Willemstad", "Nicosia", "Prague", "Yamoussoukro", "Kinshasa", "Copenhagen", "Djibouti", "Roseau", "Santo Domingo", "Dili", "Hanga Roa", "Quito", "Cairo", "San Salvador", "Malabo", "Asmara", "Tallinn", "Addis Ababa", "Stanley", "Tórshavn", "Palikir", "Suva", "Helsinki", "Paris", "Cayenne", "Papeete", "Libreville", "Banjul", "Tbilisi", "Berlin", "Accra", "Gibraltar", "Athens", "Nuuk", "St. George's", "Hagåtña", "Guatemala City", "St. Peter Port", "Conakry", "Bissau", "Georgetown", "Port-au-Prince", "Tegucigalpa", "Budapest", "Reykjavík", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Dublin", "Douglas", "Jerusalem", "Rome", "Kingston", "Tokyo", "St. Helier", "Amman", "Astana", "Nairobi", "Tarawa", "Pristina", "Kuwait City", "Bishkek", "Vientiane", "Riga", "Beirut", "Maseru", "Monrovia", "Tripoli", "Vaduz", "Vilnius", "Luxembourg", "Skopje", "Antananarivo", "Lilongwe", "Kuala Lumpur", "Malé", "Bamako", "Valletta", "Majuro", "Nouakchott", "Port Louis", "Mexico City", "Chisinau", "Monaco", "Ulaanbaatar", "Podgorica", "Plymouth", "Rabat", "Maputo", "Naypyidaw", "Stepanakert", "Windhoek", "Yaren", "Kathmandu", "Amsterdam", "Nouméa", "Wellington", "Managua", "Niamey", "Abuja", "Alofi", "Kingston", "Pyongyang", "Nicosia", "Belfast", "Saipan", "Oslo", "Muscat", "Islamabad", "Ngerulmud", "Jerusalem", "Panama City", "Port Moresby", "Asunción", "Lima", "Manila", "Adamstown", "Warsaw", "Lisbon", "San Juan", "Doha", "Taipei", "Brazzaville", "Bucharest", "Moscow", "Kigali", "Gustavia", "Jamestown", "Basseterre", "Castries", "Marigot", "St. Pierre", "Kingstown", "Apia", "San Marino", "Riyadh", "Edinburgh", "Dakar", "Belgrade", "Victoria", "Freetown", "Singapore", "Philipsburg", "Bratislava", "Ljubljana", "Honiara", "Mogadishu", "Hargeisa", "Pretoria", "Grytviken", "Seoul", "Tskhinvali", "Juba", "Madrid", "Sri Jayawardenapura Kotte", "Khartoum", "Paramaribo", "Mbabane", "Stockholm", "Bern", "Damascus", "São Tomé", "Dushanbe", "Dodoma", "Bangkok", "Lomé", "Nuku'alofa", "Tiraspol", "Port of Spain", "Edinburgh of the Seven Seas", "Tunis", "Ankara", "Ashgabat", "Cockburn Town", "Funafuti", "Kampala", "Kiev", "Abu Dhabi", "London", "Washington, D.C.", "Charlotte Amalie", "Montevideo", "Tashkent", "Port Vila", "Vatican City", "Caracas", "Hanoi", "Cardiff", "Mata-Utu", "Laayoune", "San'a", "Lusaka", "Harare"];
        let randomCapitalCityIndex = this.randomInt(0, capitalCityOfCountriesArray.length - 1);

        let beginChars = ["{", "[", "|", "<"];
        let endChars = ["}", "]", "|", ">"];
        let randomCharIndex = this.randomInt(0, beginChars.length - 1);

        return beginChars[randomCharIndex] + capitalCityOfCountriesArray[randomCapitalCityIndex] + endChars[randomCharIndex];
    }

    /**
     * randomInt - The helper function for creating random integer value includes min and max value
     * @param min number - Minimum number of randomization
     * @param max number - Maximum number of randomization
     */
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default Hud;