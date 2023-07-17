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
    const userToUpdate: UserDocument | null = await UserModel.findOneAndUpdate({_id: id },  {
      name: user.name,
      email: user.email
     },).exec()

    const userUpdated = await this.getUserById(id)

    if (userUpdated == null) {
      return null
    } 
    
    return userToUpdate != null ? this.mapToUser(userUpdated) : null;
  }

  async deleteUser(id: ObjectId): Promise<User | null> {
    const userToDelete: UserDocument | null = await UserModel.findOneAndDelete({ _id: id }).exec()

    return userToDelete != null ? this.mapToUser(userToDelete): null

    
  }

  private mapToUser(userModel: UserDocument | User): User {
    return {
      _id: userModel._id,
      name: userModel.name,
      email: userModel.email,
    };
  }
}
