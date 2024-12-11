import { createContext, useContext, useEffect, useState } from "react";
import users from "../data/users";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {

  // JORDANS CODE
  const [userList, setUserList] = useState(
    JSON.parse(localStorage.getItem("userList")) || users
  );
  const [currentUser, setCurrentUser] = useState( JSON.parse(localStorage.getItem("currentUser")) || "");


  // UPDATE LOCAL STORAGE when User List changes
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  // UPDATE LOCAL STORAGE when Current User changes
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  // END JORDANS CODE!

  // const [userList, setUserList] = useState(users);
  // console.log(users);
  // const [user, setUser] = useState(null);
  // const [user, setUser] = useState({});


  // //initialize user list in localStorage
  // if (!localStorage.getItem("userList")) {
  //   localStorage.setItem("userList", JSON.stringify(users));
  // }
  
  //if user was logged in last session, use them as active account
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  //   if (storedUser) {
  //     setUser(storedUser);
  //   }

  //   const storedUserList = JSON.parse(localStorage.getItem("userList"));
  //   if (storedUserList) {
  //     setUserList(storedUserList);
  //   }
  // }, []);

  // const login = (email) => {
  //   let isValidCredentials = users.find((u) => u.email === email);

  //   if (isValidCredentials) {
  //     // setUser(isValidCredentials);
  //     localStorage.setItem("currentUser", JSON.stringify(isValidCredentials));
  //   } else {
  //     alert("login failed, please try again");
  //   }
  // };

  const updateUserinLocalStorage = (userToUpdate) => {
    let userListUpdateIndex = userList.findIndex((u) => u.id === user.id);
    let newUserList = userList;
    newUserList[userListUpdateIndex] = userToUpdate;
    setUser(userToUpdate);
    localStorage.setItem("currentUser", JSON.stringify(userToUpdate));
    setUserList(newUserList);
    localStorage.setItem("userList", JSON.stringify(newUserList));
  };

  //function for updating user's requests in json file;
  const updateRequests = (requestId) => {
    const updatedUser = {
      ...user,
      requests: [user.requests] + [requestId],
    };
    updateUserinLocalStorage(updatedUser);
  };

  return (
    <UserContext.Provider
      value={
        {
          // setUser,
          // useUser,
          // login,
          // updateUserinLocalStorage,
          userList,
          setUserList,
          currentUser,
          setCurrentUser
        }
      }
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;