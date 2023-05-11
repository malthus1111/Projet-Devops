// src/app.ts

import * as express from 'express';
import {Express, Request} from "express";
import spaceRoutes from "./routes/spaceRoutes";
//import employeeRoutes from "./routes/employeeRoutes";
//import ticketRoutes from "./routes/ticketRoutes";
import animalRoutes from './routes/animalRoutes';



const app = express();

app.use(express.json());
app.use("/spaces", spaceRoutes);
app.use('/animals', animalRoutes);
//app.use("/animals", animalRoutes);
//app.use("/employees", employeeRoutes);
//app.use("/tickets", ticketRoutes);

export default app;
