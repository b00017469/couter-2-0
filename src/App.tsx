import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [incValue, setIncValue] = useState<number>(startValue)
    let [isChangeSettings, setIsChangeSettings] = useState<boolean>(false)
    let [errorStartInput, setErrorStartInput] = useState<boolean>(false)
    let [errorMaxInput, setErrorMaxInput] = useState<boolean>(false)
    const KEY_START_VALUE = 'startValue'
    const KEY_MAX_VALUE = 'maxValue'
    const errorInput = errorStartInput || errorMaxInput

    const addCount = () => {
        if (incValue < maxValue) setIncValue(++incValue)
    }
    const resetCount = () => setIncValue(restoreValue(KEY_START_VALUE, 0))

    useEffect(() =>  setValues(), [])

    const setValues = () => {
        setStartValue(restoreValue(KEY_START_VALUE, 0))
        setMaxValue(restoreValue(KEY_MAX_VALUE, 5))
        setIncValue(restoreValue(KEY_START_VALUE, 0))
    }

    const setStartValueHandler = (value: number) => {
        if (value < -1 || value > maxValue) {
            setErrorStartInput(true)
        } else {
            setStartValue(value)
            if (value === -1 || value === maxValue) {
                setErrorStartInput(true)
            } else setErrorStartInput(false)
            if (value === maxValue) setErrorMaxInput(true)
            else setErrorMaxInput(false)
        }
    }
    const setMaxValueHandler = (value: number) => {
        if (value < -1 || value < startValue) {
            setErrorMaxInput(true)
        } else {
            setMaxValue(value)
            if (value === -1 || value === startValue) {
                setErrorMaxInput(true)
            } else setErrorMaxInput(false)
            if (value === startValue||startValue===-1) setErrorStartInput(true)
            else setErrorStartInput(false)
        }
    }
    const onClickSetButtonHandler = () => {
        saveValue(KEY_START_VALUE, startValue)
        saveValue(KEY_MAX_VALUE, maxValue)
        setIncValue(startValue)
        setIsChangeSettings(false)
    }

    const saveValue = (key: string, value: number) => {
        const stateAsString = JSON.stringify(value)
        localStorage.setItem(key, stateAsString)
    }
    const restoreValue = (key: string, defaultValue: number) => {
        let value = defaultValue
        const valueAsString = localStorage.getItem(key)
        if (valueAsString !== null) value = +valueAsString
        return value
    }

    return (
        <div className="App">
            <Settings setMaxValue={setMaxValueHandler}
                      setStartValue={setStartValueHandler}
                      onClickSetButton={onClickSetButtonHandler}
                      startValue={startValue}
                      maxValue={maxValue}
                      isChangeSettings={setIsChangeSettings}
                      errorStartInput={errorStartInput}
                      errorMaxInput={errorMaxInput}
                      isDisabled={!isChangeSettings}/>
            <Counter errorInput={errorInput}
                     incValue={incValue}
                     addCount={addCount}
                     maxCount={maxValue}
                     resetCount={resetCount}
                     isDisabled={isChangeSettings}/>
        </div>
    );
}

export default App;
