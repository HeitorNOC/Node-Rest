import { UserEntity } from "../../entity/User";

interface GetAllUsersUseCaseRepositoryInterface {
    getAllUsers(): Promise<UserEntity[] | null>
}

interface GetUserByIdUseCaseRepositoryInterface {
    getUserById(id: number): Promise<UserEntity | null>
}

interface CreateUserUseCaseRepositoryInterface {
    createUser(name: string, email: string, password: string, birthday: Date): Promise<UserEntity | null>
}

interface UpdateUserUseCaseRepositoryInterface {
    updateUser(id: number, name: string, email: string, password: string, birthday: Date): Promise<UserEntity | null>
}

export {
    GetAllUsersUseCaseRepositoryInterface,
    GetUserByIdUseCaseRepositoryInterface,
    CreateUserUseCaseRepositoryInterface,
    UpdateUserUseCaseRepositoryInterface
}