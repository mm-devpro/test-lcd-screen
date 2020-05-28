// // Each number from 0 to 9 is represented in Array numbers as a string to display
// const numbers: Array<string> = [
//     ' _ | ||_|',
//     '     |  |',
//     ' _  _||_ ',
//     ' _  _| _|',
//     '   |_|  |',
//     ' _ |_  _|',
//     ' _ |_ |_|',
//     ' _   |  |',
//     ' _ |_||_|',
//     ' _ |_|  |'
// ]
//
// // 1) Get the input and split it to work on each number of the initial input
// export const getInput = (input: number) => {
//
//     let numbersToDisplay: Array<string> = (""+input).split('');
//     return numbersToDisplay
//
// }
//
// // 2) Create an element for one number (= a 3x3 box)
// export const displayElement = (el:string) => {
//     return numbers[+el].split('');
// }
//
//
// // 3) bring all numbers together in order to display the full input side by side
// export const displayGrid = (input:number) => {
//     if (!input || isNaN(input)) return;
//
//     let numImputed : string[] = getInput(input);
//
//     console.log(numImputed)
//
//     const juju = numImputed.map( (n) => displayElement(n));
//
//     console.log(juju);
//
//     let firstLine = [];
//     let secondLine = [];
//     let thirdLine = [];
//
//     for (let i =0; i < juju.length; i++) {
//         firstLine.push(`${juju[i][0]}${juju[i][1]}${juju[i][2]}`);
//         secondLine.push(`${juju[i][3]}${juju[i][4]}${juju[i][5]}`);
//         thirdLine.push(`${juju[i][6]}${juju[i][7]}${juju[i][8]}`);
//     }
//     console.log(firstLine.join(' '))
//     console.log(secondLine.join(' '))
//     console.log(thirdLine.join(' '))
//
//
// }
//
