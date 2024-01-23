import React, { createElement } from "react";

import { Layout } from "antd";
import SideMenu from "../components/menu/SideMenu";
import { Outlet } from "react-router-dom";
const { Header, Content } = Layout;

const Home = () => {
  return (
    <Layout hasSider>
      <SideMenu />
      <Layout
        style={{
          marginLeft: 250,
          // border : "1px solid black",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: "white",
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            backgroundColor : "white",
            border : "1px solid black",
            minHeight : "85vh"
          }}
        >
         <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
