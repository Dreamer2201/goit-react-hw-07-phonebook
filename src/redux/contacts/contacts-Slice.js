import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addNewContact, deleteContact } from "redux/api/contactsAPI";

const initialState = {
        contacts: new Array(0),
        loading: false,
        error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.loading = true;
            return state;
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.loading = false;
            state.contacts = [...action.payload];
            return state;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        },

        [deleteContact.pending]: (state) => {
            state.loading = true;
            return state;
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.loading = false;
            const result = state.contacts.filter(item => item.id !== action.payload);
            state.contacts = [...result];
            return state;
        },
        [deleteContact.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        },
        [addNewContact.pending]: (state) => {
            state.loading = true;
            return state;
        },
        [addNewContact.fulfilled]: (state, action) => {
            state.loading = false;
            state.contacts.push(action.payload);
            return state;
        },
        [addNewContact.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        }
    }
    
});

export default contactsSlice.reducer;


