import Sider from "antd/es/layout/Sider";
import ProjectsSection from "./projects/ProjectsSection";
import FavoriteSection from "./favorite/FavoriteSection";
import AddTask from "./addTask/AddTask";

function SideMenu() {
  return (
    <div>
      <Sider
        width="250"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "#f6efee",
          // border: "1px solid black",
          // color : "rgb(77, 77, 77)"
        }}
      >
        <AddTask />
        <ProjectsSection />
        <FavoriteSection />
      </Sider>
    </div>
  );
}

export default SideMenu;
