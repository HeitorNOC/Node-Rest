import { Request, Response } from "express";
import { SuccessResponse } from "../response/response";
import { GetAllUsersUseCaseRepository, GetUserByIdUseCaseRepository } from "../../../infrastructure/provider/repository/userRepository";
import { GetAllUsersUseCase } from "../../../domain/usecase/getAllUsers";
import { GetUserByIdUseCase } from "../../../domain/usecase/getUserById";
import { GetUserByIdUseCaseRequest } from "../../../domain/usecase/ucio/user";

class UserController {
    async getAllUsers(req: Request, res: Response): Promise<void> {
        const repository = new GetAllUsersUseCaseRepository()
        const usecase = new GetAllUsersUseCase(repository)

        const ucRes = await usecase.getAllUsers()

        new SuccessResponse().success(res, ucRes)
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        const { id } = req.body
        const ucReq = new GetUserByIdUseCaseRequest(id)

        const repository = new GetUserByIdUseCaseRepository()
        const usecase = new GetUserByIdUseCase(repository)

        const ucRes = await usecase.getUserById(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export {UserController}