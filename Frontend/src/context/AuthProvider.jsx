import React from 'react'
import { useState, useContext, createContext } from 'react';

// 1. Create a Context to share authentication data across the app
export const AuthContext = createContext()

export default function AuthProvider({children}) { // here "children" means all the components with include App.jsx is wrapped inside AuthProvider.

     // 2. Get user data from localStorage if available
    const initalAuthUser= localStorage.getItem("Users");

    // 3. Store user login data in state to update and access globally
    const [authUser, setAuthUser] = useState(
        initalAuthUser ? JSON.parse(initalAuthUser) : undefined
    );
  
  return (
    // 4. Provide authUser and setAuthUser to all children components
    <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

// 5. Custom hook to use AuthContext easily in any component
export const useAuth = ()=> useContext(AuthContext);



// Here, we have created  context API for our user to access globally anywhere to use.
// After that wrap, it in main.jsx