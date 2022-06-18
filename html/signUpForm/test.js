// BROWSER TESTING SETUP

const { JSDOM } = require('jsdom');
const { readFileSync } = require('fs');
const { expect } = require('chai');

const hmtl = readFileSync('./sign_up_form.html');

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
}