"use strict";
// src/controllers/spaceController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceController = void 0;
const space_1 = require("../models/space");
class SpaceController {
    // Create
    createSpace(spaceData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newSpace = new space_1.SpaceModel(spaceData);
            yield newSpace.save();
            return newSpace;
        });
    }
    // Read
    getSpace(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield space_1.SpaceModel.findById(id).exec();
        });
    }
    getAllSpaces() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield space_1.SpaceModel.find().exec();
        });
    }
    // Update
    updateSpace(id, updatedSpaceData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield space_1.SpaceModel.findByIdAndUpdate(id, updatedSpaceData, { new: true }).exec();
        });
    }
    deleteSpace(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield space_1.SpaceModel.findByIdAndDelete(id).exec();
            return !!result;
        });
    }
}
exports.SpaceController = SpaceController;
//# sourceMappingURL=spaceController.js.map