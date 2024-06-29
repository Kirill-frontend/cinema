'use client'

import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import Loader from '../components/loader';

// const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <AuthContext.Provider value={{ user }}>      
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  )
};
