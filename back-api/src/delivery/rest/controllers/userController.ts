import { Request, Response } from "express";
import { SuccessResponse } from "../response/response";
import { GetAllUsersUseCaseRepository } from "../../../infrastructure/provider/repository/userRepository";
import { GetAllUsersUseCase } from "../../../domain/usecase/getAllUsers";

class UserController {
    async getAllUsers(req: Request, res: Response): Promise<void> {
        const repository = new GetAllUsersUseCaseRepository()
        const usecase = new GetAllUsersUseCase(repository)

        const ucRes = await usecase.getAllUsers()

        new SuccessResponse().success(res, ucRes)
    }
}

export {UserController}