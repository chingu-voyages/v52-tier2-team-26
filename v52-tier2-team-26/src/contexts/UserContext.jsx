import { createContext, useContext } from "react";
import users from "../data/users";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  // const [userList, setUserList] = useState(users);
  // console.log(users);
  // const [user, setUser] = useState(null);
  // const [user, setUser] = useState({});

  //initialize user list in localStorage
  if (!localStorage.getItem("userList")) {
    localStorage.setItem("userList", JSON.stringify(users));
  }

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

  const login = (email) => {
    let isValidCredentials = users.find((u) => u.email === email);

    if (isValidCredentials) {
      // setUser(isValidCredentials);
      localStorage.setItem("currentUser", JSON.stringify(isValidCredentials));
    } else {
      alert("login failed, please try again");
    }
  };

  // const updateUserinLocalStorage = (userToUpdate) => {
  //   let userListUpdateIndex = userList.findIndex((u) => u.id === user.id);
  //   let newUserList = userList;
  //   newUserList[userListUpdateIndex] = userToUpdate;
  //   setUser(userToUpdate);
  //   localStorage.setItem("currentUser", JSON.stringify(userToUpdate));
  //   setUserList(newUserList);
  //   localStorage.setItem("userList", JSON.stringify(newUserList));
  // };

  return (
    <UserContext.Provider
      value={{
        // setUser,
        useUser,
        login,
        // updateUserinLocalStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
