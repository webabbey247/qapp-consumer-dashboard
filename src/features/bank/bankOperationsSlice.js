import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import bankOperationsService from "./bankOperationsService";

// Get user from local storage mobile
// const account = AsyncStorage.getItem('account');

const initialState = {
    bankOperation: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: {},
    message: ''
}

//Deposit
export const deposit = createAsyncThunk('operations/deposit', async (params, thunkAPI) => {
    try {
        return await bankOperationsService.deposit(params)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

//Withdrawal
export const withdrawal = createAsyncThunk('operations/withdrawal', async (params, thunkAPI) => {
    try {
        return await bankOperationsService.withdrawal(params)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

//Inter Transfer
export const interTransfer = createAsyncThunk('operations/transfer/inter', async (params, thunkAPI) => {
    try {
        return await bankOperationsService.interTransfer(params)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

//Intra Transfer
export const intraTransfer = createAsyncThunk('operations/transfer/intra', async (params, thunkAPI) => {
    try {
        return await bankOperationsService.intraTransfer(params)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


export const bankOperationsSlice = createSlice({
    name: 'bankOperation',
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
            .addCase(deposit.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deposit.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.data = action.payload
            })
            .addCase(deposit.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.data = action.payload
            }) 
            ///.......
            .addCase(withdrawal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(withdrawal.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.data = action.payload
            })
            .addCase(withdrawal.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.data = action.payload
            }) 
            ///.......
            .addCase(interTransfer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(interTransfer.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.data = action.payload
            })
            .addCase(interTransfer.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.dataInter = action.payload
            }) 

            ///.......
            .addCase(intraTransfer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(intraTransfer.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.data = action.payload
            })
            .addCase(intraTransfer.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.dataIntra = action.payload
            }) 
    }
})

export const { reset } = bankOperationsSlice.actions;
export default bankOperationsSlice.reducer;