import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksData: {},
  loading: {},
  error: {},
  newcontent: "",
  newDescription: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    displayTasks: (state, action) => {
      const { id, data } = action.payload;
      state.tasksData[id] = data;
      state.loading[id] = false;
    },
    addNewTask: (state, action) => {
      const { id, data } = action.payload;
      state.tasksData[id].push(data);
      state.newcontent = "";
      state.newDescription = "";
    },
    deleteTask: (state, action) => {
      const { taskId, projectId } = action.payload;
      state.tasksData[projectId] = state.tasksData[projectId].filter(
        (task) => task.id !== taskId
      );
    },
    updateTask: (state, action) => {
      const { taskId, projectId, res } = action.payload;
      state.tasksData[projectId] = state.tasksData[projectId].map((task) => {
        if (task.id === taskId) {
          return res;
        }
        return task;
      });
    },
    // closeTask:(state, action)=>{
    //   const {taskId, projectId} = action.payload;
    //   state.tasksData[projectId] = state.tasksData[projectId].filter((task)=>{task.id !== taskId})
    // },
    setNewContent: (state, action) => {
      state.newcontent = action.payload;
    },
    setNewDescription: (state, action) => {
      state.newDescription = action.payload;
    },
  },
});

export default taskSlice.reducer;
export const {
  displayTasks,
  addNewTask,
  setNewContent,
  setNewDescription,
  deleteTask,
  updateTask,
  closeTask,
} = taskSlice.actions;
