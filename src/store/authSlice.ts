import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appAxios from '../services/appAxios'
import { RegisterFormData } from '../pages/Registration'
import { LoginFormData } from '../pages/Login'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null
    const userType = localStorage.getItem('userType');

const initialState = {
    loading: false,
    userInfo: null, // for user the object
    userToken, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
    userType
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: RegisterFormData, { rejectWithValue }) => {
        try {
            await appAxios.post(
                '/auth/register',
                data,
            )
        } catch (error: any) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (body: LoginFormData, { rejectWithValue }) => {
        try {
            const { data } = await appAxios.post(
                '/auth/login',
                body,
            )
            localStorage.setItem('userToken', data.jwt)
            localStorage.setItem('userType', data.userType)
            return data
        } catch (error: any) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken') 
            localStorage.removeItem('userType')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
            state.userType = null; 
        }
    },
    extraReducers: (builder) => {
        // Login user
        builder.addCase(login.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(login.fulfilled, (state, action: any) => {
            state.loading = false
            state.userInfo = action.payload
            state.userToken = action.payload.jwt
            state.userType = action.payload.userType;
        })
        builder.addCase(login.rejected, (state, action: any) => {
            state.loading = false
            state.error = action.payload
        })
        // Register user
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = false
            state.success = true
        })
        builder.addCase(registerUser.rejected, (state, action: any) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

// ...
export const { logout } = authSlice.actions
export default authSlice.reducer