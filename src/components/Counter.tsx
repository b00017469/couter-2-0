import React from 'react';
import {Count} from "./Count";
import {Button} from "./Button";

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
        <div className="Counter">
            <Count startValue={props.startValue}
                   isMaxCount={props.isMaxCount}
                   massage={props.massage}
                isClickSet={!props.isDisabled}/>
            <div className="Counter">
                <Button name="inc" onClick={props.addCount} isDisabled={isDisabledIncButton}/>
                <Button name="reset" onClick={props.resetCount} isDisabled={props.isDisabled}/>
            </div>
        </div>
    );
};

export default Counter;