import { UserEntity } from "../../../domain/entity/User";
import { GetAllUsersUseCaseRepositoryInterface, GetUserByIdUseCaseRepositoryInterface } from "../../../domain/usecase/repository/userRepoInterface";
import { getAllUsers, getUserById } from "../../internal/database/postgresql/user";

class GetAllUsersUseCaseRepository implements GetAllUsersUseCaseRepositoryInterface {
    async getAllUsers(): Promise<(UserEntity[] | null)> {
        return await getAllUsers()
    }   
}

class GetUserByIdUseCaseRepository implements GetUserByIdUseCaseRepositoryInterface {
    async getUserById(id: number): Promise<UserEntity | null> {
        return await getUserById(id)
    }
    
}

export {
    GetAllUsersUseCaseRepository,
    GetUserByIdUseCaseRepository
}