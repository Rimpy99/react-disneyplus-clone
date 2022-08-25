import { createSlice } from '@reduxjs/toolkit';

const watchListSlice = createSlice({
    name: "watchListMovies",
    initialState: [],
    reducers: {
        add: (state, { payload }) => { state.push(payload) },
        del: (state, { payload }) => { return state.filter(({ id }) => id !== payload) },
    }
})

export const { add } = watchListSlice.actions;
export const { del } = watchListSlice.actions;

export const selectWatchListMovies = ({watchListMovies}) => watchListMovies;

export default watchListSlice.reducer;