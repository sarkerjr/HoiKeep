"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHall = void 0;
const tslib_1 = require("tslib");
const hall_controller_1 = require("@controllers/admin/hall.controller");
const createHall = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { name, nameTag, type } = req.body;
    const hall = yield (0, hall_controller_1.create)(name, nameTag, type);
    return res.status(201).json(hall);
});
exports.createHall = createHall;
//# sourceMappingURL=hall.services.js.map