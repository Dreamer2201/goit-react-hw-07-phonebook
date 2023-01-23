import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    'contacts/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://63c8ee10320a0c4c953d3945.mockapi.io/contacts');
            const result = await response.json();
            return result;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
);

export const addNewContact = createAsyncThunk(
    'contacts/add',
    async (data, { rejectWithValue }) => {
        try {
            await fetch('https://63c8ee10320a0c4c953d3945.mockapi.io/contacts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            });
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async ({ id }, { rejectWithValue }) => {
        try {
            await fetch(`https://63c8ee10320a0c4c953d3945.mockapi.io/contacts/${id}`, {
                method: 'DELETE'
            });
            return id;

        } catch (error) {
            return rejectWithValue(error);
        } 
    }
);
