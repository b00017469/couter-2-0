import React, {useState} from 'react';
import './App.css';
import {Count} from "./components/Count";
import {Button} from "./components/Button";

function App() {
    let [count, setCount] = useState(0)
    const maxCount = 5
    const addCount = () => {
        if (count < maxCount) setCount(++count)
    }
    const resetCount = () => setCount(0)
    const isMaxCount = count === maxCount
    const isDisabledReset = count === 0


    return (
        <div className="App">
            <div className="Counter">
                <Count count={count} isMaxCount={isMaxCount}/>
                <div className="Counter">
                    <Button name="inc" onClick={addCount} isDisabled={isMaxCount}/>
                    <Button name="reset" onClick={resetCount} isDisabled={isDisabledReset}/>
                </div>
            </div>
        </div>
    );
}

export default App;
