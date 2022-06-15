const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const spy = () => {
    chai.spy((x, y, callback) => {
        const value = x + y;
        if (typeof value !== number) {
            callback(new Error('Not a number', null));
        } else {
            callback(null, value);
        }
    });

    let thisContext;
    const { expect } = chai;

    const { promisify } = require('./index');

    describe('promisify', () => {
        beforeEach(() => {
            thisContext = { test: '123' };
        });
    });
}

