import { UserEntity } from "../../../domain/entity/User";
import { CreateUserUseCaseRepositoryInterface, DeleteUserUseCaseRepositoryInterface, GetAllUsersUseCaseRepositoryInterface, GetUserByIdUseCaseRepositoryInterface, UpdateUserUseCaseRepositoryInterface } from "../../../domain/usecase/repository/userRepoInterface";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../../internal/database/postgresql/user";

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

class UpdateUserUseCaseRepository implements UpdateUserUseCaseRepositoryInterface {
    async updateUser(id: number, name: string, email: string, password: string, birthday: Date): Promise<UserEntity | null> {
        return await updateUser(id, name, email, password, birthday)
    }
    
}

class DeleteUserUseCaseRepository implements DeleteUserUseCaseRepositoryInterface {
    async deleteUser(id: number): Promise<UserEntity | null> {
        return await deleteUser(id)
    }
}

export {
    GetAllUsersUseCaseRepository,
    GetUserByIdUseCaseRepository,
    CreateUserUseCaseRepository,
    UpdateUserUseCaseRepository,
    DeleteUserUseCaseRepository
}