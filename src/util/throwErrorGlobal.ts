import { AppError } from "../config/error";

export function throwErrorGlobal(err: Error) {
    if (err instanceof AppError) {
        return new AppError(err.message,err.statusCode)
    } else {
        return new AppError('Algo deu errado...')
    }
}