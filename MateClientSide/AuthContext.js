import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const loginUser = (user) => {
    setLoggedInUser(user);
    console.log(user)
  };

  const logoutUser = () => {
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};