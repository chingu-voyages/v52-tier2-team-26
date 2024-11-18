import { useRequest } from "../contexts/RequestsContext";
import React from "react";

const RequestList = () => {
  const { requestList } = useRequest();

  console.log(requestList);

  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
};

export default RequestList;
