import { Socket } from "socket.io";
import { Client, MessageContent } from "whatsapp-web.js";
import { wweblog } from "../lib/console";

export function socketConfigs(socket: Socket, client: Client) {
    socket.on('send_message', ({ groups, message }: { groups: string, message: MessageContent }) => {
        wweblog(`Recebeu um sinal de webSockets para enviar mensagens para ${JSON.parse(groups).length} grupos.`)
        JSON.parse(groups).forEach((group: string) => {
            try {
                let number: string = group.split('-')[1];
                client.getChatById(group).then(chat => {
                    console.log(chat)
                    console.log('nome:',chat.name)
                    chat.sendMessage(message)
                }).catch(err => console.log('Erro ao enviar mensagem pra grupo.'))
                // client.sendMessage(number, message)
            } catch (error) {
                console.log(['Número errado!',group,error])
            }
        })
        wweblog(`Mensagens enviadas com sucesso!`)
    })
}