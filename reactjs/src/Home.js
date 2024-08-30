import React, { useContext } from "react";
import { AuthContext } from "./components/CreateAuthContext";

export default function Home() {
  const { isLogin, Login, Logout } =
    useContext(AuthContext);
  return (
    <>
      <p>User</p>
      <p>
        {isLogin && (
          <>
            <p>User Login in</p>
          </>
        )}
      </p>
      <button onClick={Login}>Login</button>
      <button onClick={Logout}>Logout</button>
    </>
  );
}
