import { UserEntity } from "../../entity/User";
import { ErrorEntity } from "../../entity/error";

class GetAllUsersUseCaseResponse {
    public users: Array<UserEntity | null> | null
    public error: ErrorEntity | null

    constructor(users: Array<UserEntity | null> | null, error: ErrorEntity | null) {
        this.users = users
        this.error = error
    }
}

export {
    GetAllUsersUseCaseResponse
}