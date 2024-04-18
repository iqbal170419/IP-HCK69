import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchGameById = createAsyncThunk('games/fetchGameById', async (id) => {
    try {
        const response = await axios.get(`https://localhost:3000/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        Swal.fire({
            title: "Error!",
            text: error,
            icon: "error",
            confirmButtonText: "OK",
        });
        throw error;
    }
});

const gameByIdSlice = createSlice({
    name: 'gameById',
    initialState: {
        data: {},
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGameById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGameById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchGameById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default gameByIdSlice.reducer;
