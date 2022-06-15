import React from 'react';

type buttonPropsType = {
    callback: () => void
    name: string
    disabled: boolean
}
export const Button = React.memo((props: buttonPropsType) => {
    const onClickButtonHeader = () => {
        props.callback()
    }
    return (
        <button disabled={props.disabled} onClick={onClickButtonHeader}>{props.name}</button>
    );
});
