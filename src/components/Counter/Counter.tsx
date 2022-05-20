import React from 'react';
import {Count} from "../Count/Count";
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterPropsType = {
    incValue: number
    maxCount: number
    addCount: () => void
    resetCount: () => void
    isDisabled: boolean
    errorInput: boolean
}

const Counter = (props: CounterPropsType) => {
    const isMaxCount = props.incValue === props.maxCount
    const isDisabledIncButton = props.isDisabled || isMaxCount
    return (
        <div className={s.counter}>
            <Count incValue={props.incValue}
                   isMaxCount={isMaxCount}
                   errorInput={props.errorInput}
                isClickSet={!props.isDisabled}/>
            <div className={s.block}>
                <Button name="inc" onClick={props.addCount} isDisabled={isDisabledIncButton}/>
                <Button name="reset" onClick={props.resetCount} isDisabled={props.isDisabled}/>
            </div>
        </div>
    );
};

export default Counter;