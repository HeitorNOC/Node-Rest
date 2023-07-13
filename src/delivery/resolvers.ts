import { User } from '../domain/entity/User';
import { UserRepository } from '../infrastructure/provider/repository/UserRepository';

const userRepository = new UserRepository();

export const resolvers = {
  Query: {
    user: async (parent: any, { id }: { id: string }) => {
      const user = await userRepository.getUserById(id);
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
      const newUser: User = {
        name,
        email,
        _id: ''
      };

      const createdUser = await userRepository.createUser(newUser);

      return createdUser;
    },
  },
};
