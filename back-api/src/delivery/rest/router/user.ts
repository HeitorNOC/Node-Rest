import { Router } from "express";
import { UserController } from "../controllers/userController";

class UserRouter {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.get('/users', new UserController().getAllUsers)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    UserRouter
}