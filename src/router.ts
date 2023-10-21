import { Request, Response, Router } from "express";
import { join } from "path";
import { getQRController } from "./modules/getQR/getQR.controller";
import GroupController from "./modules/groups/group.controller";
const groupController = new GroupController()
export const router = Router()

router.get('/qr', getQRController)
// os dois pontos é referente a DIST!!! Se for na pasta root nao funfa
const path = join(__dirname,'..','/public/') 
router.get('/home',(req: Request, res: Response) => {
    res.sendFile(path+'home.html')
})
router.get('/',(req: Request, res: Response) => {
    res.sendFile(path+'index.html')
})

router.get('/groups', groupController.getGroups)
router.post('/groups', groupController.createOrUpdate)