import express from "express";
import {check } from "express-validator"
import {Validator} from "../milddlewares/validator.middleware";
import {ParserService} from "../services/parser.service";
import {IController} from "../models/controller.model";
const validations = [
    check('data').not().isEmpty().isLength({min:25, max:25}).withMessage('data must be a 25 character string'),
    check('data').custom(value => { let id = value.substr(value.length -7); return !isNaN(id) && !isNaN(parseFloat(id))}).withMessage("last 7 chats should be a number")
]
export class ParserController implements IController {
    private path = '/v1/parse';
    private pathV2 = '/v2/parse';
    public router = express.Router();

    constructor(private parserService: ParserService) {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post(this.path, validations, Validator, this.parse);
        this.router.post(this.pathV2, validations, Validator, this.parsev2);
    }

    parse = (req: express.Request, res:express.Response) => {
        const data = req.body.data;
        res.json(this.parserService.parse(data));
    }

    parsev2 = (req: express.Request, res:express.Response) => {
        const data = req.body.data;
        res.json(this.parserService.parsev2(data));
    }
}
