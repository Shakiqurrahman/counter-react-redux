import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state,action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value = Math.max(0, state.value - action.payload);
        },
    },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
