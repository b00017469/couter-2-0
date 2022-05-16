import React from 'react';
import {Button} from "./Button";
import {Input} from "./Input";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    onClickSetButton: () => void
    isChangedSettings: (status: boolean) => void
}

export const Setting = (props: SettingsPropsType) => {
    const onChangeMaxValue = (value: number) => {
        props.setMaxValue(value)
    }
    const onChangeStartValue = (value: number) => {
        props.setStartValue(value)
    }
    const onClickHandler = () => {
        props.onClickSetButton()
    }
    return (
        <div className="Counter">
            <div>
                <Input title={'max value:'}
                       onChangeValue={onChangeMaxValue}
                       value={props.maxValue}
                       isChangedSettings={props.isChangedSettings}/>
                <Input title={'start value:'}
                       onChangeValue={onChangeStartValue}
                       value={props.startValue}
                       isChangedSettings={props.isChangedSettings}/>

            </div>
            <div className="Counter">
                <Button name="set" onClick={onClickHandler}/>
            </div>
        </div>
    );
};
