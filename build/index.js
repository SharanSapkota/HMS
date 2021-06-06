"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/', routes_1.default);
app.get("/", function (req, res) {
    console.log("abc");
    console.log(req, res);
    res.json({ message: "success11" });
});
var ur = "mongodb+srv://sharan123:sharan123k@cluster0.ytgcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose_1.default.connect(ur, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, function () {
    console.log("DB connection established");
});
app.listen(5000, function () {
    console.log("server started at 5000");
});
