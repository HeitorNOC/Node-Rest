import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../domain/usecase/createUserUseCase';
import { UserRepository } from '../../infrastructure/provider/repository/UserRepository';
import { UpdateUserUseCase } from '../../domain/usecase/updateUserUseCase';
import { DeleteUserUseCase } from '../../domain/usecase/deleteUserUseCase';
import { GetUsersUseCase } from '../../domain/usecase/getUsersUseCase';
import { GetUserByIdUseCase } from '../../domain/usecase/getUserByIdUseCase';
import mongoose, { mongo } from 'mongoose';

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUsers(req: Request, res: Response): Promise<void> {
    const getUsersUseCase = new GetUsersUseCase(this.userRepository)

    try {
      const users = await getUsersUseCase.execute()

      res.status(200).json({  users })
    } catch(error:any) {
      res.status(400).json({ error: error.message })
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const objId = new mongoose.Types.ObjectId(id)
    const getUserByIdUseCase = new GetUserByIdUseCase(this.userRepository)

    try {
      const user = await getUserByIdUseCase.execute(objId)

      res.status(200).json({user})
    } catch(error:any) {
      res.status(400).json({ error: error.message })
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body;

    const createUserUseCase = new CreateUserUseCase(this.userRepository);

    try {
      const user = await createUserUseCase.execute({
          name, email,
          
      });

      res.status(201).json({ user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const { name, email } = req.body;

    const objId = new mongoose.Types.ObjectId(id)

    const updateUserUseCase = new UpdateUserUseCase(this.userRepository)

    const user = {
      name,
      email
    }

    try {
      const updatedUser = await updateUserUseCase.execute(objId, user)

      res.status(201).json({ updatedUser });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const objId = new mongoose.Types.ObjectId(id)
    const deleteUserUseCase = new DeleteUserUseCase(this.userRepository)

    try {
      const deletedUser = await deleteUserUseCase.execute(objId)
      res.status(200).json({ deletedUser })
    } catch(error: any) {
      res.status(400).json({ error: error.message })
    }
  }
}
