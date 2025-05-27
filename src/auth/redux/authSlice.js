import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    status: 'idle',
};

export const login = createAsyncThunk('auth/login', async (data) => {
});

export const register = createAsyncThunk('auth/register', async (data) => {
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // login
            .addCase(login.pending, state => {
                state.status = 'pending';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            // register
            .addCase(register.pending, state => {
                state.status = 'pending';
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            });
    },
});

export default authSlice.reducer;
