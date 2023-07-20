import { InternalServerError, TAG_INTERNAL_SERVER_ERROR } from "../entity/error";
import { GetUserByIdUseCaseRepositoryInterface } from "./repository/userRepoInterface";
import { GetUserByIdUseCaseRequest, GetUserByIdUseCaseResponse } from "./ucio/user";

class GetUserByIdUseCase {
    public repository: GetUserByIdUseCaseRepositoryInterface

    constructor(repository: GetUserByIdUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async getUserById(req: GetUserByIdUseCaseRequest): Promise<GetUserByIdUseCaseResponse> {
        try {
            const user = await this.repository.getUserById(req.id)

            return new GetUserByIdUseCaseResponse(user, null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)

            return new GetUserByIdUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    GetUserByIdUseCase
}