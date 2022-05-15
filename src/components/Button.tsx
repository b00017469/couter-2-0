import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    isDisabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button  className="Button"
                onClick={props.onClick}
                disabled={props.isDisabled}>
            {props.name}
        </button>
    );
};
