import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export default store;
