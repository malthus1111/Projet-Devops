// src/controllers/spaceController.ts

import { SpaceData, SpaceDocument, SpaceModel } from "../models/space";

export class SpaceController {
    // Create
    async createSpace(spaceData: SpaceData): Promise<SpaceDocument> {
        const newSpace = new SpaceModel(spaceData);
        await newSpace.save();
        return newSpace;
    }

    // Read
    async getSpace(id: string): Promise<SpaceDocument | null> {
        return await SpaceModel.findById(id).exec();
    }

    async getAllSpaces(): Promise<SpaceDocument[]> {
        return await SpaceModel.find().exec();
    }

    // Update
    async updateSpace(id: string, updatedSpaceData: Partial<SpaceData>): Promise<SpaceDocument | null> {
        return await SpaceModel.findByIdAndUpdate(id, updatedSpaceData, { new: true }).exec();
    }

    async deleteSpace(id: string): Promise<boolean> {
        const result = await SpaceModel.findByIdAndDelete(id).exec();
        return !!result;
    }
}

