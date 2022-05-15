import React from 'react';

type CountPropsType = {
    count: number
    isMaxCount: boolean
}

export const Count = (props: CountPropsType) => {
    const countClassName = `Count ${props.isMaxCount ? 'MaxCount' : ''}`
    return (
        <div className={countClassName}>
            {props.count}
        </div>
    );
};
