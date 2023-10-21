import { wweblog } from "../lib/console";
import * as QRCode from "qrcode";
import { prisma } from "../util/prisma.client";
export async function createQR(qr: string) {
    wweblog('Enviou QR')
    const base64 = await QRCode.toDataURL(qr)
    const currentQR = await prisma.qr.findFirst()
    if (!currentQR) {
        await prisma.qr.create({
            data: {
                base64,
                qrcode: qr,
            }
        })
    } else {
        const newQR = await prisma.qr.update({
            where: {id: currentQR.id},
            data: {
                base64,
                qrcode: qr,
            }
        })
    }
}