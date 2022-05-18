import React, {useState} from 'react';
import {Button} from "./Button";
import {Input} from "./Input";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    onClickSetButton: (startSetting: number, maxSetting: number) => void
    isChangeSettings: (status: boolean) => void
    setErrorInput: (status: boolean) => void
    errorInput: boolean
    isDisabled: boolean
}

export const Setting = (props: SettingsPropsType) => {
    let [startValueSetting, setStartValueSetting] = useState<number>(props.startValue)
    let [maxValueSetting, setMaxValueSetting] = useState<number>(props.maxValue)
    const onChangeStartValue = (value: number) => {
        if (value >= 0 && value < maxValueSetting) {
            props.setErrorInput(false)
            setStartValueSetting(value)
        } else {
            props.setErrorInput(true)
            if (value === -1 || value === maxValueSetting){
                setStartValueSetting(value)
            }
        }
    }
    const onChangeMaxValue = (value: number) => {
        if (value > 0 && value > startValueSetting) {
            props.setErrorInput(false)
            setMaxValueSetting(value)
        } else {
            props.setErrorInput(true)
            if (value === 0 || value === startValueSetting){
                setMaxValueSetting(value)
            }
        }
    }
    const onClickHandler = () => {
        props.onClickSetButton(startValueSetting, maxValueSetting)
    }

    return (
        <div className="Counter">
            <div>
                <Input title={'max value:'}
                       onChangeValue={onChangeMaxValue}
                       value={maxValueSetting}
                       isChangeSettings={props.isChangeSettings}
                       error={props.errorInput}/>
                <Input title={'start value:'}
                       onChangeValue={onChangeStartValue}
                       value={startValueSetting}
                       isChangeSettings={props.isChangeSettings}
                       error={props.errorInput}/>
            </div>
            <div className="Counter">
                <Button name="set" onClick={onClickHandler} isDisabled={props.isDisabled}/>
            </div>
        </div>
    );
};
