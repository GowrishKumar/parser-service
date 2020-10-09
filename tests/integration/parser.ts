import {describe} from "mocha";
import "chai-http";
let chai = require('chai');
import {app} from "../../src/server"
import { expect } from "chai";
import {IClientModel} from "../../src/models/IClientModel";

chai.use(require('chai-http'))
describe('/POST parse', ()=>{
    it('should parse the data and return 200', (done)=>{
        const expected: IClientModel = {
            firstName: "JHON0000",
            lastName:"MICHAEL000",
            clientId:"9994567"
        }
        chai.request(app)
            .post('/api/v1/parse')
            .send({
                "data":"JHON0000MICHAEL0009994567"
            })
            .end( (err:any, res:any) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.deep.equal(expected);
            done();
        });
    })

    it('should format and trim padding chars if present', (done)=>{
        const expected: IClientModel = {
            firstName: "JHON",
            lastName:"MICHAEL",
            clientId:"999-4567"
        }
        chai.request(app)
            .post('/api/v2/parse')
            .send({
                "data":"JHON0000MICHAEL0009994567"
            })
            .end( (err:any, res:any) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal(expected);
                done();
            });
    })
})
