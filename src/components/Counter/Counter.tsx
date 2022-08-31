import React from 'react';
import {Count} from "../Count/Count";
import {Button} from "../Button/Button";
import s from './Counter.module.css'
import {setIncValue} from "../../bll/counter-reducer";
import {useDispatch} from "react-redux";

type CounterPropsType = {
    incValue: number
    maxCount: number
    startValue: number
    isDisabled: boolean
    errorInput: boolean
}

const Counter = (props: CounterPropsType) => {

    const dispatch = useDispatch()

    const addCount = () => {
        dispatch(setIncValue(props.incValue + 1))
    }
    const resetCount = () => dispatch(setIncValue(props.startValue))

    const isDisabledIncButton = props.isDisabled || props.incValue === props.maxCount
    return (
        <div className={s.counter}>
            <Count incValue={props.incValue}
                   maxCount={props.maxCount}
                   errorInput={props.errorInput}
                   isClickSet={!props.isDisabled}/>
            <div className={s.block}>
                <Button name="inc" onClick={addCount}
                        isDisabled={isDisabledIncButton}/>
                <Button name="reset" onClick={resetCount}
                        isDisabled={props.isDisabled}/>
            </div>
        </div>
    );
};

export default Counter;