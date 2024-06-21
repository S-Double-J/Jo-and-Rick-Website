import { Link } from "react-router-dom";
import styled from "styled-components";
const Button = styled(Link)`
  margin-top: 2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-items: center;
  height: 63px;
  width: 450px;
  overflow: hidden;
  position: relative;
`;

const ButtonText = styled.p`
  font-size: 30px;
  z-index: 2;
  @media (max-width: 900px) {
  }
`;

function AncestorButton() {
  return (
    <Button className="nav-button" to="the_ancestor_in_me">
      <ButtonText className="nav-font">
        THE ANCESTOR IN ME // AVAILABLE NOW
      </ButtonText>
    </Button>
  );
}

export default AncestorButton;