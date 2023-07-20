import { InternalServerError, TAG_INTERNAL_SERVER_ERROR } from "../entity/error";
import { UpdateUserUseCaseRepositoryInterface } from "./repository/userRepoInterface";
import { CreateUserUseCaseResponse, UpdateUserUseCaseRequest, UpdateUserUseCaseResponse } from "./ucio/user";

class UpdateUserUseCase {
    public repository: UpdateUserUseCaseRepositoryInterface

    constructor(repository: UpdateUserUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async updateUser(req: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse>  {
        const { id, name, email, password, birthday } = req

        try {
            const updatedUser = await this.repository.updateUser(id, name, email, password, birthday)

            return new UpdateUserUseCaseResponse(updatedUser, null)
        } catch(error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)

            return new CreateUserUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    UpdateUserUseCase
}