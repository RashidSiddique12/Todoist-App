// App component
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Body from "./components/content/ProjectContent";
import MyProjects from "./components/content/MyProjects";
import PageNotFound from "./components/handler/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* Nested route */}
            <Route path="/" element={<MyProjects/>}/>
            <Route path="project/:id/" element={<Body />} />
          </Route>
          <Route path="*" element={<PageNotFound message="Page not found"/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
