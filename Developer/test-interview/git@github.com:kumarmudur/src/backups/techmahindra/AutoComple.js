import React, { useState } from 'react';

import SuggestionsListComponent from './SuggestionsListComponent';

const suggestions = [
    'Bangalore',
    "Hyderbad",
    'Chennai',
    'Trivandrum',
    'Mumbai',
    'Delhi'
]

const AutoComplete = () => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

   const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
   }

   const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

    return (
        <div>
             <input
                type="text"
                onChange={onChange}
                value={input}
            />
      {showSuggestions && input && 
        <SuggestionsListComponent 
         filteredSuggestions={filteredSuggestions}
         activeSuggestionIndex={activeSuggestionIndex}
         onClick={onClick}
       />
      }
        </div>
    )
};

export default AutoComplete;