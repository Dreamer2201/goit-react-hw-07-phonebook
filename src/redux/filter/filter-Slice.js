import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterNameContact: (_, action) => action.payload,    
        }
    }
);

export const { filterNameContact} = filterSlice.actions;
export default filterSlice.reducer;