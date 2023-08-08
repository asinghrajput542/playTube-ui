import { configureStore } from "@reduxjs/toolkit";
import sidePanelStateSlice from "./sidePanelStateSlice";
import themeSlice from "./themeSlice";

const store= configureStore({
    reducer:{
        sidePanel:sidePanelStateSlice,
        theme:themeSlice
    }

})

export default store;

