import { UserEntity } from "../../../domain/entity/User";
import { GetAllUsersUseCaseRepositoryInterface } from "../../../domain/usecase/repository/userRepoInterface";
import { getAllUsers } from "../../internal/database/postgresql/user";

class GetAllUsersUseCaseRepository implements GetAllUsersUseCaseRepositoryInterface {
    async getAllUsers(): Promise<(UserEntity[] | null)> {
        return await getAllUsers()
    }
    
}

export {
    GetAllUsersUseCaseRepository
}