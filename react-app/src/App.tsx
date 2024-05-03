import NavBar from "./Components/NavBar";
import styled from "styled-components";
import LiveTable from "./Components/LiveTable";
import Music from "./Components/Music";
import News from "./Components/News";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "../style.css";
const Gradient = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.76);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Background = styled.div`
  background: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;
const ScrollContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 0;
`;
const Empty = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <Background className="background-loop">
        <NavBar />
        <ScrollContainer>
          <Empty />
          <Gradient>
            <LiveTable />
            <About />
            <Music />
            <News />
            <Contact />
          </Gradient>
        </ScrollContainer>
      </Background>
    </>
  );
}

export default App;
