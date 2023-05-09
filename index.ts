import * as express from 'express';
import {Express, Request} from "express";
const app: Express = express();



app.listen(3000,function ():void{
    console.log("listening on port 3000...");
});