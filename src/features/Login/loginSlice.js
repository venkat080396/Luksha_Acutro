import { createSlice } from "@reduxjs/toolkit";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../../UserPool";

export const getSession = async () => {
    return await new Promise((resolve, reject) => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.getSession((err, session) => {
                if (err) {
                    reject();
                }
                else {
                    resolve(session);
                }
            });
        }
        else {
            reject();
        }
    });
};

export const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username, Pool });
        const authDetails = new AuthenticationDetails({ Username, Password });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                resolve(data);
            },
            onFailure: (err) => {
                reject(err);
            },
            newPasswordRequired: (data) => {
                resolve(data);
            }
        })
    })
}

export const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
        user.signOut();
    }
}

const initialState = {
    isAuthenticated: false,
    currentUser: {},
    loading: false,
    errorMessage: ""
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload;
        }
    }
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;
export const getIsAuthenticated = (state) => state.login.isAuthenticated;

export default loginSlice.reducer;