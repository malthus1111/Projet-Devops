"use strict";
// src/app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const spaceRoutes_1 = require("./routes/spaceRoutes");
//import animalRoutes from "./routes/animalRoutes";
//import employeeRoutes from "./routes/employeeRoutes";
//import ticketRoutes from "./routes/ticketRoutes";
const app = express();
app.use(express.json());
app.use("/spaces", spaceRoutes_1.default);
//app.use("/animals", animalRoutes);
//app.use("/employees", employeeRoutes);
//app.use("/tickets", ticketRoutes);
exports.default = app;
//# sourceMappingURL=app.js.map