"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleSocket = void 0;
function middleSocket(socket, client) {
    socket.on('message', function (value) {
        console.log('mandou msg!', value);
        client.sendMessage('send_message', value);
    });
}
exports.middleSocket = middleSocket;
//# sourceMappingURL=io.js.map