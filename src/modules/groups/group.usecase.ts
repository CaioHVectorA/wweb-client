import { Groups } from "@prisma/client";
import { prisma } from "../../util/prisma.client";
import { AppError } from "../../config/error";

export class GroupUseCase {
    async createOrUpdate(data: string): Promise<Groups> {
        const exists = await prisma.groups.findFirst()
        if (exists) {
            const updatedGroup = await prisma.groups.update({ where: { id: exists.id }, data: { data } })
            return updatedGroup
        } else {
            const newGroup = await prisma.groups.create({
                data: {
                    data
                }
            })
            return newGroup
        }
    }
    async getGroups(): Promise<Groups> {
        const group = await prisma.groups.findFirst()
        if (!group) throw new AppError('Não há grupos')
        return group
    }
}