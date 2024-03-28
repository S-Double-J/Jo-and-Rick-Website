import styled from "styled-components";
import Button from "./Button";

const PagesContainer = styled.div`
  padding;
  align-text; center;
`;
const HomeContainer = styled.div`
`;
function NavBar() {
  const pages = ["Live", "News", "Music", "Store", "About", "Contact"];
  return (
    <HomeContainer>
      <Button key="Home">Jo Jukes and Rick Wilson</Button>
      <PagesContainer>
        {pages.map((page) => (
          <Button key={page}>{page}</Button>
        ))}
      </PagesContainer>
    </HomeContainer>
  );
}

export default NavBar;
