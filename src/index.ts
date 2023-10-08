import { Client, LocalAuth, AuthStrategy, LegacySessionAuth, MessageContent } from 'whatsapp-web.js'
import express, { Request, Response } from 'express'
import QRCode from 'qrcode'
import { Server } from 'socket.io'
import { createServer } from "http";
import { router } from './router';
import { notify } from 'node-notifier'
import { group } from 'console';
import { info } from 'veclog';
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
    const chats = await client.getChats()
    io.emit('QR_ON',JSON.stringify(chats.filter(i => i.isGroup === true && i.isReadOnly === false).map(({ name, id, getContact  }) => {
        // const d = await getContact()
        // console.log(d)
        // console.log({name,id: id._serialized})
        return {
            name,
            id,
        }
    })))
    // const t = await client.getChats()
    notify('Conectou!')
});
// client.on('message_create', (m) => {
//     console.log(m.body)
//     // console.log(m.from)
//     client.sendMessage(m.from, JSON.stringify(m.from))
//     // const chat = await m.getChat()
//     // console.log(chat)
//     // console.log(m.vCards.map(i => {
//     //     if (!i.includes('waid')) return null
//     //     return i.split('TEL;')[1].replace('waid=','').split(':')[0]
//     // }).filter(i => !!i)
//     // )
// })
client.on('authenticated', session => console.log(session))

io.on("connection", (socket) => {
    socket.on('send_message', ({ groups, message }: { groups: string, message: MessageContent }) => {
        // console.log(groups.length, groups)
        JSON.parse(groups).forEach((group: string) => {
            // numero estranho nao manda a msg - ver como é... (perguntar no discord?)
            try {
                let number: string = group.split('-')[1];
                console.log(number)
                client.getChatById(group).then(chat => {
                    console.log(chat)
                    console.log('nome:',chat.name)
                    chat.sendMessage(message)
                })
                // client.sendMessage(number, message)
            } catch (error) {
                info(['Número errado!',group,error])
            }
        })
        // const 
        // new Message
        // client.sendMessage('5521986723607@c.us',value)
        // client.sendMessage('559992128746@c.us',value)
        // client.sendMessage('5521986723607@c.us',value)
    })
  });
// middleSocket(io, client)
app.get('/qr', (req: Request, res: Response) => {
    if (!!!QR) return res.status(404).json({})
    return res.status(200).json({value: QR || null})
})

http.listen(3000, () => console.log('Server Running 3000 🙏🚀'))
client.initialize();