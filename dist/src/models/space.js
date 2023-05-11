"use strict";
// src/models/space.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceModel = void 0;
const mongoose_1 = require("mongoose");
const spaceSchema = new mongoose_1.default.Schema({
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
exports.SpaceModel = mongoose_1.default.model("Space", spaceSchema);
//# sourceMappingURL=space.js.map