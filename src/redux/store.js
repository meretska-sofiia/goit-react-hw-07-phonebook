import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
