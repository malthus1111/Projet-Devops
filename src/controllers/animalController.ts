import { AnimalModel, AnimalData } from '../models/animal';

export class AnimalController {
    async createAnimal(animalData: AnimalData) {
        const newAnimal = new AnimalModel(animalData);
        await newAnimal.save();
        return newAnimal;
    }
}
