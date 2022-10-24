import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );

      state.contacts.splice(index, 1);
    },
  },
});
export const { addContact, getVisibleContacts, deleteContact } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;
