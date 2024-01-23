import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavData } from "../../../store/slice/projectSlice";
import ProjectList from "../projects/ProjectList";

function FavoriteSection() {
  const [show, setShow] = useState(false);
  const { projectData, favData } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    const data =
      projectData &&
      projectData.filter((project) => project.isFavorite === true);

    dispatch(setFavData(data));
  }, [projectData]);

  useEffect;
  return favData.length > 0 ? (
    <div className="menuDiv favDiv">
      <div className="menuTitle">
        <h3>Favorites</h3>
        <div onClick={() => setShow((prev) => !prev)}>
          {" "}
          {show ? <DownOutlined /> : <RightOutlined />}
        </div>
      </div>
      {show ? <ProjectList data={favData} /> : null}
    </div>
  ) : null;
}

export default FavoriteSection;
