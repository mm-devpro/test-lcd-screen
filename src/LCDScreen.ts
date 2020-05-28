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
        this.getInputIntoArray = this.getInputIntoArray.bind(this);
        this.createElement = this.createElement.bind(this);
        this.displayGrid = this.displayGrid.bind(this);
    }

    // 1) Get the input and split it to work on each number of the initial input
    getInputIntoArray = (input:number) => {
        if (!input || isNaN(+input)) return console.error(`${input} is not a number`);

        let numbersToDisplay: Array<string> = (""+input).split('');
        return numbersToDisplay


    }

    // 2) Create an element for one number (= a 3x3 box)
    createElement = (el: string) => {
        return dataNumbers[+el].split('');
    }

    // 3) bring all numbers together in order to display the full input side by side
    displayGrid = (input:number) => {
        // Check if input is a number
        if (!input || isNaN(+input)) return console.error(`${input} is not a number`);

        // Store the input into array thanks to getInputIntoArray method
        const numImputed: string[] = this.getInputIntoArray(input);

        // Create an element for each number of the input and store it into the gridElement
        const gridElement = numImputed.map((n) => this.createElement(n));

        // Loop over the gridElement to be able to display each of the three lines one by one
        let firstLine = [];
        let secondLine = [];
        let thirdLine = [];

        for (let i = 0; i < gridElement.length; i++) {
            firstLine.push(`${gridElement[i][0]}${gridElement[i][1]}${gridElement[i][2]}`);
            secondLine.push(`${gridElement[i][3]}${gridElement[i][4]}${gridElement[i][5]}`);
            thirdLine.push(`${gridElement[i][6]}${gridElement[i][7]}${gridElement[i][8]}`);
        }

        // display numbers side by side
        console.log(firstLine.join(' '))
        console.log(secondLine.join(' '))
        console.log(thirdLine.join(' '))

    }
}

module.exports = LCDScreen;