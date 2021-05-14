import React, { createContext, useContext, useReducer } from 'react';
import { dispatchFunc, initialState } from '../reducer/auth-reducer';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    
    const [authState, dispatch] = useReducer(dispatchFunc,initialState)

    return (
        <AuthContext.Provider value={{ authState, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}