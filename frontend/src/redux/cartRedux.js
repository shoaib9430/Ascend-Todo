import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'todo',
  initialState:{
    todos:[]
  },
  reducers: {
    addToto: (state, action) => {
      
      state.todos.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;