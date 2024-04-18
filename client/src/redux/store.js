import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import gameByIdReducer from './gameByIdSlice';

const store = configureStore({
    reducer: {
        games: gameReducer,
        gameById: gameByIdReducer
    },
});

export default store;
