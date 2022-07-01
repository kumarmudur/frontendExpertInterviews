// This file is initialized with a few test cases.
// Feel free to add, edit, or remove test cases in
// this file as you see fit!

/* ---------------------------------- *
 * ----- BROWSER TESTING SET-UP ----- *
 * ---------------------------------- */
const {JSDOM} = require('jsdom');
const {readFileSync} = require('fs');
const {expect} = require('chai');

const html = readFileSync('./blog-post.html');

const resetDom = () => {
  const dom = new JSDOM(html, {
    resources: 'usable',
    pretendToBeVisual: true,
  });

  global.document = dom.window.document;
  global.window = dom.window;
};
/* ---------------------------------- *
 * ----- BROWSER TESTING SET-UP ----- *
 * ---------------------------------- */

describe('blog post', () => {
  beforeEach(() => {
    resetDom();
  });

  describe('markup', () => {
    it('has correct text', () => {
      const expectedTextContent =
        "Introducing AlgoCoin The future of \
decentralized meme currency is here. What is AlgoCoin? AlgoCoin utilizes \
a revolutionary proof-of-inverted-binary-tree consensus algorithm that \
will absolutely transform the way we think about currency and catapult \
the metaverse to its next major stage: Web 4.0. Using AlgoCoin is simple. \
Instead of hoarding capital in wallets with forgotten passwords, earn \
AlgoCoin at the time of usage through our unique point-of-sale system. \
Each inverted binary tree equates to one AlgoCoin. This means if your \
chicken tenders cost 420 AlgoCoin, all you need to do is invert 420 \
binary trees. Where Do I Start? Getting started with AlgoCoin is as \
easy as reversing a linked list. We recommend starting out by practicing \
on AlgoExpert. Next, once you feel you can invert binary trees as well \
as an Ex-FAANG 10x engineer, it's time to ditch your fiat currency and \
enter the future. Copyright 3022 AlgoCoin. All rights reserved.";
      expect(document.body.textContent.replace(/\s\s+/g, ' ').trim()).to.equal(expectedTextContent);
    });

    it('has correct top level heading', () => {
      const heading = document.querySelector('h1');
      expect(heading.textContent.trim()).to.equal('Introducing AlgoCoin');
    });

    it('uses semantic grouping tags correctly for header', () => {
      const header = document.querySelector('article > header');
      expect(header.textContent.replace(/\s\s+/g, ' ').trim()).to.equal(
        'Introducing AlgoCoin The future of decentralized meme currency is here.',
      );
    });
  });
});
