import React, {
  createContext,
  useState,
} from "react";

const AuthContext = createContext();

const CreateAuthContext = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  function Login() {
    setIsLogin(true);
  }

  function Logout() {
    setIsLogin(false);
  }
  return (
    <AuthContext.Provider
      value={{ isLogin, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, CreateAuthContext };
