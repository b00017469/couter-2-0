import React, {useState} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import s from "./Settings.module.css"

type SettingsPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    onClickSetButton: (startSetting: number, maxSetting: number) => void
    isChangeSettings: (status: boolean) => void
    setErrorStartInput: (status: boolean) => void
    setErrorMaxtInput: (status: boolean) => void
    errorStartInput: boolean
    errorMaxInput: boolean
    isDisabled: boolean
}

export const Settings = (props: SettingsPropsType) => {
    let [startValueSetting, setStartValueSetting] = useState<number>(props.startValue)
    let [maxValueSetting, setMaxValueSetting] = useState<number>(props.maxValue)
    const onChangeStartValue = (value: number) => {
        if (value < -1 || value > maxValueSetting) {
            props.setErrorStartInput(true)
        } else {
            setStartValueSetting(value)
            if (value === -1 || value === maxValueSetting) {
                props.setErrorStartInput(true)
            } else props.setErrorStartInput(false)
            if (value === maxValueSetting) props.setErrorMaxtInput(true)
            if (props.errorStartInput && props.errorMaxInput && value !== maxValueSetting) {
                props.setErrorMaxtInput(false)
            }
        }
    }
    const onChangeMaxValue = (value: number) => {
        if (value < -1 || value < startValueSetting) {
            props.setErrorMaxtInput(true)
        } else {
            setMaxValueSetting(value)
            if (value === -1 || value === startValueSetting) {
                props.setErrorMaxtInput(true)
            } else props.setErrorMaxtInput(false)
            if (value === startValueSetting) props.setErrorStartInput(true)
            if (props.errorStartInput && props.errorMaxInput && value !== startValueSetting) {
                props.setErrorStartInput(false)
            }
        }
    }
    const onClickHandler = () => {
        props.onClickSetButton(startValueSetting, maxValueSetting)
    }
    const isDisabledHandler = props.isDisabled || props.errorStartInput || props.errorMaxInput

    return (
        <div className={s.settings}>
            <div className={s.block}>
                <Input title={'max value:'}
                       onChangeValue={onChangeMaxValue}
                       value={maxValueSetting}
                       isChangeSettings={props.isChangeSettings}
                       error={props.errorMaxInput}/>
                <Input title={'start value:'}
                       onChangeValue={onChangeStartValue}
                       value={startValueSetting}
                       isChangeSettings={props.isChangeSettings}
                       error={props.errorStartInput}/>
            </div>
            <div className={s.block}>
                <Button name="set" onClick={onClickHandler} isDisabled={isDisabledHandler}/>
            </div>
        </div>
    );
};
