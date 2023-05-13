// src/routes/spaceRoutes.ts

import * as express from 'express';
import {Express, Request} from "express";
import { SpaceController } from "../controllers/spaceController";
import * as path from "path";
import { authorizeRoles } from '../middleware/auth';

const router = express.Router();
const spaceController = new SpaceController();

// Create
router.post("/", async (req, res) => {
    try {
        const newSpace = await spaceController.createSpace(req.body);
        res.status(201).json(newSpace);
    } catch (error) {
        res.status(500).json({ message: "Error creating space", error });
    }
});

// Read
router.get("/:id", async (req, res) => {
    try {
        const space = await spaceController.getSpace(req.params.id);
        if (space) {
            res.json(space);
        } else {
            res.status(404).json({ message: "Space not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching space", error });
    }
});



router.get("/", async (req, res) => {
    try {
        const spaces = await spaceController.getAllSpaces();
        res.json(spaces);
    } catch (error) {
        res.status(500).json({ message: "Error fetching spaces", error });
    }
});

// Update
router.put("/:id", async (req, res) => {
    try {
        const updatedSpace = await spaceController.updateSpace(req.params.id, req.body);
        if (updatedSpace) {
            res.json(updatedSpace);
        } else {
            res.status(404).json({ message: "Space not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating space", error });
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        const success = await spaceController.deleteSpace(req.params.id);
        if (success) {
            res.status(204).json({message: "Space successfully deleted"});
        } else {
            res.status(404).json({ message: "Space not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting space", error });
    }
});

export default router;
