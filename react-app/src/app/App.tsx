import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./App.css";
import Home from "../pages/Home";
import { Background } from "../components/Background";
import AncestorAlbum from "../pages/AncestorAlbum";
import WeavingAlbum from "../pages/WeavingAlbum";
import AboutPage from "../pages/AboutPage";
import RickNews from "../pages/news_pages/RickNews";
import JoNews from "../pages/news_pages/JoNews";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Background />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="the_ancestor_in_me/*" element={<AncestorAlbum />} />
          <Route path="weaving_the_world/*" element={<WeavingAlbum />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="jo_news" element={<JoNews />} />
          <Route path="rick_news" element={<RickNews />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
