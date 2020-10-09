import express from "express";
import {check } from "express-validator"
import {Validator} from "../milddlewares/validator.middleware";
const validations = [
    check('data').not().isEmpty().isLength({min:25, max:25}).withMessage('data must have 25 characters')
]
export class ParserController {
    public path = '/parse';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post(this.path, validations, Validator, this.parse);
    }

    parse = (req: express.Request, res:express.Response) => {
        res.send("Hello!");
    }
}
