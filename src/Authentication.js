import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function Authent({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    setCurrentUser({ email });
  }

  function signup(email, password) {
    setCurrentUser({ email });
  }

  function logout() {
    setCurrentUser(null);
  }

  useEffect(() => {
    setLoading(false);
  }, []);

  const value = { currentUser, signup, login, logout };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
