import { createContext, useContext, useState } from "react";
import users from "../data/users";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(users);
  const [user, setUser] = useState(null);

  //initialize user list in localStorage
  if (!localStorage.getItem("userList")) {
    localStorage.setItem("userList", JSON.stringify(users));
  }

  const login = (email) => {
    let isValidCredentials = users.find((u) => u.email === email);

    if (isValidCredentials) {
      setUser(isValidCredentials);
      localStorage.setItem("currentUser", JSON.stringify(isValidCredentials));
    } else {
      alert("login failed, please try again");
    }
  };

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
      value={{
        setUser,
        useUser,
        login,
        updateUserinLocalStorage,
        updateRequests,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
