import { createContext, useContext, useState, useEffect } from "react";
import requests from "../data/requests";

const RequestContext = createContext();

export function useRequest() {
  return useContext(RequestContext);
}

export const RequestProvider = ({ children }) => {
  const [requestList, setRequestList] = useState(JSON.parse(localStorage.getItem('requestList')) || requests);
  const [appointmentStatus, setAppointmentStatus] = useState("Pending");
  // const [request, setRequest] = useState(null);
  const [address, setAddress] = useState("");


  // console.log(requestList);

  // UPDATE LOCAL STORAGE when Request List changes
  useEffect(() => {
    localStorage.setItem('requestList', JSON.stringify(requestList));
}, [requestList]);

  // if (!localStorage.getItem("requestList")) {
  //   localStorage.setItem("requestList", JSON.stringify(requestList));
  // }

  // useEffect(() => {
  //   const storedRequestList = JSON.parse(localStorage.getItem("requestList"));
  //   if (storedRequestList) {
  //     setRequestList(storedRequestList);
  //   }
  // }, []);

  // const addRequest = (name, email, phone, address, time) => {
  //   const id = new Date().getTime().toString(36);

  //   let newRequest = {
  //     id: id,
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     address: address,
  //     time: time,
  //   };
  //   setRequestList([...requestList, newRequest]);
  //   localStorage.setItem(
  //     "requestList",
  //     JSON.stringify([...requestList, newRequest])
  //   );
  //   alert("New request successfully added!");
  // };

  // const updateRequestinLocalStorage = (requestToUpdate) => {
  //   let requestListUpdateIndex = requestList.findIndex(
  //     (u) => u.id === request.id
  //   );
  //   let newRequestList = requestList;
  //   newRequestList[requestListUpdateIndex] = requestToUpdate;
  //   setRequest(requestToUpdate);
  //   localStorage.setItem("currentUser", JSON.stringify(requestToUpdate));
  //   setRequestList(newRequestList);
  //   localStorage.setItem("requestList", JSON.stringify(newRequestList));
  // };


  return (
    <RequestContext.Provider
      value={{
        useRequest,
        requestList,
        setRequestList,
        appointmentStatus,
        setAppointmentStatus,
        address,
        setAddress
        // setRequest,
        // useRequest,
        // addRequest,
        // updateRequestinLocalStorage,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestContext;