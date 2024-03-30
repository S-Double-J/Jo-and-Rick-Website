import NavBar from "./Components/NavBar";
import styled from "styled-components";

const Gradient = styled.div`
  height: 260px;
  width: max;
  background: linear-gradient(rgba(0, 0, 0, 0.76) 60%, rgba(0, 0, 0, 0));
`;
const Background = styled.div`
  background: url('./src/Images/TheAncestorInMe/8-TheAncestorInMe.jpg');
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
    </>
  );
}

export default App;
