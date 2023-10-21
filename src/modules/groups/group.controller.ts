import { Request, Response } from 'express'
import { GroupUseCase } from './group.usecase'
const usecase = new GroupUseCase()
export default class GroupController {
        async getGroups(req: Request, res: Response) {
            const data = await usecase.getGroups()
            res.json(data)
    }
        async createOrUpdate(req: Request, res: Response) {
            const data = req.body
            const created = await usecase.createOrUpdate(JSON.stringify(data))
            res.json(created)
        }
}