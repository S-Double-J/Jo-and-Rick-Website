import styled from "styled-components";
import AncestorButton from "./buttons/AncestorButton";
import HomeButton from "./buttons/HomeButton";
import { HashLink as HLink } from "react-router-hash-link";
import Hamburger from "./buttons/Hamburger";

const MajorContainer = styled.div`
  display: flex;
  height: 117px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.76);
  position: sticky;
  top: 0;
  z-index: 10;
  overflow: hidden;
`;
const HomeContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  z-index: 11;
  flex-grow: 1;
`;
const PagesButtonContainer = styled.div`
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
  z-index: 11;
  @media (max-width: 743px) {
    display: none;
  }
`;


interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavBar({active, setActive}: Props) {
  const pages = ["Live", "About", "Music", "News", "Contact"];

  if (window.innerWidth <= 743) {
    return (
      <>
        <MajorContainer>
          <HomeContainer>
            <HomeButton key="Home">JO JUKES AND RICK WILSON</HomeButton>
          </HomeContainer>
          <Hamburger active={active} setActive={setActive}/>
        </MajorContainer>
      </>
    );
  } else {
    return (
      <>
        <MajorContainer>
          <HomeContainer>
            <HomeButton key="Home">JO JUKES AND RICK WILSON</HomeButton>
          </HomeContainer>
          <PagesButtonContainer>
            {pages.map((page, index) => (
              <HLink
                className="nav-button"
                key={index}
                to={`/#${page}`}
                smooth={true}
              >
                <p className="nav-font">{page}</p>
              </HLink>
            ))}
            <AncestorButton />
          </PagesButtonContainer>
        </MajorContainer>
      </>
    );
  }
}

export default NavBar;
