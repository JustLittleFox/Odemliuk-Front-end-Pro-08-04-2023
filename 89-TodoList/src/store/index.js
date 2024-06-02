import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [

    ],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    deleteAll: (state) => {
      state.value = [];
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((item, i) => i !== action.payload);
    },
    updateIsCompleted: (state, action) => {
      state.value[action.payload].isCompleted =
        !state.value[action.payload].isCompleted;
    },
  },
});

export const { add, deleteAll, deleteTodo, updateIsCompleted } =
  todoSlice.actions;
export default configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
