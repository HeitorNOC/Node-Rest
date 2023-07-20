import express from "express";
import { Router } from "./delivery/rest/router/index";
import bodyParser from 'body-parser'
import http from 'http'
import dotenv from 'dotenv'

export class App{
    private app: express.Application

  constructor(){
    this.app = express()
    this.middleware()
    this.router()
    dotenv.config()
  }

  private middleware() {
    this.app.use(bodyParser.json({limit: '100mb'}))
    this.app.use(bodyParser.urlencoded({ extended: false }))
}

  private router() {
    new Router(this.app)
}

public server(): void {
    const server = http.createServer(this.app)

    server.listen(3000, () => {
        console.log(`back-api is running... at port ${3000}`)
    })
}
}