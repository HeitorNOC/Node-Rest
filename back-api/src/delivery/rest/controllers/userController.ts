import { Request, Response } from "express";
import { SuccessResponse } from "../response/response";
import { CreateUserUseCaseRepository, GetAllUsersUseCaseRepository, GetUserByIdUseCaseRepository, UpdateUserUseCaseRepository } from "../../../infrastructure/provider/repository/userRepository";
import { GetAllUsersUseCase } from "../../../domain/usecase/getAllUsers";
import { GetUserByIdUseCase } from "../../../domain/usecase/getUserById";
import { CreateUserUseCaseRequest, GetUserByIdUseCaseRequest, UpdateUserUseCaseRequest } from "../../../domain/usecase/ucio/user";
import { CreateUserUseCase } from "../../../domain/usecase/createUser";
import { parseDateFromString } from "../../../infrastructure/internal/database/postgresql/transformer/dateToString";
import { UpdateUserUseCase } from "../../../domain/usecase/updateUser";

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

    async createUser(req: Request, res: Response): Promise<void> {
        const { name, email, password, birthday } = req.body
        const parsedBirthday = parseDateFromString(birthday);

        if (!parsedBirthday) {
            throw new Error("Invalid Birthday")
        }
        
        const ucReq = new CreateUserUseCaseRequest(name, email, password, parsedBirthday)

        const repository = new CreateUserUseCaseRepository()
        const usecase = new CreateUserUseCase(repository)

        const ucRes = await usecase.createUser(ucReq)

        new SuccessResponse().success(res, ucRes)
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        const { id, name, email, password, birthday } = req.body

        const ucReq = new UpdateUserUseCaseRequest(id, name, email, password, birthday)

        const repository = new UpdateUserUseCaseRepository()
        const usecase = new UpdateUserUseCase(repository)

        const ucRes = await usecase.updateUser(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export {UserController}