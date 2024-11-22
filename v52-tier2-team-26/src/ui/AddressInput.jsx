import fetchAddresses from "../data/addresses";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

function Dropdown() {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  //   const addresses = fetchAddresses();

  //   const filterAddresses = () => {
  //     const getAddresses = addresses.filter((i) => i === selectedValue);
  //     return getAddresses;
  //   };

  //   console.log(addresses);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //   const [inputText, setInputText] = useState("");

  //   let inputHandler = (e) => {
  //     var lowerCase = e.target.value.toLowerCase();
  //     setInputText(lowerCase);
  //   };

  //   const filteredData = addresses.filter((search) => {
  //     if (inputText === "") {
  //       return search;
  //     } else {
  //       return search.toLowerCase().includes(inputText);
  //     }
  //   });

  return (
    <div>
      <input defaultValue="" onChange={handleChange}></input>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
