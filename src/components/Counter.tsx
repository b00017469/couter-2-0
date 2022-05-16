import React from 'react';
import {Count} from "./Count";
import {Button} from "./Button";

type CounterPropsType = {
    count: number
    maxCount: number
    addCount: () => void
    resetCount: () => void
    isMaxCount: boolean
    isDisabled: boolean
}

const Counter = (props: CounterPropsType) => {
const isDisabled= props.isDisabled || props.isMaxCount
    return (
        <div className="Counter">
            <Count count={props.count} isMaxCount={props.isMaxCount}/>
            <div className="Counter">
                <Button name="inc" onClick={props.addCount} isDisabled={isDisabled}/>
                <Button name="reset" onClick={props.resetCount} isDisabled={props.isDisabled}/>
            </div>
        </div>
    );
};

export default Counter;