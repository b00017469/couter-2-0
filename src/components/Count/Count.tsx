import React from 'react';
import s from './Count.module.css'

type CountPropsType = {
    startValue: number
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
            {props.isClickSet ? props.startValue : props.massage}
        </div>
    );
};
