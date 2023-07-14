import mongoose from "mongoose";
import { UserRepository } from "../../infrastructure/provider/repository/UserRepository";
import { CreateUserInput, User } from "../entity/User";

export class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) {}
    
    async execute(_id: mongoose.Types.ObjectId ,user: CreateUserInput): Promise<User | null> {
        const { name, email } = user
        const newUser = {
            name,
            email
        }
        const updatedUser = await this.userRepository.updateUser(_id, newUser)
        return updatedUser
    }
}