import * as express from 'express';
import {Express, Request} from "express";
import { AnimalController } from '../controllers/animalController';

const router = express.Router();
const animalController = new AnimalController();

router.post('/', async (req, res) => {
    try {
        const newAnimal = await animalController.createAnimal(req.body);
        res.status(201).json(newAnimal);
    } catch (error) {
        res.status(500).json({ message: 'Error creating animal', error });
    }
});

export default router;
