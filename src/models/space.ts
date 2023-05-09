// src/models/space.ts

import mongoose from "mongoose";

export interface SpaceData {
    _id?: mongoose.Types.ObjectId;
    name: string;
    description: string;
    images: string[];
    type: string;
    capacity: number;
    duration: number;
    openingHours: string;
    disabledAccess: boolean;
    maintenance?: boolean;
}

const spaceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: [String],
    type: { type: String, required: true },
    capacity: { type: Number, required: true },
    duration: { type: Number, required: true },
    openingHours: { type: String, required: true },
    disabledAccess: { type: Boolean, required: true },
    maintenance: { type: Boolean, default: false },
});

export type SpaceDocument = SpaceData & mongoose.Document;

export const SpaceModel = mongoose.model<SpaceDocument>("Space", spaceSchema);
