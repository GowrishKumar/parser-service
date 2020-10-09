import {describe} from "mocha";
import {assert} from "chai";
import {ParserService} from "../../../src/services/parser.service";
import {ClientModel} from "../../../src/models/client.model";

describe('Parser Service', () => {
    it('should parse', () => {
        const parserService = new ParserService();
        const result = parserService.parse("JHON0000MICHAEL0009994567");
        const expected: ClientModel = {
            firstName: "JHON0000",
            lastName:"MICHAEL000",
            clientId:"9994567"
        }
        assert.deepEqual(result, expected);
    })

    it('should correctly format and trim padding chars if present', () => {
        const parserService = new ParserService();
        const result = parserService.parse("JHON0000MICHAEL0009994567");
        const expected: ClientModel = {
            firstName: "JHON",
            lastName:"MICHAEL",
            clientId:"999-4567"
        }
        assert.deepEqual(result, expected);
    })
})


