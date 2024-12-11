import { createContext, useContext, useState, useEffect } from "react";
import requests from "../data/requests";

const RequestContext = createContext();

export function useRequest() {
  return useContext(RequestContext);
}

export const RequestProvider = ({ children }) => {
  const [requestList, setRequestList] = useState(requests);
  const [request, setRequest] = useState(null);

  if (!localStorage.getItem("requestList")) {
    localStorage.setItem("requestList", JSON.stringify(requestList));
  }

  useEffect(() => {
    const storedRequestList = JSON.parse(localStorage.getItem("requestList"));
    if (storedRequestList) {
      setRequestList(storedRequestList);
    }
  }, []);

  const addRequest = (name, email, phone, address, time, status) => {
    const id = new Date().getTime().toString(36);

    let newRequest = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      address: address,
      time: time,
      status: status,
    };

    setRequestList([...requestList, newRequest]);
    localStorage.setItem(
      "requestList",
      JSON.stringify([...requestList, newRequest])
    );
    alert("New request successfully added!");
  };

  const updateStatus = (status) => {
    const updatedRequest = {
      ...request,
      status: status,
    };
    updateRequestinLocalStorage(updatedRequest);
  };

  const updateRequestinLocalStorage = (requestToUpdate) => {
    let requestListUpdateIndex = requestList.findIndex(
      (u) => u.id === request.id
    );
    let newRequestList = requestList;
    newRequestList[requestListUpdateIndex] = requestToUpdate;
    setRequest(requestToUpdate);
    setRequestList(newRequestList);
    localStorage.setItem("requestList", JSON.stringify(newRequestList));
  };

  return (
    <RequestContext.Provider
      value={{
        setRequest,
        useRequest,
        addRequest,
        updateStatus,
        updateRequestinLocalStorage,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};
