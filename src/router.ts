import { Request, Response, Router } from "express";
import { join } from "path";
import { getQRController } from "./modules/getQR/getQR.controller";
import GroupController from "./modules/groups/group.controller";
import { existsSync } from "fs";
const groupController = new GroupController()
export const router = Router()

router.get('/qr', getQRController)
// os dois pontos é referente a DIST!!! Se for na pasta root nao funfa
const path = join(__dirname,'..','/static/') 
// router.get('/home',(req: Request, res: Response) => {
//     res.sendFile(path+'home.html')
// })
router.get('/',(req: Request, res: Response) => {
    res.sendFile(path+'index.html')
})
router.get('/qrcode',(req: Request, res: Response) => {
    res.sendFile(path+'qrcode.html')
})

router.get('/groups', groupController.getGroups)
router.post('/groups', groupController.createOrUpdate)

router.get('/scream1-home', (req, res) => {
    res.sendFile(path+'scream1-home/'+'index.html')
})
router.get('/scream2-presenca', (req, res) => {
    res.sendFile(path+'scream2-presenca/'+'index.html')
})
router.get('/scream3-calendario', (req, res) => {
    res.sendFile(path+'scream3-calendario/'+'index.html')
})

// router.get('/:route', (req, res) => {
//     // console.log(req.params.route)
//     const file = path+req.params.route+'.html'
//     const direct = existsSync(path+req.params.route+'/index.html')
//     if (req.params.route.includes('.html')) return res.sendFile(path+req.params.route)
//     if (!direct) {
//         res.sendFile(path+req.params.route+'.html')
//     } else {
//         res.sendFile(path+req.params.route+'/index.html')
//     }
// })


// router.get('/:route/:subroute', (req, res) => {
//     res.sendFile(path+req.params.route+req.params.subroute+'index.html')
// })