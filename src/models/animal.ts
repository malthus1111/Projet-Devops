import mongoose from 'mongoose';

interface TreatmentRecordData {
    date: Date;
    treatment: string;
    veterinarian: string;
}

interface AnimalData {
    name: string;
    species: string;
    description: string;
    image: string;
    treatmentRecords: TreatmentRecordData[];
    space: mongoose.Types.ObjectId;
}

interface AnimalDocument extends AnimalData, mongoose.Document {}

const treatmentRecordSchema = new mongoose.Schema<TreatmentRecordData>({
    date: { type: Date, required: true },
    treatment: { type: String, required: true },
    veterinarian: { type: String, required: true },
});

const animalSchema = new mongoose.Schema<AnimalDocument>({
    name: { type: String, required: true },
    species: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    treatmentRecords: [treatmentRecordSchema],
    space: { type: mongoose.Schema.Types.ObjectId, ref: 'Space' },
});

const AnimalModel = mongoose.model<AnimalDocument>('Animal', animalSchema);

export { AnimalModel, AnimalData, AnimalDocument, TreatmentRecordData };
