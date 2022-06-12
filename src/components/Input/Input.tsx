import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    value: string
    autoFocus?: boolean
    setValue: (title: string) => void
    onClickAdd?: () => void
    onKey?: (e: KeyboardEvent<HTMLInputElement>) => void
    onBlur?: (isDone: boolean) => void
    className?: string
}

export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }
    const onBlurHandler = () => {
        props.onBlur && props.onBlur(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        props.onKey && props.onKey(e)
        props.onClickAdd
        && e.key === 'Enter'
        && props.onClickAdd()
    }
    const className = props.className ? props.className : ''
    return (
        <input className={className}
               autoFocus={props.autoFocus ? props.autoFocus : false}
               onChange={onChangeInputHandler}
               onKeyPress={onKeyPressHandler}
               onBlur={onBlurHandler}
               value={props.value}/>
    );
};
