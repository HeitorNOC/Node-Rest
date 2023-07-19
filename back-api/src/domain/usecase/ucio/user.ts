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

class GetUserByIdUseCaseRequest {
    public userID: number

    constructor(userID: number) {
        this.userID = userID
    }
}

class GetUserByIdUseCaseResponse {
    public user: UserEntity | null
    public error: ErrorEntity | null

    constructor(user: UserEntity | null, error: ErrorEntity | null) {
        this.user = user
        this.error = error
    }
}



export {
    GetAllUsersUseCaseResponse,
    GetUserByIdUseCaseRequest,
    GetUserByIdUseCaseResponse
}