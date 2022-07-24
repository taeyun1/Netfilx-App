import logo from "./logo.svg";
import "./App.css";
// const API_KEY = "91ee4b65589660d9a2368fe66cb604cf";

// APU 요청 예) => https://api.themoviedb.org/3/movie/550?api_key=91ee4b65589660d9a2368fe66cb604cf
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
