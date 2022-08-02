// client/src/App.js
import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

import Cookies from 'js-cookie';

function App() {
  const [data, setData] = React.useState(null);
  const [counter, setCounter] = useState(Cookies.get("counter"));

  React.useEffect(() => {
    fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    fetch("/increase", { method: 'PUT' })

  }, []);
    function increaseCounter() {
        fetch("/increase", { method: 'PUT' })
        setCounter(Cookies.get("counter"))
        alert("increase has accrued")
    }
    function decreaseCounter(){
        fetch("/decrease", { method: 'PUT' })
        setCounter(Cookies.get("counter"))
        alert("decrease has accrued")
    }
    function restartCounter(){
        fetch("/restart", { method: 'PUT' })
        setCounter(Cookies.get("counter"))
        alert("decrease has accrued")
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p><button className={"buttons"} id={"increase"} onClick={increaseCounter}>Increase counter</button>
                <button className={"buttons"} id={"decrease"} onClick={decreaseCounter}>Decrease counter</button>
                <button className={"buttons"} id={"reset"} onClick={restartCounter}>Restart counter</button></p>

                <p>{!data ? "Loading..." : data}</p>
                <p>Counter: {Cookies.get('counter')}</p>
            </header>
        </div>
    );
}

export default App;