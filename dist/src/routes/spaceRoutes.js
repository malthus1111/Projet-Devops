"use strict";
// src/routes/spaceRoutes.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const spaceController_1 = require("../controllers/spaceController");
const router = express.Router();
const spaceController = new spaceController_1.SpaceController();
// Create
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSpace = yield spaceController.createSpace(req.body);
        res.status(201).json(newSpace);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating space", error });
    }
}));
// Read
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const space = yield spaceController.getSpace(req.params.id);
        if (space) {
            res.json(space);
        }
        else {
            res.status(404).json({ message: "Space not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching space", error });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spaces = yield spaceController.getAllSpaces();
        res.json(spaces);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching spaces", error });
    }
}));
// Update
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedSpace = yield spaceController.updateSpace(req.params.id, req.body);
        if (updatedSpace) {
            res.json(updatedSpace);
        }
        else {
            res.status(404).json({ message: "Space not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error updating space", error });
    }
}));
// Delete
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = yield spaceController.deleteSpace(req.params.id);
        if (success) {
            res.status(204).end();
        }
        else {
            res.status(404).json({ message: "Space not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting space", error });
    }
}));
exports.default = router;
//# sourceMappingURL=spaceRoutes.js.map