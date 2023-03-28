import logo from "./logo.svg";
import "./App.css";
import { MyContext } from "./context";
import { useContext, useEffect, useState } from "react";

function App() {
  const { user, login, setUser, setLogin } = useContext(MyContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const login = localStorage.getItem("login");
    const user = localStorage.getItem("user");
    console.log(login);
    if (login) {
      setLogin(true);
      setUser(user);
    } else {
      setLogin(false);
    }
  }, []);
  // useEffect(() => {
  //   var element = document.getElementById("otpless");

  //   if (user == null) {
  //     const script = document.createElement("script");
  //     script.src = "https://otpless.com/auth.js";
  //     console.log(script.src);
  //     document.body.appendChild(script);
  //     console.log(document.body);
  //   }
  // }, []);
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;
      localStorage.setItem("user", { name: waName, phoneNumber: waNumber });
      localStorage.setItem("login", true);
      setUser({ name: waName, phoneNumber: waNumber });
      setLogin(true);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setLogin(false);
    setUser({ name: "", phoneNumber: "" });
    window.location.reload(true);
    window.sessionStorage.clear();
  };
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Demo App</p>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <div> Hello, {!login ? "User" : user.name} !</div>
            {login ? (
              <div style={{ marginTop: 40 }}>
                <div>
                  <img
                    id="immg"
                    src="https://img.icons8.com/nolan/256/user-default.png"
                  />
                </div>
                <div>Name: {user.name} </div>
                <div>Phone Number: {user.phoneNumber} </div>
                <div style={{ textDecoration: "underline" }}>Logout</div>
              </div>
            ) : (
              <div className="m-button">Login</div>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
