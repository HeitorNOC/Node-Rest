import { UserEntity } from "../../entity/User";

interface GetAllUsersUseCaseRepositoryInterface {
    getAllUsers(): Promise<UserEntity[] | null>
}

interface GetUserByIdUseCaseRepositoryInterface {
    getUserById(id: number): Promise<UserEntity | null>
}

export {
    GetAllUsersUseCaseRepositoryInterface,
    GetUserByIdUseCaseRepositoryInterface
}