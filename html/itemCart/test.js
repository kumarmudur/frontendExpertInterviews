// This file is initialized with a few test cases.
// Feel free to add, edit, or remove test cases in
// this file as you see fit!

/* ---------------------------------- *
 * ----- BROWSER TESTING SET-UP ----- *
 * ---------------------------------- */
const {JSDOM} = require('jsdom');
const {readFileSync} = require('fs');
const {expect} = require('chai');

const html = readFileSync('data/index.html');

let table;
let caption;
let rows;

const resetDom = () => {
  const dom = new JSDOM(html, {
    resources: 'usable',
    pretendToBeVisual: true,
  });

  global.document = dom.window.document;
  global.window = dom.window;

  table = document.querySelector('table');
  caption = document.querySelector('caption');
  rows = document.querySelectorAll('tr');
};
/* ---------------------------------- *
 * ----- BROWSER TESTING SET-UP ----- *
 * ---------------------------------- */

describe('item cart', () => {
  beforeEach(() => {
    resetDom();
  });

  describe('caption', () => {
    it('has correct text', () => {
      expect(caption.textContent.trim()).to.equal('Item Cart');
    });

    it('has correct parent', () => {
      expect(caption.parentNode).to.equal(table);
    });
  });

  describe('body', () => {
    it('has correct text', () => {
      const expectedBody = [
        ['Banana', '$1.00', '3'],
        ['Burger', '$6.90', '1'],
        ['Cookie', '$4.20', '4'],
      ];

      const actualBody = Array.from(rows)
        .slice(1, 4)
        .map(row => {
          return Array.from(row.children).map(cell => {
            return cell.textContent.trim();
          });
        });

      expect(actualBody).to.deep.equal(expectedBody);
    });
  });
});
