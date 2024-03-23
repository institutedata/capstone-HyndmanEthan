// UserContext.js
import  { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ username: '' });

  const loginUser = (username) => {
    setCurrentUser({ username });
  };

  const logoutUser = () => {
    setCurrentUser({ username: '' });
  };

  return (
    <UserContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
