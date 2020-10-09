import {describe} from "mocha";
import "chai-http";
let chai = require('chai');
import {app} from "../../src/server"
import { expect } from "chai";

chai.use(require('chai-http'))
describe('/POST parse', ()=>{
    it('it should parse the data', (done)=>{
        chai.request(app)
            .post('/parse')
            .send({
                "data":"JHON0000MICHAEL0009994567"
            })
            .end( (err:any, res:any) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    })
})
