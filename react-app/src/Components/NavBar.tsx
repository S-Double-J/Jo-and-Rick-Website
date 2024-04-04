import styled from "styled-components";
import PageButton from "./Buttons/PageButton";
import HomeButton from "./Buttons/HomeButton";
import AncestorButton from "./Buttons/AncestorButton";
const Gradient = styled.div`
  height: 15rem;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.76) 60%, rgba(0, 0, 0, 0));
  position: absolute;
  display: flex;
  `;
  const MajorContainer = styled.div`
  display: flex;
  height: 10rem;
  justify-content: center;
  width: 100vw;
`;
const HomeContainer = styled.div`
  width: 30rem;
  margin: 10px 40px;
  display: flex;
  z-index: 1;
  flex-grow: 1;
`;
const PagesContainer = styled.div`
  width: 35rem;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
  z-index: 1;
`;
function NavBar() {
  const pages = ["Live", "News", "Music", "Store", "About", "Contact"];
  return (
    <Gradient>
      <MajorContainer>
        <HomeContainer>
          <HomeButton key="Home">JO JUKES AND RICK WILSON</HomeButton>
        </HomeContainer>
        <PagesContainer>
          {pages.map((page) => (
            <PageButton key={page}>{page}</PageButton>
          ))}
          <AncestorButton>The Ancestor in Me // Available now</AncestorButton>
        </PagesContainer>
      </MajorContainer>
    </Gradient>
  );
}

export default NavBar;
