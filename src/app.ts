import express, { NextFunction, Request, Response } from 'express';

export const app = express();

app.get("/", (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({
        status: 'success',
        message: 'hello world'
    });
})

