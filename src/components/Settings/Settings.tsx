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

    const isDisabledHandler = props.isDisabled || props.errorStartInput || props.errorMaxInput

    return (
        <div className={s.settings}>
            <div className={s.block}>
                <Input title={'max value:'}
                       onChangeValue={props.setMaxValue}
                       value={props.maxValue}
                       isChangeSettings={props.isChangeSettings}
                       error={props.errorMaxInput}/>
                <Input title={'start value:'}
                       onChangeValue={props.setStartValue}
                       value={props.startValue}
                       isChangeSettings={props.isChangeSettings}
                       error={props.errorStartInput}/>
            </div>
            <div className={s.block}>
                <Button name="set" onClick={props.onClickSetButton} isDisabled={isDisabledHandler}/>
            </div>
        </div>
    );
};
