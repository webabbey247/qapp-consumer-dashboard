import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import loanService from "./loanService";

// Get user from local storage mobile
// const account = AsyncStorage.getItem('account');

const initialState = {
    loan: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: {},
    message: ''
}

//Get All Loans
export const getAllLoans = createAsyncThunk('loans/all', async (thunkAPI) => {
    try {
        return await loanService.getAllLoans()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

//Get Repayment amortization
export const getRepayment = createAsyncThunk('loans/calculate-monthly-repayment', async (formData, thunkAPI) => {
    try {
        return await loanService.getRepayment(formData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


//Get Eligibility
export const getEligibility = createAsyncThunk('loans/eligibility', async (loanID, thunkAPI) => {
    try {
        return await loanService.getEligibility(loanID)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


//Apply Loan
export const applyLoan = createAsyncThunk('loans/application', async (formData, thunkAPI) => {
    try {
        return await loanService.applyLoan(formData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


export const loanSlice = createSlice({
    name: 'loan',
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
            .addCase(getAllLoans.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllLoans.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.loanInfo = action.payload
            })
            .addCase(getAllLoans.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.loanInfo = action.payload
            })
            ///.......
            .addCase(getRepayment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getRepayment.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.calcData = action.payload
            })
            .addCase(getRepayment.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.calcData = action.payload
            })
            ///.......
            .addCase(applyLoan.pending, (state) => {
                state.isLoading = true
            })
            .addCase(applyLoan.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.loanInfo = action.payload
            })
            .addCase(applyLoan.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.loanInfo = action.payload
            })
              ///.......
              .addCase(getEligibility.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getEligibility.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.eligibleInfo = action.payload
            })
            .addCase(getEligibility.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.eligibleInfo = action.payload
            })
    }
})

export const { reset } = loanSlice.actions;
export default loanSlice.reducer;