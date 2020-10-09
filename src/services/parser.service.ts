import {IClientModel} from "../models/IClientModel";

export class ParserService {
    public parse(data:string): IClientModel {
        let result: IClientModel = {
            firstName: data.slice(0,8),
            lastName:data.slice(8,18),
            clientId: data.slice(18)
        }
        return result;
    }

    public parsev2(data:string): IClientModel {
        let result: IClientModel = {
            firstName: this.trimTrailingChars(data.slice(0,8), '0'),
            lastName:this.trimTrailingChars(data.slice(8,18), '0'),
            clientId: this.formatClientId(data.slice(18))
        }
        return result;
    }

    private trimTrailingChars(str:string, charToTrim:string) {
        let regExp = new RegExp(charToTrim + "+$");
        let result = str.replace(regExp, "");
        return result;
    }

    private formatClientId(clientId: string) {
        return clientId.slice(0,3) + '-' + clientId.slice(3);
    }
}
