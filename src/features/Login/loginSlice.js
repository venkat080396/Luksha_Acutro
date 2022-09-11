import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../../UserPool';
// export const getSession = async () => {
//     return await new Promise((resolve, reject) => {
//         const user = Pool.getCurrentUser();
//         if (user) {
//             user.getSession((err, session) => {
//                 if (err) {
//                     reject();
//                 }
//                 else {
//                     resolve(session);
//                 }
//             });
//         }
//         else {
//             reject();
//         }
//     });
// };

export const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username, Pool });
        const authDetails = new AuthenticationDetails({ Username, Password });

        //console.log(user.getUserAttributes());
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

export const setUserAttributes = createAsyncThunk(
    'login/setUserAttributes',
    async (attributes) => {
        return Promise.resolve(attributes)
    }
);

export const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
        user.signOut();
    }
}

export const isAuthenticated = () => {
    const user = Pool.getCurrentUser();
    if (user) {
        return true;
    }
    return false;
}

const initialState = {
    currentUser: {},
    loading: false,
    errorMessage: '',
    userAttributes: null
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {
        [setUserAttributes.pending]: () => {
        },
        [setUserAttributes.fulfilled]: (state, { payload }) => {
            return { ...state, userAttributes: payload };
        },
        [setUserAttributes.rejected]: () => {
        },
    },
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload;
        }
    }
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

export const getUserAttributes = (state) => state.login.userAttributes;

export default loginSlice.reducer;