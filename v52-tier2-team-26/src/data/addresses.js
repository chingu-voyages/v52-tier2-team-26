const fetchAddresses = async (id) => {
  try {
    const response = await fetch(
      "https://data.lacity.org/api/views/4ca8-mxuh/rows.json"
    );
    const result = await response.json();
    const data = result.data;
    const addresses = [];

    //gets the first 1,000 addresses of the 1.03M total
    for (let i = 0; i < 100; i++) {
      addresses.push({
        streetNumber: `${data[i][11]}`,
        streetPrefix: `${data[i][13]}`,
        streetName: `${data[i][14]}`,
        streetSuffix: `${data[i][15]}`,
        lat: `${data[i][19]}`,
        lng: `${data[i][20]}`,
      });
    }

    console.log(addresses);
    return addresses;
  } catch {
    console.error("error fetching addresses");
  }
};

export default fetchAddresses;
