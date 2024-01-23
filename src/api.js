import { TodoistApi } from "@doist/todoist-api-typescript";
const api = new TodoistApi("2e827725a96d8fb413047e8be566394b81ee0bfd");

// Projects:
// List all projects
// Create a new project
// Edit a project
// Delete a project

export const getProject = () => {
  return api.getProjects();
};

export const AddProjectEP = (newProjectName, isFavorite) => {
  return api.addProject({ name: newProjectName, isFavorite: isFavorite });
};

export const deleteProjectEP = (projectId) => {
  return api.deleteProject(projectId);
};

export const EditProjectEP = (projectId, editProjectName, isFavorite) => {
  return api.updateProject(projectId, {
    name: editProjectName,
    isFavorite: isFavorite,
  });
};

// export const favEP = (projectId, updatedFavorite) => {
//   return api.updateProject(projectId, {name: "rr", isFavorite: updatedFavorite });
// };
