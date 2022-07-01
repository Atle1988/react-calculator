import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import {Button} from "./components/Styled"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React the nice way Christian!
        </a>
        <br />
        <Main />
      <Button> Click me </Button>
      </header>
    </div>
  );
}

export default App;
