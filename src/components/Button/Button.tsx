import React from 'react';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

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
        <button disabled={props.disabled} onClick={onClickButtonHeader}>{props.name}{AccessAlarm}</button>
    );
});
