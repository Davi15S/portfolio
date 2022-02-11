import {configureStore} from "@reduxjs/toolkit"
import itemIsActiveReducer from "./itemIsActive"
import itemInfoActiveReducer from "./itemList"

export default configureStore({
    reducer:{
        itemIsActive: itemIsActiveReducer,
        itemList: itemInfoActiveReducer
    }
})