import { Client, LocalAuth, AuthStrategy } from 'whatsapp-web.js'
import express, { Request, Response } from 'express'
import QRCode from 'qrcode'
import { Server } from 'socket.io'
import { createServer } from "http";
import { router } from './router';
import { notify } from 'node-notifier'
const app = express()
app.use(express.static('public'))
app.use(router)
const http = createServer(app)
const client = new Client({
    authStrategy: new LocalAuth()
})
const io = new Server(http, {
    cors: {
        origin: '*', credentials: true
    }
})
let QR = null as string | null

client.on('qr', (qr) => {
    QRCode.toDataURL(qr, function(err, _qr) {QR = _qr ; console.log(_qr)})
})

client.on('ready', async () => {
    io.emit('QR_ON')
    // const t = await client.getChats()
    notify('Conectou!')
});
client.on('message_create', (m) => {
    // console.log(m.vCards.map(i => {
    //     if (!i.includes('waid')) return null
    //     return i.split('TEL;')[1].replace('waid=','').split(':')[0]
    // }).filter(i => !!i)
    // )
})
io.on("connection", (socket) => {
    socket.on('send_message', (value) => {
        console.log('mandou msg!', value)
        // new Message
        // client.sendMessage('5521986723607@c.us',value)
        client.sendMessage('559992128746@c.us',value)
        client.sendMessage('5521986723607@c.us',value)
    })
  });
// middleSocket(io, client)
app.get('/qr', (req: Request, res: Response) => {
    if (!!!QR) return res.status(404).json({})
    return res.status(200).json({value: QR || null})
})

http.listen(3000, () => console.log('Server Running 3000 🙏🚀'))
client.initialize();