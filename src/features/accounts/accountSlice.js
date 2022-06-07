import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import accountService from "./accountService";

// Get user from local storage mobile
// const account = AsyncStorage.getItem('account');

const initialState = {
    account: [''],
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: {},
    message: ''
}

//Get Accounts
export const getAccount = createAsyncThunk('get-account/all', async (thunkAPI) => {
    try {
        return await accountService.getAccount()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getTodaySpent = createAsyncThunk('account/todays-spent', async (thunkAPI) => {
    try {
        return await accountService.getTodaySpent()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getAccountHistory = createAsyncThunk('get-account/history', async (thunkAPI) => {
    try {
        return await accountService.getAccountHistory()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});




export const accountSlice = createSlice({
    name: 'account',
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
            .addCase(getAccount.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAccount.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.accountData = action.payload
            })
            .addCase(getAccount.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.accountData = action.payload
            }) 
            .addCase(getTodaySpent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTodaySpent.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.spentTodayData = action.payload
            })
            .addCase(getTodaySpent.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.spentTodayData = action.payload
            })
            // .addCase(getAccountHistory.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(getAccountHistory.fulfilled, (state, action) => {
            //     state.isLoading = false,
            //         state.isSuccess = true,
            //         state.data = action.payload
            // })
            // .addCase(getAccountHistory.rejected, (state, action) => {
            //     state.isLoading = false,
            //         state.isError = true,
            //         state.data = action.payload
            // })

            ///Get Adaptors.......
    }
})

export const { reset } = accountSlice.actions;
export default accountSlice.reducer;