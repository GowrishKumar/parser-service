import {describe} from "mocha";
import "chai-http";
let chai = require('chai');
import {app} from "../../src/server"
import { expect } from "chai";
import {ClientModel} from "../../src/models/client.model";

chai.use(require('chai-http'))
describe('/POST parse', ()=>{
    it('should parse the data and return 200', (done)=>{
        const expected: ClientModel = {
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
        const expected: ClientModel = {
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

    it('should return 400 if length is more than 25 chars', (done)=>{
        chai.request(app)
            .post('/api/v2/parse')
            .send({
                "data":"JHON0000MICHAEL0009994567123"
            })
            .end( (err:any, res:any) => {
                expect(err).to.be.null;
                expect(res).to.have.status(400);
                expect(res.body.errors).to.be.not.undefined;
                expect(res.body.errors[0].msg).to.be.equal("data must be a 25 character string");
                done();
            });
    })

    it('should return 400 if last 7 chars are not number', (done)=>{
        chai.request(app)
            .post('/api/v2/parse')
            .send({
                "data":"JHON0000MICHAEL000999A567"
            })
            .end( (err:any, res:any) => {
                expect(err).to.be.null;
                expect(res).to.have.status(400);
                expect(res.body.errors).to.be.not.undefined;
                expect(res.body.errors[0].msg).to.be.equal("last 7 chats should be a number");
                done();
            });
    })
})
