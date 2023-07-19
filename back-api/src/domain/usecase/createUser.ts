import { InternalServerError, TAG_INTERNAL_SERVER_ERROR } from "../entity/error";
import { CreateUserUseCaseRepositoryInterface } from "./repository/userRepoInterface";
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse } from "./ucio/user";

class CreateUserUseCase {
    public repository: CreateUserUseCaseRepositoryInterface

    constructor(repository: CreateUserUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async createUser(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        const { name, email, password, birthday } = req

        try {
            const user = await this.repository.createUser(name, email, password, birthday)

            return new CreateUserUseCaseResponse(user, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)

            return new CreateUserUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    CreateUserUseCase
}