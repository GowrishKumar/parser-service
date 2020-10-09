import {ClientModel} from "../models/client.model";

export class ParserService {
    public parse(data:string): ClientModel {
        let result: ClientModel = {
            firstName: data.slice(0,8),
            lastName:data.slice(8,18),
            clientId: data.slice(18)
        }
        return result;
    }
}
