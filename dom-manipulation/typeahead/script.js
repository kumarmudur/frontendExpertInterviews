// Solution 1 =================

const BASE_URL = 'https://www.algoexpert.io/api/fe/glossary-suggestions';

let timeoutID;

const input = document.getElementById('typeahead');
const suggestionsList = document.getElementById('suggestions-list');

input.addEventListener('input', onType);

function onType() {
  if (input.value.length === 0) {
    clearSuggestions();
    return;
  }
  clearTimeout(timeoutID);
  timeoutID = setTimeout(fetchAndAppendSuggestions, 500);
}

function fetchAndAppendSuggestions() {
  const url = new URL(BASE_URL);
  url.searchParams.set('text', input.value);
  fetch(url)
    .then(res => res.json())
    .then(suggestions => {
      const fragment = document.createDocumentFragment();
      suggestions.forEach(suggestion => {
        fragment.appendChild(createSuggestionElement(suggestion));
      });
      suggestionsList.replaceChildren(fragment);
    });
}

function createSuggestionElement(suggestion) {
  const suggestionElement = document.createElement('li');
  suggestionElement.textContent = suggestion;
  suggestionElement.addEventListener('click', () => {
    input.value = suggestion;
    clearSuggestions();
  });
  return suggestionElement;
}

function clearSuggestions() {
  clearTimeout(timeoutID);
  suggestionsList.innerHTML = '';
}


