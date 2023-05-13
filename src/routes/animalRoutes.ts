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

// Get all animals
router.get("/", async (req, res) => {
    try {
        const animals = await animalController.getAllAnimals();
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ message: "Error getting animals", error });
    }
});

// Get animal by id
router.get("/:id", async (req, res) => {
    try {
        const animal = await animalController.getAnimalById(req.params.id);
        res.status(200).json(animal);
    } catch (error) {
        res.status(500).json({ message: "Error fetching animal", error });
    }
});

// Get animals by space
router.get("/space/:spaceId", async (req, res) => {
    try {
        const animals = await animalController.getAnimalsBySpace(req.params.spaceId);
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ message: "Error getting animals", error });
    }
});

// Update an animal
router.put("/:id", async (req, res) => {
    try {
        const updatedAnimal = await animalController.updateAnimal(req.params.id, req.body);
        res.status(200).json(updatedAnimal);
    } catch (error) {
        res.status(500).json({ message: "Error updating animal", error });
    }
});

// Delete an animal
router.delete("/:id", async (req, res) => {
    try {
        await animalController.deleteAnimal(req.params.id);
        res.status(200).json({ message: `Animal with id: ${req.params.id} deleted successfully.` });
    } catch (error) {
        res.status(500).json({ message: "Error deleting animal", error });
    }
});



export default router;
