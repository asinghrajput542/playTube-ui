import { createSlice } from "@reduxjs/toolkit";

const sidePanelState=createSlice({
    name:"sidePanelState",
    initialState:{
        isOpen:true
    },
    reducers:{
        changeStateOnClick: (state) => {
            
            (state.isOpen)?state.isOpen=false:state.isOpen=true;

        },
        changeStateFalse:(state)=>{
            state.isOpen=false;
        },
        changeStateTrue:(state)=>{
            state.isOpen=true;
        }


    },

});

export const { changeStateOnClick,changeStateFalse,changeStateTrue } = sidePanelState.actions;
export default sidePanelState.reducer;