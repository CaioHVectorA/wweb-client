"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var whatsapp_web_js_1 = require("whatsapp-web.js");
var express_1 = __importDefault(require("express"));
var qrcode_1 = __importDefault(require("qrcode"));
var socket_io_1 = require("socket.io");
var http_1 = require("http");
var router_1 = require("./router");
var node_notifier_1 = require("node-notifier");
var app = (0, express_1.default)();
app.use(express_1.default.static('public'));
app.use(router_1.router);
var http = (0, http_1.createServer)(app);
var client = new whatsapp_web_js_1.Client({
    authStrategy: new whatsapp_web_js_1.LocalAuth()
});
var io = new socket_io_1.Server(http, {
    cors: {
        origin: '*', credentials: true
    }
});
var QR = null;
client.on('qr', function (qr) {
    qrcode_1.default.toDataURL(qr, function (err, _qr) { QR = _qr; console.log(_qr); });
});
client.on('ready', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        io.emit('QR_ON');
        // const t = await client.getChats()
        (0, node_notifier_1.notify)('Conectou!');
        return [2 /*return*/];
    });
}); });
client.on('message_create', function (m) {
    // console.log(m.vCards.map(i => {
    //     if (!i.includes('waid')) return null
    //     return i.split('TEL;')[1].replace('waid=','').split(':')[0]
    // }).filter(i => !!i)
    // )
});
io.on("connection", function (socket) {
    socket.on('send_message', function (value) {
        console.log('mandou msg!', value);
        // new Message
        // client.sendMessage('5521986723607@c.us',value)
        client.sendMessage('559992128746@c.us', value);
        client.sendMessage('5521986723607@c.us', value);
    });
});
// middleSocket(io, client)
app.get('/qr', function (req, res) {
    if (!!!QR)
        return res.status(404).json({});
    return res.status(200).json({ value: QR || null });
});
http.listen(3000, function () { return console.log('Server Running 3000 🙏🚀'); });
client.initialize();
//# sourceMappingURL=index.js.map