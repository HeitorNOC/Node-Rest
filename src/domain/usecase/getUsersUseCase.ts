import mongoose from "mongoose";
import { UserRepository } from "../../infrastructure/provider/repository/UserRepository";
import { CreateUserInput, User } from "../entity/User";

export class GetUsersUseCase {
    constructor(private userRepository: UserRepository) {}
    
    async execute(): Promise<User[] | null> {
        const users = await this.userRepository.getAllUsers()
        return users
    }
}