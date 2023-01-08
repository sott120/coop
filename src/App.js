import logo from "./logo.svg";
import "./App.css";
import Sungtt from "./sungtt";
import Sott from "./Sott";

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
            <Sungtt />
            <Sott />
            <p>sott branch에서 작성한 내용입니다.</p>
        </div>
    );
}

export default App;
