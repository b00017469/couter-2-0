import React from 'react';
import s from './Count.module.css'

type CountPropsType = {
    incValue: number
    isMaxCount: boolean
    massage: string
    isClickSet: boolean
}

export const Count = (props: CountPropsType) => {
    const countClassName = ()=>{
        if (!props.isClickSet){
            return `${s.count} ${s.massage}`
        } else if (props.isMaxCount){
            return `${s.count} ${s.max}`
        } else return `${s.count}`
        }
    return (
        <div className={countClassName()}>
            {props.isClickSet ? props.incValue : props.massage}
        </div>
    );
};
