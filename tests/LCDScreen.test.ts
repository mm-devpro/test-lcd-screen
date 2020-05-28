const LCDScreen = require('../src/LCDScreen');

const screenTest = new LCDScreen();

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1) + min)
}


test('the method getInputIntoArray brings an object', () => {
    const randomInt = getRandomInteger(0, 9999999999);
    expect(typeof screenTest.getInputIntoArray(randomInt)).toBe('object');

})