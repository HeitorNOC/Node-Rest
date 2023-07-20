import { InternalServerError, TAG_INTERNAL_SERVER_ERROR } from "../entity/error";
import { GetAllUsersUseCaseRepositoryInterface } from "./repository/userRepoInterface";
import { GetAllUsersUseCaseResponse } from "./ucio/user";

class GetAllUsersUseCase {
    public repository: GetAllUsersUseCaseRepositoryInterface

    constructor(repository: GetAllUsersUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async getAllUsers(): Promise<GetAllUsersUseCaseResponse> {
        try {
            const users = await this.repository.getAllUsers()

            return new GetAllUsersUseCaseResponse(users, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)

            return new GetAllUsersUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    GetAllUsersUseCase
}