import { UserEntity } from "../../entity/User";

interface GetAllUsersUseCaseRepositoryInterface {
    getAllUsers(): Promise<UserEntity[] | null>
}

export {
    GetAllUsersUseCaseRepositoryInterface
}