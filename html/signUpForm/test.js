// BROWSER TESTING SETUP

const { JSDOM } = require('jsdom');
const { readFileSync } = require('fs');
const { expect } = require('chai');

const html = readFileSync('./sign_up_form.html');

let inputs;
let labels;

const resetDom = () => {
    const dom = new JSDOM(html, {
        resources: 'usable',
        pretendToBeVisual: true, 
    });

    global.document = dom.window.document;
    global.window = dom.window;

    inputs = document.querySelectorAll('input');
    labels = document.querySelectorAll('label');
};

const EXPECTED_LABELS = [
  'Username:',
  'Password:',
  'Email:',
  'Phone Number:',
  'Date of Birth:',
  'I agree to the TOS',
];

describe('sign-up form', () => {
    beforeEach(() => {
        resetDom();
    });

    describe('labels', () => {
        it('have the correct text content', () => {
            labels.forEach((label, i) => {
                expect(label.textContent.trim()).to.equal(EXPECTED_LABELS[i]);
            });
        });
    });

    describe('inputs', () => {
        it('username field has the correct attributes', () => {
            const input = inputs[0];
            expect(input.type).to.equal('text');
            expect(input.hasAttribute('require')).to.be.true;
        });
    });
});
