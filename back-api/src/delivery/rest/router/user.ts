import { Router } from "express";

class UserRouter {
    private router: Router

    constructor() {
        this.router = Router()
        //this.router.get('/users', new GetAllUsersController().getAllUsers)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    UserRouter
}