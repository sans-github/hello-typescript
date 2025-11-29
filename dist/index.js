"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms"));
app.get("/test", (req, res) => {
    console.log(req.headers);
    res.send("Hello world! Your coffee might be cold, but your code is hot 🔥🔥🔥");
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
