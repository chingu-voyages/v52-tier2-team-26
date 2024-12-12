// src/Autocomplete.js
import React, { useContext, useState } from "react";
import RequestContext from "../contexts/RequestsContext";

const Autocomplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");
  // Link their address to SolarForm
  const { setAddress } = useContext(RequestContext);

  const onChange = (e) => {
    const userInput = e.currentTarget.value;

    // Filter suggestions that match the input
    const filtered = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setUserInput(e.currentTarget.value);
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setUserInput(e.currentTarget.innerText);
    setShowSuggestions(false);
    // Update address state with input
    setAddress(e.currentTarget.innerText);
  };
//   console.log(address);

  const renderSuggestions = () => {
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        return (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <li key={index} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="autocomplete">
      <input type="text" onChange={onChange} value={userInput} />
      {renderSuggestions()}
    </div>
  );
};

export default Autocomplete;
