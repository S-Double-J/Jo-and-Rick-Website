import styled from "styled-components";
import { MotionConfig, motion } from "framer-motion";
import { HashLink as HLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const HamburgerButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type ClickHandler = React.MouseEventHandler<HTMLElement>;

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
function Menu({ active, setActive }: Props) {
  const pages = ["Live", "About", "Music", "News", "Contact"];
  const handleClick: ClickHandler = () => {
    setActive((prevValue) => !prevValue);
  };

  return (
      <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
        <motion.div
          className="menu-background"
          animate={active ? "open" : "closed"}
          style={{
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
          <HamburgerButtonContainer onClick={handleClick}>
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
            <Link className="burger-button" to="the_ancestor_in_me">
              <p className="nav-font">THE ANCESTOR IN ME // AVAILABLE NOW</p>
            </Link>
          </HamburgerButtonContainer>
        </motion.div>
      </MotionConfig>
  );
}

export default Menu;
