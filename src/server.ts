import { App } from "./app";
import { ParserController} from "./controllers/parser.controller";
import {ParserService} from "./services/parser.service";

export const app = new App([new ParserController(new ParserService())], 5000);

app.listen();

module.exports = app;
