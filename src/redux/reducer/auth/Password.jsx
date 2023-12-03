import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    forget: [],
    update: [],
}

const password = createSlice({
    name : "password",
    initialState ,
    reducers :{
        setForget: (state, action) =>{
            state.forget = action.payload
        },
        setUpdate: (state, action) =>{
            state.update = action.payload
        },
    }
})

export const { setForget, setUpdate } = password.actions

export default password.reducer;