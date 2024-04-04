import NavBar from "./Components/NavBar";
import styled from "styled-components";
import LiveTable from "./Components/LiveTable";
import Music from "./Components/Music";
import News from "./Components/News";
import About from "./Components/About";

const Background = styled.div`
  background: url("./src/Images/TheAncestorInMe/8-TheAncestorInMe.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <>
      <Background>
        <NavBar></NavBar>
      </Background>
      <LiveTable />
      <About />
      <Music></Music>
      <News></News>
    </>
  );
}

export default App;
