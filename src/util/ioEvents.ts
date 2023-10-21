export const IO_EMITERS = {
    SEND_QR: 'SEND_QR', // Pra enviar o QR por websockets, no caso para uma melhor rapidez.
    QR: 'QR_ON', // Pra quando deve trocar de página no client.
}

export const IO_RECEIVERS = {
    MESSAGE: 'send_message',
    INIT_CLIENT: 'client_init'
}