import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./bll/store";
import {
    InitialStateType,
    setIncValue,
    setMaxValue,
    setStartValue
} from "./bll/counter-reducer";

function App() {

    const counter = useSelector<StateType, InitialStateType>(state => state.counter)
    const incValue = counter.incValue
    const startValue = counter.startValue
    const maxValue = counter.maxValue

    const dispatch = useDispatch()

    let [isChangeSettings, setIsChangeSettings] = useState<boolean>(false)

    let errorStartInput = startValue <= -1 || startValue >= maxValue
    let errorMaxInput = maxValue <= -1 || maxValue <= startValue

    const errorInput = errorStartInput || errorMaxInput

    const setStartValueHandler = (value: number) => {
        if (value >= -1 && value <= maxValue) {
            dispatch(setStartValue(Math.trunc(value)))
        }
    }
    const setMaxValueHandler = (value: number) => {
        if (value >= -1 && value >= startValue) {
            dispatch(setMaxValue(Math.trunc(value)))
        }
    }
    const onClickSetButtonHandler = () => {
        dispatch(setIncValue(startValue))
        setIsChangeSettings(false)
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
                     maxCount={maxValue}
                     startValue={startValue}
                     isDisabled={isChangeSettings}/>
        </div>
    );
}

export default App;
