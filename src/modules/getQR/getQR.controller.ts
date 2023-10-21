import { Request, Response } from "express";
import { getQRUseCase } from "./getQR.usecase";
import { throwErrorGlobal } from "../../util/throwErrorGlobal";
import 'express-async-errors'
export async function getQRController(req: Request, res: Response) {
    const qr = await getQRUseCase()
    res.json(qr)
}