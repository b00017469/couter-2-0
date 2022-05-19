import React from 'react';
import {Count} from "../Count/Count";
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterPropsType = {
    startValue: number
    maxCount: number
    addCount: () => void
    resetCount: () => void
    isMaxCount: boolean
    isDisabled: boolean
    massage: string
}

const Counter = (props: CounterPropsType) => {
    const isDisabledIncButton = props.isDisabled || props.isMaxCount
    return (
        <div className={s.counter}>
            <Count startValue={props.startValue}
                   isMaxCount={props.isMaxCount}
                   massage={props.massage}
                isClickSet={!props.isDisabled}/>
            <div className={s.block}>
                <Button name="inc" onClick={props.addCount} isDisabled={isDisabledIncButton}/>
                <Button name="reset" onClick={props.resetCount} isDisabled={props.isDisabled}/>
            </div>
        </div>
    );
};

export default Counter;