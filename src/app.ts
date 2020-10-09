import express from "express";
import bodyParser from "body-parser";
import {LoggerMiddleware} from "./milddlewares/logger.middleware";

export class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any, port: number) {
        this.app = express();
        this.port = port;
        this.initMiddlewares();
        this.initControllers(controllers);
    }

    private initMiddlewares() {
        let logger = new LoggerMiddleware();
        this.app.use(bodyParser.json());
        this.app.use(logger.loggerMiddleware)
    }

    private initControllers(controllers: any[]) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        })
    }

    public listen() {
        this.app.listen(this.port, () =>{
            console.log(`Server listening on port ${this.port}`);
        })
    }
}
