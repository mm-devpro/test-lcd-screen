// Each number from 0 to 9 is represented in Array numbers as a string to display
// If other characters to display, it could be better to have a file just for this data
const dataNumbers: Array<string> = [
    ' _ | ||_|',
    '     |  |',
    ' _  _||_ ',
    ' _  _| _|',
    '   |_|  |',
    ' _ |_  _|',
    ' _ |_ |_|',
    ' _   |  |',
    ' _ |_||_|',
    ' _ |_|  |'
]


class LCDScreen {
    constructor() {
        this.getInput = this.getInput.bind(this);
        this.createElement = this.createElement.bind(this);
        this.displayGrid = this.displayGrid.bind(this);
    }

    // 1) Get the input and split it to work on each number of the initial input
    getInput = (input:number) => {
        if (!input || isNaN(input)) return console.error(`${input} is not a number`);

        let numbersToDisplay: Array<string> = (""+input).split('');
        return numbersToDisplay

    }

    // 2) Create an element for one number (= a 3x3 box)
    createElement = (el: string) => {
        return dataNumbers[+el].split('');
    }

    // 3) bring all numbers together in order to display the full input side by side
    displayGrid = (input:number) => {
        if (!input || isNaN(input)) return console.error(`${input} is not a number`);

        let numImputed: string[] = this.getInput(input);

        const gridElement = numImputed.map((n) => this.createElement(n));

        let firstLine = [];
        let secondLine = [];
        let thirdLine = [];

        for (let i = 0; i < gridElement.length; i++) {
            firstLine.push(`${gridElement[i][0]}${gridElement[i][1]}${gridElement[i][2]}`);
            secondLine.push(`${gridElement[i][3]}${gridElement[i][4]}${gridElement[i][5]}`);
            thirdLine.push(`${gridElement[i][6]}${gridElement[i][7]}${gridElement[i][8]}`);
        }

        console.log(firstLine.join(' '))
        console.log(secondLine.join(' '))
        console.log(thirdLine.join(' '))

    }
}

module.exports = LCDScreen;