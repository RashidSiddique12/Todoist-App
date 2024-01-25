import { TodoistApi } from "@doist/todoist-api-typescript";
const api = new TodoistApi("2e827725a96d8fb413047e8be566394b81ee0bfd");

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

export const getTasksEP = (projectId) => {
  return api.getTasks({ project_id: projectId });
};

export const addTaskEP = (projectId, content, description) => {
  return api.addTask({
    project_id: projectId,
    content,
    description,
  });
};

export const deleteTaskEP = (taskId) =>{
 return api.deleteTask(taskId)
}

export const editTaskEP = (taskId, content, description) => {
  return api.updateTask(taskId, {
    content,
    description,
  });
}