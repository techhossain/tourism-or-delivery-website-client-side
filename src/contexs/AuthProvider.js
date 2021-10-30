import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContex = createContext();

const AuthProvider = ({ children }) => {

  const allContext = useFirebase();

  return (
    <AuthContex.Provider value={allContext}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;