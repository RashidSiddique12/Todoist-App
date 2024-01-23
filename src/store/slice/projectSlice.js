import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectData: [],
  // newProjectName : "",
  // isFav: false
  favData:[]
};

const projectSlice = createSlice({
  name: "Projects",
  initialState,
  reducers: {
    setProjectData: (state, action) => {
      state.projectData = action.payload;
    },
    addNewProject: (state, action) => {
      state.projectData.push(action.payload);
      // state.newProjectName = ""
    },
    deleteProject: (state, action) => {
      state.projectData = state.projectData.filter(
        (project) => project.id !== action.payload
      );
    },
    setEditProject: (state, action) => {
      state.projectData = state.projectData.map((project) => {
        if (project.id === action.payload.projectId) {
          return action.payload.res;
        } else {
          return project;
        }
      });
    },
    setFavData: (state, action)=>{
      state.favData = action.payload
    }
    // setNewProjectName : (state, action)=>{
    //     state.newProjectName = action.payload
    // },
    // setIsFav :(state, action)=>{
    //     state.isFav = action.payload
    // }
  },
});

export const { setProjectData, addNewProject, deleteProject, setEditProject, setFavData } =
  projectSlice.actions;

export default projectSlice.reducer;
