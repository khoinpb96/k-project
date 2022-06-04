import { createContext, useState } from "react";

export const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: any) => {
  const defaultUser = {};
  const [user, setUser] = useState(defaultUser);

  const login = (user: any) => setUser(user);
  const logout = () => setUser(defaultUser);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
