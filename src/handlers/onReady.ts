import { Server } from "socket.io";
import { wweblog } from "../lib/console";
import { Client } from "whatsapp-web.js";
import { IO_EMITERS } from "../util/ioEvents";
import axios from "axios";
import { thisURL } from "../util/envariables";

export async function onReady(client: Client, io: Server) {
    wweblog('Cliente pronto! Carregando os grupos...')
    const chats = await client.getChats()
    const groups = chats.filter(i => i.isGroup === true && i.isReadOnly === false).map(({ name, id, getContact  }) => {
        // const d = await getContact()
        // console.log(d)
        // console.log({name,id: id._serialized})
        return {
            name,
            id,
        }
    })
    axios.post(thisURL+'/groups',groups).then(res => console.log('Deu update nos grupos!')).catch(err => console.log('ERRO AI DAR FETCH:', err))
    wweblog(`Grupos carregados e filtrados! Número de grupos: ${groups.length}. Agora os grupos serão enviados via WebSocket.`)
    io.emit(IO_EMITERS.QR, JSON.stringify(groups))
}