import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo, ToDoList } from "../../../types/types";

const toDoInitialState: ToDoList = {
  list: [],
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState: toDoInitialState,
  reducers: {
    loadToDoTask: (
      currentToDoListState,
      action: PayloadAction<ToDo[]>
    ): ToDoList => ({ ...currentToDoListState, list: [...action.payload] }),

    removeToDoTask: (
      currentToDoListState,
      action: PayloadAction<number>
    ): ToDoList => ({
      list: currentToDoListState.list.filter(({ id }) => id !== action.payload),
    }),
  },
});

export const toDoReducer = toDoSlice.reducer;

export const {
  loadToDoTask: loadToDoTaskActionCreator,
  removeToDoTask: removeToDoTaskActionCreator,
} = toDoSlice.actions;
