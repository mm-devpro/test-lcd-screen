declare const dataNumbers: Array<string>;
declare class LCDScreen {
    constructor();
    getInput: (input: number) => void | string[];
    createElement: (el: string) => string[];
    displayGrid: (input: number) => void;
}
