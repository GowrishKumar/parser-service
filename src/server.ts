import { App } from "./app";
import { ParserController} from "./controllers/parser.controller";

const app = new App([new ParserController()], 5000);

app.listen();
