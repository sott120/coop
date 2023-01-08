import "./App.css";
import logo from "./logo.svg";
import Sott from "./Sott";
import Sungtt from "./sungtt";

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
            <Sungtt data={"프롭스좀 보내겠습니다."} />
            <Sungtt data={"프롭스좀 보내겠습니다."} />
            <Sungtt data={"프롭스좀 보내겠습니다."} />
            <Sungtt data={"프롭스좀 보내겠습니다."} />
            <Sott />
            <p>sott branch에서 작성한 내용입니다.</p>
            <p>sott branch에서 작성한 두 번쨰 내용입니다.</p>
        </div>
    );
}

export default App;
