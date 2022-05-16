import React from 'react';

type CountPropsType = {
    startValue: number
    isMaxCount: boolean
    massage: string
    isClickSet: boolean
}

export const Count = (props: CountPropsType) => {
    const countClassName = `Count ${props.isMaxCount ? 'MaxCount' : ''}`
    return (
        <div className={countClassName}>
            {props.startValue}
        </div>
    );
};
