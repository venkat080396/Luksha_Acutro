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
import { isAuthenticated, authenticate, loginRequest, loginSuccess, loginFailure } from "../../features/Login/loginSlice"
import logo from "../../assets/icons/Logo.png"
import Label from "../../components/forms/Label/Label"

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginRequest);
        authenticate(userName, password)
            .then(response => {
                setAuthenticated(isAuthenticated());
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(loginFailure(errorMsg));
            })
    }

    useEffect(() => {
        setAuthenticated(isAuthenticated())
        if (authenticated) {
            navigate("/dashboard");
        }
    }, [authenticated])

    return (
        <Grid container className="grid" direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <Grid container justifyContent="center" alignItems="center" spacing={1}>
                    <Grid item>
                        <img height="60" width="60" src={logo} alt="Logo" />
                    </Grid>
                    <Grid item>
                        <Label label="Acutro" sx={{ fontWeight: "Bold", fontSize: 30 }} />
                    </Grid>
                </Grid>
            </Grid>
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