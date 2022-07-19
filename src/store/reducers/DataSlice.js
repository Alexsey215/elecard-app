import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: "",
    isLoading: false,
    categoryStatus: true,
    filesizeStatus: true,
    timestampStatus: true
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        dataFetching(state) {
            state.isLoading = true;
        },
        dataFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = "";
            state.data = action.payload;
        },
        dataFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        dataRemoveItem(state, action) {
            let id = null;
            state.data.findIndex((el, idx)=>{
                if(el.timestamp === action.payload) {
                    id = idx
                }
            })
            state.data.splice(id, 1);
        },
        dataSortByCategory(state) {
            state.data.sort((a, b) => a.category > b.category ? 1 : -1);
        },
        dataSortByFilesize(state) {
            state.data.sort((a, b) => a.filesize > b.filesize ? 1 : -1);
        },
        dataSortByTimestamp(state) {
            state.data.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);
        },
    }
})

export default dataSlice.reducer;