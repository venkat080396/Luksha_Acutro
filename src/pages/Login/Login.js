/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import Textfield from "../../components/forms/TextField/TextField";
import Button from "../../components/forms/Button/Button";
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "./Login.Styles.css";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIsAuthenticated, authenticate, loginRequest, loginSuccess, loginFailure } from "../../features/Login/loginSlice"

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(getIsAuthenticated);

    const handleLogin = () => {
        dispatch(loginRequest);
        authenticate(userName, password)
            .then(response => {
                const isAuthenticated = response ? true : false;
                dispatch(loginSuccess(isAuthenticated));
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(loginFailure(errorMsg));
            })
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    })

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <Textfield name="EMAIL" value={userName} iconStart={<PersonOutlineSharpIcon />} onChange={(event) => setUserName(event.target.value)} />
            </Grid>
            <Grid item>
                <Textfield name="PASSWORD" type="password" value={password} iconStart={<LockOutlinedIcon />} onChange={(event) => setPassword(event.target.value)} />
            </Grid>
            <Grid item>
                <Button value="LOGIN" onClick={() => handleLogin()} />
            </Grid>
        </Grid>
    )
};

export default Login