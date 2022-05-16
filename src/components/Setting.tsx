import React from 'react';
import {Button} from "./Button";
import {Input} from "./Input";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    onClickSetButton: () => void
    isChangeSettings: (status: boolean) => void
    isDisabled: boolean
}

export const Setting = (props: SettingsPropsType) => {

    return (
        <div className="Counter">
            <div>
                <Input title={'max value:'}
                       onChangeValue={props.setMaxValue}
                       value={props.maxValue}
                       isChangeSettings={props.isChangeSettings}/>
                <Input title={'start value:'}
                       onChangeValue={props.setStartValue}
                       value={props.startValue}
                       isChangeSettings={props.isChangeSettings}/>
            </div>
            <div className="Counter">
                <Button name="set" onClick={props.onClickSetButton} isDisabled={props.isDisabled}/>
            </div>
        </div>
    );
};
