import { User, CreateUserInput } from "../../domain/entity/User";
import { UserRepository } from "../../infrastructure/provider/repository/UserRepository";
import { ObjectId } from "mongodb";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    const newUser: User = {
      ...user,
      _id: new ObjectId()
    };

    const createdUser = await this.userRepository.createUser(newUser);
    return {
      ...createdUser,
      _id: createdUser._id.toHexString(),
    };
  }
}
