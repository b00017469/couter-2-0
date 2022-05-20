import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [incValue, setIncValue] = useState<number>(startValue)
    let [isChangeSettings, setIsChangeSettings] = useState<boolean>(false)
    const KEY_START_VALUE = 'startValue'
    const KEY_MAX_VALUE = 'maxValue'
    let errorStartInput = false
    let errorMaxInput = false
    if (startValue < -1 || startValue > maxValue) {
        errorStartInput = true
    } else {
        errorStartInput = startValue === -1 || startValue === maxValue;
        errorMaxInput = startValue === maxValue;
    }
    if (maxValue < -1 || maxValue < startValue) {
        errorMaxInput = true
    } else {
        errorMaxInput = maxValue === -1 || maxValue === startValue;
        errorStartInput = maxValue === startValue || startValue === -1;
    }

    const addCount = () => {
        if (incValue < maxValue) setIncValue(++incValue)
    }
    const resetCount = () => setIncValue(restoreValue(KEY_START_VALUE, 0))

    useEffect(() => setValues(), [])

    const setValues = () => {
        let start = restoreValue(KEY_START_VALUE, 0)
        let max = restoreValue(KEY_MAX_VALUE, 5)
        if (start >= 0 && start < max) {
            setStartValue(start)
            setMaxValue(max)
            setIncValue(start)
        } else alert('The saved counter values are incorrect and will be replaced with default ones.\n Change settings!')
    }
    const setStartValueHandler = (value: number) => {
        if (value >= -1 && value <= maxValue) {
            setStartValue(value)
        }
    }
    const setMaxValueHandler = (value: number) => {
        if (value >= -1 && value >= startValue) {
            setMaxValue(value)
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
    const errorInput = errorStartInput || errorMaxInput

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
