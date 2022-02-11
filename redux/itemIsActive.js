import { createSlice } from "@reduxjs/toolkit"

export const itemIsActiveSlice = createSlice({
    name: "itemIsActive",
    initialState: {
        value: false
    },
    reducers: {
        setactive: (state,action) => {
            state.value = action.payload
        }
    }
})

export const { setactive } = itemIsActiveSlice.actions

export default itemIsActiveSlice.reducer