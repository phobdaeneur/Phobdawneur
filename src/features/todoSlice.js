import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, title, start, end) => {
      const todo = {
        title: title.payload,
        start: start.payload,
        end: end.payload,
      };
      state.push(todo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
