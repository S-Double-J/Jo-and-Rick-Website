import NavBar from "./Components/NavBar";
import styled from "styled-components";

const Gradient = styled.div`
  height: 255px;
  width: max;
  background: linear-gradient(rgba(0, 0, 0, 0.76) 60%, rgba(0, 0, 0, 0));
`;

function App() {
  return (
    <>
      <img src="./Images/TheAncestorInMe/8-TheAncestorInMe.jpg" />
      <Gradient>
        <div>
          <NavBar></NavBar>
        </div>
      </Gradient>
    </>
  );
}

export default App;
