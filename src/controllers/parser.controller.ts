import express from "express";

export class ParserController {
    public path = '/parse';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(this.path, ParserController.parse);
    }

    private parse(req: express.Request, res:express.Response) {
        res.send("Hello!");
    }
}
