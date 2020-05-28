import express, { NextFunction, Request, Response } from 'express';

//import {displayGrid} from "./screen";
const LCDScreen = require('./LCDScreen')

export const app = express();

app.get("/", (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({
        status: 'success',
        message: 'hello world'
    });
})

const screen = new LCDScreen

screen.displayGrid(1234567890)
