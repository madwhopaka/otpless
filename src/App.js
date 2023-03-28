import logo from "./logo.svg";
import "./App.css";
import { MyContext } from "./context";
import { useContext, useEffect } from "react";

function App() {
  const { user, login, setUser, setLogin } = useContext(MyContext);

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
      setUser({ name: waName, phoneNumber: waNumber });
      // Handle the signup/signin process
      // dispatch(loginSuccess({ fullName: waName, password: waNumber }));
      window.location.href = "/";
    };
  }, []);
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Demo App</p>
        <div>
          <div> Hello, User !</div>
          {login ? (
            <div style={{ marginTop: 40 }}>
              <div>
                <img
                  id="immg"
                  src="https://img.icons8.com/nolan/256/user-default.png"
                />
              </div>
              <div>Name: </div>
              <div>Phone Number: </div>
            </div>
          ) : (
            <div className="m-button">Login</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
