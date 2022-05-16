import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    value: number
    onChangeValue: (value: number) => void
    isChangedSettings: (status:boolean)=>void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = JSON.parse(e.currentTarget.value) as number
        props.onChangeValue(value)
        props.isChangedSettings(true)
    }
    return (
        <div>
            <span>{props.title}</span>
            <input type={"number"} onChange={onChangeHandler} value={`${props.value}`}/>
        </div>
    );
};
