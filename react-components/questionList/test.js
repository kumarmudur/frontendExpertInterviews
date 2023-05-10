// This file is initialized with a few test cases.
// Feel free to add, edit, or remove test cases in
// this file as you see fit!

/* ---------------------------------- *
 * ----- BROWSER TESTING SET-UP ----- *
 * ---------------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './program';
import {act, Simulate} from 'react-dom/test-utils';
const {JSDOM} = require('jsdom');
const {getQuestions, getSubmissions} = require('./data/api');
const chai = require('chai');
const {expect} = chai;

let rootContainer;
let categoryContainers;
let questions;

const resetDom = () => {
  const dom = new JSDOM({
    url: 'http://localhost:3000',
    resources: 'usable',
    pretendToBeVisual: true,
  });

  global.document = dom.window.document;
  global.window = dom.window;

  for (const [key, value] of Object.entries(React)) {
    global[key] = value;
  }

  const convertStringToUrlObj = url => {
    const [base, params] = url.split('?');
    const paramPairs = params?.split('&');
    const urlObj = new URL(base);
    paramPairs?.forEach(paramStr => {
      const [key, value] = paramStr.split('=');
      urlObj.searchParams.set(key, value);
    });
    return urlObj;
  };

  global.fetch = url => {
    const urlObj = typeof url === 'object' ? url : convertStringToUrlObj(url);
    if (urlObj.origin + urlObj.pathname === 'https://api.frontendexpert.io/api/fe/submissions') {
      const submissions = getSubmissions();
      const response = {
        status: 200,
        ok: true,
        statusText: 'OK',
        type: 'cors',
        url: urlObj.toString(),
        redirected: false,
        json: async () => submissions,
        text: async () => JSON.stringify(submissions),
      };
      return Promise.resolve(response);
    } else if (
      urlObj.origin + urlObj.pathname ===
      'https://api.frontendexpert.io/api/fe/questions'
    ) {
      const questions = getQuestions();
      const response = {
        status: 200,
        ok: true,
        statusText: 'OK',
        type: 'cors',
        url: urlObj.toString(),
        redirected: false,
        json: async () => questions,
        text: async () => JSON.stringify(questions),
      };
      return Promise.resolve(response);
    }

    const response = {
      status: 404,
      ok: false,
      statusText: 'Not Found',
      type: 'cors',
      url: urlObj.toString(),
      redirected: false,
    };
    return Promise.resolve(response);
  };

  rootContainer = document.createElement('div');
  rootContainer.id = 'root';
  document.body.appendChild(rootContainer);

  act(() => {
    ReactDOM.render(<QuestionList />, rootContainer);
  });

  categoryContainers = document.querySelectorAll('.category');
  questions = document.querySelectorAll('.question');
};

function waitForRender() {
  return new Promise(function (resolve) {
    setImmediate(resolve);
  });
}

/* ---------------------------------- *
 * ----- BROWSER TESTING SET-UP ----- *
 * ---------------------------------- */

describe('Question List', () => {
  beforeEach(async () => {
    resetDom();
    await waitForRender();
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(rootContainer);
    rootContainer.remove();
    rootContainer = null;
  });

  it('loads all 4 categories', () => {
    expect(document.querySelectorAll('.category').length).to.equal(4);
  });

  it('loads all 26 questions', () => {
    expect(document.querySelectorAll('.question').length).to.equal(26);
  });

  it('has correct category headings titles', () => {
    const EXPECTED_HEADINGS = ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'];

    const headings = Array.from(document.querySelectorAll('.category h2')).map(
      heading => heading.textContent,
    );

    headings.forEach((heading, i) => {
      expect(heading.startsWith(EXPECTED_HEADINGS[i])).to.be.true;
    });
  });
});
