import mongoose from "mongoose";

export async function connectToDatabase(): Promise<void> {
    const connectionString = process.env.MONGO_URI || "mongodb://localhost:27017/zoo";

    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true
        } as mongoose.ConnectOptions);
        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
