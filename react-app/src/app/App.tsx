import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./App.css";
import Home from "../pages/Home";
import { Background } from "../components/Background";
import AncestorAlbum from "../pages/AncestorAlbum";
import WeavingAlbum from "../pages/WeavingAlbum";
import AboutPage from "../pages/AboutPage";
import styled from "styled-components";
import Menu from "../components/HamburgerMenu";
import { useState } from "react";

const Container = styled.div`
  height: 100svh;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100vw;
  position: relative;
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    cursor: pointer;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #3a3a3a;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #868686;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(0, 140, 255);
  }
`;
function App() {
  const [active, setActive] = useState(false);
  return (
    <BrowserRouter>
      <Background />
      <Container id="Container">
        <NavBar key="Nav-bar" active={active} setActive={setActive} />
        <Menu key="Hamburger-menu" active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="the_ancestor_in_me/*" element={<AncestorAlbum />} />
          <Route path="weaving_the_world/*" element={<WeavingAlbum />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
