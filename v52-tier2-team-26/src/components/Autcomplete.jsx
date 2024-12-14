// src/Autocomplete.js
import React, { useContext, useState } from "react";
import RequestContext from "../contexts/RequestsContext";
import addressList from "../data/addressList";

const Autocomplete = () => {
  const [query, setQuery] = useState(""); // track user input
  const [suggestions, setSuggestions] = useState([]); // list of address suggestions
  const { setAddress, setBtnDisabled } = useContext(RequestContext);
  const [showErrMsg, setShowErrMsg] = useState(false);

  // Sample address data to simulate suggestions
  // const addressData = [
  //   { address: '123 Main Street, New York, NY' },
  //   { address: '456 Maple Avenue, Los Angeles, CA' },
  //   { address: '789 Oak Drive, Chicago, IL' },
  //   { address: '321 Pine Lane, Houston, TX' },
  //   { address: '654 Cedar Road, Miami, FL' },
  // ];
  const addressData = [...addressList];

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    // Filter the address data based on the input query
    if (input) {
      const filteredSuggestions = addressData.filter((item) =>
        item.addressLine.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }

    // Check if we need to display the error message
    if (suggestions.length === 0) setShowErrMsg(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.addressLine); // Set the input value to the selected suggestion
    setSuggestions([]); // Clear the suggestions
    setAddress(suggestion.addressLine); // Prefills address in form
    setShowErrMsg(false); // Remove any error msg
    setBtnDisabled(false); // Allow user to click btn
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter an address"
        style={{ width: "100%", padding: "8px", fontSize: "16px" }}
      />
      {suggestions.length > 0 ? (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
            position: "absolute",
            width: "300px",
            zIndex: 1000,
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom:
                  index !== suggestions.length - 1 ? "1px solid #eee" : "none",
              }}
            >
              {suggestion.addressLine}
            </li>
          ))}
        </ul>
      ) : (
        // If showErrMsg is true & they typed in the input, then show p
        showErrMsg &&
        query && (
          <p
            style={{
              marginTop: "8px",
              color: "red",
              background: "white",
              padding: "0.5rem",
              border: "1px solid red"
            }}
          >
            No matching addresses found. You may not qualify for solar at this time.
          </p>
        )
      )}
    </div>
  );
};

export default Autocomplete;
