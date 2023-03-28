import logo from "./logo.svg";
import "./App.css";

function App() {
  const login = false;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Demo App</p>
        <div>
          <div> Hello, User !</div>
          {login ? (
            <div>
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
