import React from 'react';

type buttonPropsType = {
    callback: () => void
    name: string
}
export const Button = (props: buttonPropsType) => {
    const onClickButtonHeader = ()=> {
        props.callback()
    }
    return (
        <button onClick={onClickButtonHeader}>{props.name}</button>
    );
};
