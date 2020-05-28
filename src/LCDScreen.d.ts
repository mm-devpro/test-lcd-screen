declare const dataNumbers: Array<string>;
declare class LCDScreen {
    constructor();
    getInputIntoArray: (input: number) => void | string[];
    createElement: (el: string) => string[];
    displayGrid: (input: number) => void;
}
