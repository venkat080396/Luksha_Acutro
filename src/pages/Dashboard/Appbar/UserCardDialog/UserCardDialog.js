import { Button, Stack } from '@mui/material'
import React from 'react'
import UserCard from '../UserCard/UserCard'
import { useNavigate } from "react-router-dom";
import { logout } from '../../../../features/Login/loginSlice'
import { APPBAR } from '../../constants'

const UserCardDialog = (props) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return (
        <Stack spacing={5}>
            <UserCard {...props} />
            <Button variant="contained" color="error" onClick={handleLogout}>
                {APPBAR.BUTTONS.LOGOUT}
            </Button>
        </Stack>
    )
}

export default UserCardDialog