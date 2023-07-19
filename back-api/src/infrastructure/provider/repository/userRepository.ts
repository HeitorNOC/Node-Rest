import { UserEntity } from "../../../domain/entity/User";
import { CreateUserUseCaseRepositoryInterface, GetAllUsersUseCaseRepositoryInterface, GetUserByIdUseCaseRepositoryInterface } from "../../../domain/usecase/repository/userRepoInterface";
import { createUser, getAllUsers, getUserById } from "../../internal/database/postgresql/user";

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

class CreateUserUseCaseRepository implements CreateUserUseCaseRepositoryInterface {
    async createUser(name: string, email: string, password: string, birthday: Date): Promise<UserEntity | null> {
        return await createUser(name, email, password, birthday)
    }
    
}

export {
    GetAllUsersUseCaseRepository,
    GetUserByIdUseCaseRepository,
    CreateUserUseCaseRepository
}