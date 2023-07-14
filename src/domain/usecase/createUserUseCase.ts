import { User, CreateUserInput } from "../../domain/entity/User";
import { UserRepository } from "../../infrastructure/provider/repository/UserRepository";
import { ObjectId } from "mongodb";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: CreateUserInput): Promise<User> {
    const newUser: CreateUserInput = {
      ...user,
    };

    const createdUser = await this.userRepository.createUser(newUser);
    return createdUser
  }
}
