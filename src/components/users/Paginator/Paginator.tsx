import React from 'react';
import {Pagination, Stack} from "@mui/material";

type PaginatorPropsType =  {
    setCurrentPage: (el: number) => void
    totalUsersCount: number
}

const Paginator = (props : PaginatorPropsType) => {
        const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
            props.setCurrentPage(value);
        };
    return (
        <div>
            <Stack spacing={2}>
                <Pagination count={props.totalUsersCount} onChange={handleChange} color={'primary'} size={'small'}/>
            </Stack>
        </div>
    );
};

export default Paginator;