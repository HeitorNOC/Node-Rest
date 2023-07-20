import { Router } from "express";
import { UserController } from "../controllers/userController";

class UserRouter {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.get('/users', new UserController().getAllUsers)
        this.router.get('/user', new UserController().getUserById)
        this.router.post('/user', new UserController().createUser)
        this.router.patch('/user', new UserController().updateUser)
        this.router.delete('/user', new UserController().deleteUser)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    UserRouter
}