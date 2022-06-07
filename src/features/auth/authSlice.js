import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
    user: [''],
    isLoading: false,
    isSuccess: false,
    isError: false,
    status: '',
    message: '',
    data: {},
}

//Login user
export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        return await authService.login(formData)
    } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
                state.isLoading = false,
                state.isSuccess = false,
                state.isError = false,
                state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                    state.isLoading = false,
                    state.isSuccess = true,
                    state.loginInfo = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                    state.isLoading = false,
                    state.isError = true,
                    state.loginInfo = action.payload
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;