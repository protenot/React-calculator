import { createContext, useContext, useState } from "react";
import React, { ReactNode } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
  };

 export const AuthContext = createContext<AuthContextType | undefined>(undefined);
type AuthProviderProps = {
    children: ReactNode;
  };
  export function useAuthContext() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
  }

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
