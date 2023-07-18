import express from 'express'
import { UserRouter } from './user'

class Router {
    constructor (app: express.Router) {
        app.use(new UserRouter().getRouter())
    }
}