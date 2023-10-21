import { qr } from "@prisma/client";
import { prisma } from "../../util/prisma.client";
import { AppError } from "../../config/error";
type qrProps = { base64: string, qrcode: string  }
export async function getQRUseCase(): Promise<qr> {
    const found = await prisma.qr.findFirst()
    if (!found) throw new AppError('Não achou QRCode!')
    return found
}