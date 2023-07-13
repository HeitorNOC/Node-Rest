import { User } from '../../../domain/entity/User';
import { UserModel, UserDocument } from '../../internal/UserModel';

export class UserRepository {
  async getAllUsers(): Promise<User[]> {
    const users: UserDocument[] = await UserModel.find().exec();
    return users.map((user) => this.mapToUser(user));
  }

  async getUserById(id: string): Promise<User | null> {
    const user: UserDocument | null = await UserModel.findById(id).exec();
    return user ? this.mapToUser(user) : null;
  }

  async createUser(user: User): Promise<User> {
    const createdUser: UserDocument = await UserModel.create(user);
    return this.mapToUser(createdUser);
  }

  private mapToUser(userModel: UserDocument): User {
    return {
      _id: userModel._id.toString(),
      name: userModel.name,
      email: userModel.email,
    };
  }
}
