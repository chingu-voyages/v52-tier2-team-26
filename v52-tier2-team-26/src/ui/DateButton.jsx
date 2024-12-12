import React, { useState } from "react";
import { useRequest } from "../../contexts/RequestsContext";

const DateButton = () => {
  const { requestList } = useRequest();

  const [filteredDate, setFilteredDate] = useState();

  const filterRequests = () => {
    const test = requestList.filter((item) => item.date === filteredDate);
  };

  return (
    <div>
      <input type="date" onChange={setFilteredDate(e.target.value)}></input>
    </div>
  );
};

export default DateButton;
