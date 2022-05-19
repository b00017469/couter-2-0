import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [isChangeSettings, setIsChangeSettings] = useState<boolean>(false)
    let [errorStartInput, setErrorStartInput] = useState<boolean>(false)
    let [errorMaxInput, setErrorMaxInput] = useState<boolean>(false)
    const KEY_START_VALUE = 'startValue'
    const KEY_MAX_VALUE = 'maxValue'
    const MASSAGE_SET = "enter values and press 'SET'"
    const MASSAGE_INCORRECT_VALUE = "you enter incorrect value"

    let massage = errorStartInput||errorMaxInput ? MASSAGE_INCORRECT_VALUE : MASSAGE_SET

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

    const onClickSetButtonHandler = (startSetting: number, maxSetting: number) => {
        saveValue(KEY_START_VALUE, startSetting)
        saveValue(KEY_MAX_VALUE, maxSetting)
        setStartValue(startSetting)
        setMaxValue(maxSetting)
        setIsChangeSettings(false)
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
    const startValueForSetting = restoreValue(KEY_START_VALUE, 0)
    const maxValueForSetting = restoreValue(KEY_MAX_VALUE, 5)
    console.log(isMaxCount)
    console.log('qqq')
    return (
        <div className="App">
            <Settings setMaxValue={setMaxValue}
                      setStartValue={setStartValue}
                      onClickSetButton={onClickSetButtonHandler}
                      startValue={startValueForSetting}
                      maxValue={maxValueForSetting}
                      isChangeSettings={setIsChangeSettings}
                      setErrorStartInput={setErrorStartInput}
                      setErrorMaxtInput={setErrorMaxInput}
                      errorStartInput={errorStartInput}
                      errorMaxInput={errorMaxInput}
                      isDisabled={!isChangeSettings}/>
            <Counter massage={massage}
                     startValue={startValue}
                     isMaxCount={isMaxCount}
                     addCount={addCount}
                     maxCount={maxValue}
                     resetCount={resetCount}
                     isDisabled={isChangeSettings}/>
        </div>
    );
}

export default App;
