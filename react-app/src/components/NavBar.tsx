import { useState } from "react";
import { HashLink as HLink } from "react-router-hash-link";
import styled from "styled-components";
import AncestorButton from "./buttons/AncestorButton";
import HomeButton from "./buttons/HomeButton";
import { motion, MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";

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
const HamburgerButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type ClickHandler = React.MouseEventHandler<HTMLElement>;


function NavBar() {
  const pages = ["Live", "About", "Music", "News", "Contact"];
  const [active, setActive] = useState(false);
  const handleClick: ClickHandler = () => {
    setActive((prevValue) => !prevValue);
};


  if (window.innerWidth <= 743) {
    return (
      <>
        <MajorContainer>
          <HomeContainer>
            <HomeButton key="Home">JO JUKES AND RICK WILSON</HomeButton>
          </HomeContainer>
          <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
            <motion.button
              initial={false}
              onClick={handleClick}
              className="hamburger"
              animate={active ? "open" : "closed"}
            >
              <motion.span
                className="hamburger-span"
                style={{
                  left: "50%",
                  top: "35%",
                  x: "-50%",
                  y: "-50%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "45deg"],
                    top: ["35%", "50%", "50%"],
                  },
                  closed: {
                    rotate: ["45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "35%"],
                  },
                }}
              />
              <motion.span
                className="hamburger-span"
                style={{
                  left: "50%",
                  top: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "-45deg"],
                  },
                  closed: {
                    rotate: ["-45deg", "0deg", "0deg"],
                  },
                }}
              />
              <motion.span
                className="hamburger-span"
                style={{
                  left: "50%",
                  bottom: "35%",
                  x: "-50%",
                  y: "50%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "45deg"],
                    bottom: ["35%", "50%", "50%"],
                  },
                  closed: {
                    rotate: ["45deg", "0deg", "0deg"],
                    bottom: ["50%", "50%", "35%"],
                  },
                }}
              />
            </motion.button>
          </MotionConfig>
        </MajorContainer>
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.div
            className="menu-background"
            animate={active ? "open" : "closed"}
            style={{
              position: "absolute",
              left: "100%",
              bottom: "0",
            }}
            variants={{
              open: {
                left: "0",
              },
              closed: {
                left: "100%",
              },
            }}
          >
            <HamburgerButtonContainer
            onClick={handleClick}>
            {pages.map((page, index) => (
              <HLink
                className="burger-button"
                key={index}
                to={`/#${page}`}
                smooth={true}
              >
                <p className="nav-font">{page}</p>
              </HLink>
            ))}
            <Link className="burger-button" to="the_ancestor_in_me"
            ><p className="nav-font">
            THE ANCESTOR IN ME // AVAILABLE NOW</p></Link>
            </HamburgerButtonContainer>
          </motion.div>
        </MotionConfig>
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
