import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    title: string
    value: number
    onChangeValue: (value: number) => void
    isChangeSettings: (status: boolean) => void
    error: boolean
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = JSON.parse(e.currentTarget.value) as number
        props.onChangeValue(value)
        props.isChangeSettings(true)
    }
    const inputClassName = `${s.input} ${props.error ? s.error : ''}`
    return (
        <div>
            <span className={s.span}>{props.title}</span>
            <input className={inputClassName} type={"number"} onChange={onChangeHandler} value={`${props.value}`}/>
        </div>
    );
};

