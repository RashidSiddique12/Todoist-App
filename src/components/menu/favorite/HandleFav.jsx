import { HeartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProjectEP } from "../../../api";
import { setEditProject } from "../../../store/slice/projectSlice";

function HandleFav({ projectId }) {
  const { projectData } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(null);
  const [editProjectName, setEditProjectName] = useState("");

  useEffect(() => {
    projectData &&
      projectData.map((project) => {
        if (project.id === projectId) {
          setIsFavorite(project.isFavorite);
          setEditProjectName(project.name);
        }
      });
  }, [projectId]);

  const handlefavorite = async () => {
    const updatedFavorite = !isFavorite;
    setIsFavorite(updatedFavorite);

    try {
      console.log("2", updatedFavorite);
      const res = await EditProjectEP(
        projectId,
        editProjectName,
        updatedFavorite
      );
      console.log(res);
      dispatch(setEditProject({ projectId, res }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={handlefavorite}>
      <span>
        <HeartOutlined />
      </span>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </div>
  );
}

export default HandleFav;
