import React from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import s from "./Settings.module.css"

type SettingsPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    onClickSetButton: () => void
    isChangeSettings: (status: boolean) => void
    errorStartInput: boolean
    errorMaxInput: boolean
    isDisabled: boolean
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeStartValue = (value: number) => props.setStartValue(value)

    const onChangeMaxValue = (value: number) => props.setMaxValue(value)

    const onClickHandler = () => props.onClickSetButton()

    const isDisabledHandler = props.isDisabled || props.errorStartInput || props.errorMaxInput
    return (
        <div className={s.settings}>
            <div className={s.block}>
                <Input title={'max value:'}
                       onChangeValue={onChangeMaxValue}
                       value={props.maxValue}
                       isChangeSettings={props.isChangeSettings}
                       error={props.errorMaxInput}/>
                <Input title={'start value:'}
                       onChangeValue={onChangeStartValue}
                       value={props.startValue}
                       isChangeSettings={props.isChangeSettings}
                       error={props.errorStartInput}/>
            </div>
            <div className={s.block}>
                <Button name="set" onClick={onClickHandler} isDisabled={isDisabledHandler}/>
            </div>
        </div>
    );
};
