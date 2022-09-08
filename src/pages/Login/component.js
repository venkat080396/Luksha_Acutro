import React, { useState, useEffect } from "react";
import { PersonOutlineSharp as PersonOutlineSharpIcon, LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import { Grid, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Textfield from "../../components/Inputs/TextField/TextField";
import { isAuthenticated, authenticate } from "./slice"
import logo from "../../assets/icons/Logo.png"
import { LOGIN } from "./constants"

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const theme = useTheme();
    const navigate = useNavigate();

    const handleLogin = () => {
        authenticate(userName, password)
            .then(() => {
                navigate("/dashboard");
            })
    }

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/dashboard");
        }
    })

    const handleKeydown = (e) => {
        if (e.code === LOGIN.ENTER) {
            e.preventDefault()
            handleLogin();
        }
    }

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            sx={{
                height: "100vh",
                width: "100vw",
                padding: 0,
                margin: 0
            }}>
            <Grid item>
                <Grid container justifyContent="center" alignItems="center" spacing={1}>
                    <Grid item>
                        <img height="60" width="60" src={logo} alt="Logo" />
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontWeight: "Bold", fontSize: 40 }}>
                            {LOGIN.COMPANY_NAME}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Textfield
                    name={LOGIN.EMAIL}
                    value={userName}
                    iconStart={<PersonOutlineSharpIcon />}
                    onChange={(event) => setUserName(event.target.value)}
                    sx={{
                        width: theme.spacing(58.375),
                        height: theme.spacing(8.125)
                    }}
                    onKeyDown={handleKeydown}
                />
            </Grid>
            <Grid item>
                <Textfield
                    name={LOGIN.PASSWORD}
                    type="password"
                    value={password}
                    iconStart={<LockOutlinedIcon />}
                    onChange={(event) => setPassword(event.target.value)}
                    sx={{
                        width: theme.spacing(58.375),
                        height: theme.spacing(8.125)
                    }}
                    onKeyDown={handleKeydown}
                />
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    sx={{ width: theme.spacing(31.875), height: theme.spacing(8) }}
                    onClick={() => handleLogin()}>
                    <Typography variant="body2">
                        {LOGIN.BUTTONS.LOGIN}
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    )
};

export { Login };