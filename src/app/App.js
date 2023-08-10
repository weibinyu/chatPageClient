import logo from "../assert/logo.svg";
import "../assert/App.css";
import { LoginPage } from "./LoginPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginPage />
      </header>
    </div>
  );
}

export default App;
