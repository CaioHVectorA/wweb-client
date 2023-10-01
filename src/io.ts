import { Socket, Server } from "socket.io";
import { Client } from 'whatsapp-web.js'
export function middleSocket(socket: Server, client: Client) {
    socket.on('message', (value) => {
        console.log('mandou msg!', value)
        client.sendMessage('send_message',value)
    })
}