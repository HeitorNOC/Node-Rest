import { Router } from "express";
import { UserController } from "../controllers/userController";

class UserRouter {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.get('/users', new UserController().getAllUsers)
        this.router.get('/user', new UserController().getUserById)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    UserRouter
}