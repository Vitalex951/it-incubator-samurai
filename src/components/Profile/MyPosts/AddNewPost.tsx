import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import s from './MyPosts.module.css'

type AddPostFormPropsType = {
    callback: (value: string) => void
}

export type messageType = {
    post: string
}
export const AddMPostForm = (props: AddPostFormPropsType) => {
    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const addPostClick = () => {debugger
        props.callback(value)
        setValue('')
    }
    const addPostClickEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.callback(value)
            setValue('')
        }
    }

    return <div className={s.addPostContainer}>
        <TextField onChange={onChangeHandler} value={value} id="outlined-basic" label="What's new?" variant="outlined" onKeyPress={addPostClickEnter}/>
        <Button variant="contained" size="small" onClick={addPostClick}
                style={{
                    width: '80px',
                    height: '40px',
                    fontSize: '12px',
                    marginLeft: '10px'

                }}>
            Post
        </Button>
    </div>
}
