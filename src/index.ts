import { Client, LocalAuth, AuthStrategy, LegacySessionAuth, MessageContent, GroupChat, ChatId } from 'whatsapp-web.js'
import express, { NextFunction, Request, Response } from 'express'
import QRCode from 'qrcode'
import { Server } from 'socket.io'
import { createServer } from "http";
import { join } from 'path';
import { router } from './router';
import { notify } from 'node-notifier'
import { createQR } from './handlers/createQR';
import { onReady } from './handlers/onReady';
import { socketConfigs } from './handlers/socketConfigs';
import Middleware from './config/defaultConfig';
import 'express-async-errors'
import cors from 'cors';
import { AppError } from './config/error';
import { IO_RECEIVERS } from './util/ioEvents';
import { wweblog } from './lib/console';
const app = express()
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'))
app.use(router);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

const http = createServer(app)
const client = new Client({
    authStrategy: new LocalAuth(),
    // puppeteer: {
        //     executablePath: "/usr/bin/chromium-browser",
        //     args: ["--no-sandbox","--disable-setuid-sandbox"],
        // }
    })
    const io = new Server(http, {   
        cors: {
            origin: '*', credentials: true
        }
    })
let isClientOn = false;    
let isQROn = null as null | string
client.on('qr', (qr) => {
  isQROn = qr
  createQR(qr,io)
})
client.on('ready', () => onReady(client, io));
io.on("connection", (socket) => {
  socketConfigs(socket, client)
  socket.on(IO_RECEIVERS.INIT_CLIENT, () => {
    if (isClientOn) {
      onReady(client, io)
    } else if (isQROn) {
      createQR(isQROn,io)
    } else {
      wweblog('Iniciando Cliente!')
      client.initialize();
    }
  })
});
http.listen(3000, () => console.log('Server Running 3000 🙏🚀'))
