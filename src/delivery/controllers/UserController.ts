import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../domain/usecase/createUserUseCase';
import { UserRepository } from '../../infrastructure/provider/repository/UserRepository';
import { UpdateUserUseCase } from '../../domain/usecase/updateUserUseCase';

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
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
    const { _id, name, email } = req.body;
    const updateUserUseCase = new UpdateUserUseCase(this.userRepository)
    const user = {
      name,
      email
    }

    try {
      const updatedUser = await updateUserUseCase.execute(_id, user)

      res.status(201).json({ user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
