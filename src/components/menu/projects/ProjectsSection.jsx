import { useEffect, useState } from "react";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { getProject } from "../../../api";
import { setProjectData } from "../../../store/slice/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddProject from "./AddProject";
import LoadingEle from "../../handler/LoadingEle";
import ProjectList from "./ProjectList";
import { Alert } from "antd";

function ProjectsSection() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { projectData } = useSelector((state) => state.project);
  // console.log(projectData);

  const fetchProjectData = async () => {
    try {
      const res = await getProject();
      dispatch(setProjectData(res));
    } catch (error) {
      console.log("error");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return (
    <div className="menuDiv">
      <div className="menuTitle">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h3>My Projects</h3>
        </Link>
        <div className="ProjectAction">
          <AddProject />

          <div onClick={() => setShow((prev) => !prev)}>
            {" "}
            {show ? <DownOutlined /> : <RightOutlined />}
          </div>
        </div>
      </div>
      {show ? (
        <>
          {error && (
            <Alert
              message={error}
              type="error"
              showIcon
              closable
              onClose={() => setError(null)}
              style={{
                position: "fixed",
                top: 10,
                right: 10,
                width: "50%",
                zIndex: 9,
              }}
            />
          )}
          {loading ? <LoadingEle /> : <ProjectList data={projectData} />}
        </>
      ) : null}
    </div>
  );
}

export default ProjectsSection;
