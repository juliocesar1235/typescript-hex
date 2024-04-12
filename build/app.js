"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// Express server
const app = (0, express_1.default)();
const port = 3000;
// Server configuration
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)('dev'));
// Define Express routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
exports.default = app;
