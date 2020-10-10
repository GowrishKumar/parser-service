import express from "express";
import bodyParser from "body-parser";
import {loggerMiddleware} from "./milddlewares/logger.middleware";
import {IController} from "./models/controller.model";

export class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: IController[], port: number) {
        this.app = express();
        this.port = port;
        this.initMiddlewares();
        this.initControllers(controllers);
    }

    private initMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(loggerMiddleware);
    }

    private initControllers(controllers: IController[]) {
        controllers.forEach((controller:IController) => {
            this.app.use('/api', controller.router);
        })
    }

    public listen() {
        this.app.listen(this.port, () =>{
            console.log(`Server listening on port ${this.port}`);
        })
    }
}
