import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-Slice';
import filterReducer from './filter/filter-Slice';

const store = configureStore({
  reducer: {
    phoneBook: contactsReducer,
    filter: filterReducer,
  },
}
);

export default store;
