import { AnimalModel, AnimalData } from '../models/animal';

import { SpaceModel } from '../models/space'; // Import the SpaceModel

export class AnimalController {
    async createAnimal(animalData: AnimalData) {
        const newAnimal = new AnimalModel(animalData);
        await newAnimal.save();

        // After saving the new animal, find the associated space and add the animal's ID to its animals array
        const space = await SpaceModel.findById(animalData.space);
        if (space) {
            space.animals.push(newAnimal._id);
            await space.save();
        }
        return newAnimal;
    }
    async getAnimalById(id: string) {
        return await AnimalModel.findById(id);
    }

    async getAllAnimals(): Promise<AnimalData[]> {
        return await AnimalModel.find();
    }

    async getAnimalsBySpace(spaceId: string): Promise<AnimalData[]> {
        return await AnimalModel.find({ space: spaceId });
    }

    async updateAnimal(id: string, animalData: any) {
        const updatedAnimal = await AnimalModel.findByIdAndUpdate(id, animalData, { new: true });
        return updatedAnimal;
    }

    async deleteAnimal(animalId: string) {
        // Find the animal by ID
        const animal = await AnimalModel.findById(animalId);

        if (animal) {
            // Find the associated space
            const space = await SpaceModel.findById(animal.space);

            if (space) {
                // Remove the animal ID from the space's animals array
                space.animals = space.animals.filter((id) => id.toString() !== animalId);
                await space.save();
            }

            // Delete the animal
            await AnimalModel.findByIdAndDelete(animalId);
            return animal;
        } else {
            throw new Error('Animal not found');
        }
    }
}
