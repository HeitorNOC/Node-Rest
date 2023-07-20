import { InternalServerError, TAG_INTERNAL_SERVER_ERROR } from "../entity/error";
import { DeleteUserUseCaseRepositoryInterface } from "./repository/userRepoInterface";
import { DeleteUserUseCaseRequest, DeleteUserUseCaseResponse, GetUserByIdUseCaseResponse } from "./ucio/user";

class DeleteUserUseCase {
    public repository: DeleteUserUseCaseRepositoryInterface

    constructor(repository: DeleteUserUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async deleteUser(req: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
        try {
            const user = await this.repository.deleteUser(req.id)

            return new DeleteUserUseCaseResponse(user, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)

            return new GetUserByIdUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    DeleteUserUseCase
}