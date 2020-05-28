"use strict";
// Each number from 0 to 9 is represented in Array numbers as a string to display
// If other characters to display, it could be better to have a file just for this data
var dataNumbers = [
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
];
var LCDScreen = /** @class */ (function () {
    function LCDScreen() {
        var _this = this;
        // 1) Get the input and split it to work on each number of the initial input
        this.getInputIntoArray = function (input) {
            if (!input || isNaN(+input))
                return console.error(input + " is not a number");
            var numbersToDisplay = ("" + input).split('');
            return numbersToDisplay;
        };
        // 2) Create an element for one number (= a 3x3 box)
        this.createElement = function (el) {
            return dataNumbers[+el].split('');
        };
        // 3) bring all numbers together in order to display the full input side by side
        this.displayGrid = function (input) {
            // Check if input is a number
            if (!input || isNaN(+input))
                return console.error(input + " is not a number");
            // Store the input into array thanks to getInputIntoArray method
            var numImputed = _this.getInputIntoArray(input);
            // Create an element for each number of the input and store it into the gridElement
            var gridElement = numImputed.map(function (n) { return _this.createElement(n); });
            // Loop over the gridElement to be able to display each of the three lines one by one
            var firstLine = [];
            var secondLine = [];
            var thirdLine = [];
            for (var i = 0; i < gridElement.length; i++) {
                firstLine.push("" + gridElement[i][0] + gridElement[i][1] + gridElement[i][2]);
                secondLine.push("" + gridElement[i][3] + gridElement[i][4] + gridElement[i][5]);
                thirdLine.push("" + gridElement[i][6] + gridElement[i][7] + gridElement[i][8]);
            }
            // display numbers side by side
            console.log(firstLine.join(' '));
            console.log(secondLine.join(' '));
            console.log(thirdLine.join(' '));
        };
        this.getInputIntoArray = this.getInputIntoArray.bind(this);
        this.createElement = this.createElement.bind(this);
        this.displayGrid = this.displayGrid.bind(this);
    }
    return LCDScreen;
}());
module.exports = LCDScreen;
//# sourceMappingURL=LCDScreen.js.map