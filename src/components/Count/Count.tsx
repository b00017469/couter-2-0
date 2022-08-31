import React from 'react';
import s from './Count.module.css'

type CountPropsType = {
    incValue: number
    maxCount: number
    errorInput: boolean
    isClickSet: boolean
}

export const Count = (props: CountPropsType) => {
    const MASSAGE_SET = "enter values and press 'SET'"
    const MASSAGE_INCORRECT_VALUE = "you enter incorrect value"
    const massage = props.errorInput ? MASSAGE_INCORRECT_VALUE : MASSAGE_SET
    const countClassName = () => {
        if (!props.isClickSet) {
            return `${s.count} ${s.massage}`
        }
        if (props.incValue===props.maxCount) {
            return `${s.count} ${s.max}`
        } else return `${s.count}`
    }
    return (
        <div className={countClassName()}>
         <span className={s.span}>  {props.isClickSet ? props.incValue : massage}</span>
        </div>
    );
};
