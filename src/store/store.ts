import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "../redux/features/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});

export default store;
