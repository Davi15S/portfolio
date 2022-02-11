import { createSlice } from "@reduxjs/toolkit"

export const itemInfoListSlice = createSlice({
    name: "itemInfoList",
    initialState: {
        items: []
    },
    reducers: {
        setItemInfoList: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        
        removeFromList: (state, action) => {
            const index = state.items.findIndex(listItem => listItem.assetid === action.payload.assetid)

            let newList = [...state.items]

            if(index >= 0){
                newList.splice(index, 1)
            }

            state.items = newList
        }
    }
})

export const { setItemInfoList, removeFromList } = itemInfoListSlice.actions

export default itemInfoListSlice.reducer