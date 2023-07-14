import mongoose from 'mongoose';
import { CreateUserInput, User } from '../../../domain/entity/User';
import { UserModel, UserDocument } from '../../internal/UserModel';

type ObjectId = mongoose.Types.ObjectId

export class UserRepository {
  async getAllUsers(): Promise<User[]> {
    const users: UserDocument[] = await UserModel.find().exec();
    return users.map((user) => this.mapToUser(user));
  }

  async getUserById(id: ObjectId): Promise<User | null> {
    const user: UserDocument | null = await UserModel.findById(id).exec();
    return user ? this.mapToUser(user) : null;
  }

  async createUser(user: CreateUserInput): Promise<User> {
    const createdUser: UserDocument = await UserModel.create(user);
    return this.mapToUser(createdUser);
  }

  async updateUser(id: ObjectId, user: CreateUserInput): Promise<User | null> {
    const updatedUser: UserDocument | null = await UserModel.findOneAndUpdate({_id: id }, { $set: {
      name: user.name,
      email: user.email
    } },).exec()
    return updatedUser ? this.mapToUser(updatedUser) : null;
  }

  private mapToUser(userModel: UserDocument): User {
    return {
      _id: userModel._id,
      name: userModel.name,
      email: userModel.email,
    };
  }
}
