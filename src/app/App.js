import logo from "../assert/logo.svg";
import "../assert/App.css";
import { LoginPage } from "./LoginPage.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginPage />
      </header>
    </div>
  );
}

export default App;
