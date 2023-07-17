import mongoose from "mongoose";
import { UserRepository } from "../../infrastructure/provider/repository/UserRepository";
import { CreateUserInput, User } from "../entity/User";

export class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) {}
    
    async execute(_id: mongoose.Types.ObjectId): Promise<User | null> {
        const deletedUser = await this.userRepository.deleteUser(_id)
        return deletedUser
    }
}