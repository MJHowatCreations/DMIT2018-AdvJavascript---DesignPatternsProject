import Factory from '../js/dist/main.js';
import {expect} from 'chai';
let factory = null
describe('Test', function () {
    beforeEach(function () {
        factory = new Factory();
    });
    describe('#Factory() constructor', function () {
        context('Something', function () {
            it('should be something', function () {
                expect(factory.factoryType).to.be.a('string');
                expect(factory.factoryType).to.equal('float');
            });
        });
    });
});