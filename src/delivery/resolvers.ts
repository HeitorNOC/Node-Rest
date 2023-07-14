import { CreateUserInput } from '../domain/entity/User';
import { UserRepository } from '../infrastructure/provider/repository/UserRepository';
import mongoose from 'mongoose';

const userRepository = new UserRepository();

export const resolvers = {
  Query: {
    user: async (parent: any, { id }: { id: string }) => {
      if (id.length != 24) {
        throw new Error('UserId must be at least 24 characters');
      }
      const objId = new mongoose.Types.ObjectId(id)
      const user = await userRepository.getUserById(objId);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
    users: async () => {
      const users = await userRepository.getAllUsers();
      if (!users || users.length === 0) {
        throw new Error('No users found');
      }
      return users;
    },
  },
  Mutation: {
    createUser: async (parent: any, { name, email }: { name: string; email: string }) => {
      const newUser: CreateUserInput = {
        name,
        email,
      };

      const createdUser = await userRepository.createUser(newUser);

      return createdUser;
    },
    updateUser: async (parent: any, { id, userToUpdate }: { id: string; userToUpdate: { name: string; email: string } }) => {
  
      const objId = new mongoose.Types.ObjectId(id)
      const updatedUser = await userRepository.updateUser(objId, userToUpdate);
      if (updatedUser == null) {
        throw new Error('User not found');
      }
      return updatedUser;
    }
  },
}
