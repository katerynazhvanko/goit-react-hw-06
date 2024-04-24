import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addNumber: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteNumber(state, action) {
      state.items -= action.payload;
    },
  },
});

export const { addNumber, deleteNumber } = contactsSlice.actions;

export default contactsSlice.reducer;
