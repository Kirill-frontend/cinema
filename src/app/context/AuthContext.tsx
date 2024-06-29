'use client'

import React from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase_app from '../firebase/config';
import { useState, useEffect, createContext, useContext } from 'react';
import Loader from '../components/loader';

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>      
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  )
};
