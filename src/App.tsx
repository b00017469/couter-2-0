import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import {Setting} from "./components/Setting";

function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [isChangedSettings, setIsChangedSettings] = useState<boolean>(false)
    let [isCorrectInput, setIsCorrectInput]=useState<boolean>(true)
    const KEY_START_VALUE = 'startValue'
    const KEY_MAX_VALUE = 'maxValue'

    const addCount = () => {
        if (startValue < maxValue) setStartValue(++startValue)
    }
    const resetCount = () => setStartValue(restoreValue(KEY_START_VALUE, 0))
    const isMaxCount = startValue === maxValue


    useEffect(() => {
        setValues()
    }, [])

    const setValues = () => {
        setStartValue(restoreValue(KEY_START_VALUE, 0))
        setMaxValue(restoreValue(KEY_MAX_VALUE, 5))
    }

    const onClickSetButtonHandler = () => {
        saveValue(KEY_START_VALUE, startValue)
        saveValue(KEY_MAX_VALUE, maxValue)

    }

    const saveValue = (key: string, value: number) => {
        const stateAsString = JSON.stringify(value)
        localStorage.setItem(key, stateAsString)
    }
    const restoreValue = (key: string, defaultValue: number) => {
        let value = defaultValue
        const valueAsString = localStorage.getItem(key)
        if (valueAsString !== null) value = JSON.parse(valueAsString) as number
        return value
    }

    return (
        <div className="App">
            <Setting setMaxValue={setMaxValue}
                     setStartValue={setStartValue}
                     onClickSetButton={onClickSetButtonHandler}
                     startValue={startValue}
                     maxValue={maxValue}
                     isChangedSettings={setIsChangedSettings}/>
            <Counter count={startValue}
                     isMaxCount={isMaxCount}
                     addCount={addCount}
                     maxCount={maxValue}
                     resetCount={resetCount}
                     isDisabled={isChangedSettings}/>
        </div>
    );
}

export default App;
