import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import ProjectsSection from "./projects/ProjectsSection";
import FavoriteSection from "./favorite/FavoriteSection";

function SideMenu() {

  
  // const handleItemClick = () => {};
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
          border: "1px solid black",
        }}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <ProjectsSection/>
        <FavoriteSection/>
      </Sider>
    </div>
  );
}

export default SideMenu;
