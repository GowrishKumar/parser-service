import { App } from "./app";
import { ParserController} from "./controllers/parser.controller";
import {ParserService} from "./services/parser.service";
import {IController} from "./models/controller.model";

const controllers: IController[] = [];
// init controllers
const parserController = new ParserController(new ParserService());
controllers.push(parserController);

// bootstrap app
export const app = new App(controllers, 5000);

app.listen();

module.exports = app;
