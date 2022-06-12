import React, {ChangeEvent} from 'react';
import {Pagination, Stack} from "@mui/material";
import {changeCurrentPageAC} from "../../../redux/reducers/users-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../redux/store";

const Paginator = () => {
    const dispatch = useDispatch()

    const usersCount = useAppSelector(state => state.users.totalUsersCount)
    const setCurrentPage = (event: ChangeEvent<unknown>, page: number) => {
        dispatch(changeCurrentPageAC(page))
    }

    const totalUsersCount = Math.ceil(usersCount / 10)
    const page = useAppSelector(state => state.users.currentPage)

    return (
        <div >
            <Stack spacing={2}>
                <Pagination count={totalUsersCount} page={page} onChange={setCurrentPage} color={'primary'}
                            size={'small'}/>
            </Stack>
        </div>
    );
};

export default Paginator;