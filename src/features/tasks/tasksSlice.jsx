import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
    description: "This is a task",
    file: null,
  },
  {
    id: "2",
    title: "Task 2",
    completed: false,
    description: "This is a task",
    file : null,
  },
];

const userSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addLayer: (state, action) => {
      state.push(action.payload);
    },
    editLayer: (state, action) => {
      const { id, title, description, file } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
        foundTask.file = file;
      }
    },
    deleteLayer: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);
      }
    },
  },
});

export const { addLayer, editLayer, deleteLayer } = userSlice.actions;
export default userSlice.reducer;
