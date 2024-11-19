import React from "react";

const fetchAddresses = async (id) => {
  try {
    const response = await fetch(
      "https://data.lacity.org/api/views/4ca8-mxuh/rows.json"
    );
    const result = await response.json();
    const data = result.data;
    const addresses = [];

    //gets the first 1,000 addresses of the 1.03M total
    for (let i = 0; i < 1000; i++) {
      addresses.push(
        `${data[i][11]} ${data[i][13]} ${data[i][14]} ${data[i][15]}`
      );
    }
    console.log(data);
    console.log(addresses);
    return addresses;
  } catch {
    console.error("error fetching addresses");
  }
};

export default fetchAddresses;
