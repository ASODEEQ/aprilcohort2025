import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
        students: [],
        isLoading: false,
    },

    reducers:{

    }

})

export default counterSlice.reducer