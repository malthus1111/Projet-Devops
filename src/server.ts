// src/server.ts


import app from "./app";
import { connectToDatabase } from "./config/database";

const port = process.env.PORT || 3000;

(async () => {
    await connectToDatabase();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})();

// oui