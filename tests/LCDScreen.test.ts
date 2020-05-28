const LCDScreen = require('../src/LCDScreen');

const screenTest = new LCDScreen();

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1) + min)
}
test('display a number into console', () => {
    const randomInt = getRandomInteger(0, 9999999999);
    expect(typeof screenTest.getInputIntoArray(randomInt)).toBe('array');

})