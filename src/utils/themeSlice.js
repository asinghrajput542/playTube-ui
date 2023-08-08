import { createSlice } from "@reduxjs/toolkit";

const theme=createSlice({
    name:"theme",
    initialState:{
        mode:"dark"
    },
    reducers:{
        modeChange:(state)=>{
            state.mode==="dark"?state.mode="light":state.mode="dark"
        }
    }
});

export const { modeChange }=theme.actions;
export default theme.reducer;