import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
    try {
        const response = await axios.get("http://localhost:3000");
        return response.data;
    } catch (error) {
        Swal.fire({
            title: "Error!",
            text: error,
            icon: "error",
            confirmButtonText: "OK",
        });
    }
    throw error;
});

const gameSlice = createSlice({
    name: 'games',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default gameSlice.reducer;
