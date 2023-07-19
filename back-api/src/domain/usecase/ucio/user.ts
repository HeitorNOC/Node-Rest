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

class CreateUserUseCaseRequest {
    public name: string
    public email: string
    public password: string
    public birthday: Date

    constructor(name: string, email: string, password: string, birthday: Date) {
        this.name = name
        this.email = email
        this.password = password
        this.birthday = birthday
    }
}

class CreateUserUseCaseResponse {
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
    GetUserByIdUseCaseResponse,
    CreateUserUseCaseRequest,
    CreateUserUseCaseResponse
}