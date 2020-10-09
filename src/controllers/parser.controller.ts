import express from "express";
import {check } from "express-validator"
import {Validator} from "../milddlewares/validator.middleware";
import {ParserService} from "../services/parser.service";
const validations = [
    check('data').not().isEmpty().isLength({min:25, max:25}).withMessage('data must be a 25 character string'),
    check('data').custom(value => { return !isNaN(value) && !isNaN(parseFloat(value))}).withMessage("last 7 chats should be a number")
]
export class ParserController {
    public path = '/parse';
    public router = express.Router();

    constructor(private parserService: ParserService) {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post(this.path, validations, Validator, this.parse);
    }

    parse = (req: express.Request, res:express.Response) => {
        const data = req.body.data;
        res.json(this.parserService.parse(data));
    }
}
