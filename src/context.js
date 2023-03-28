import React, { useState } from "react";

export const MyContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);

  return (
    <MyContext.Provider value={{ user, setUser, login, setLogin }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default AuthProvider;
