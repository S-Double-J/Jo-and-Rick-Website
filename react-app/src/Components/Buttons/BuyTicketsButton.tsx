import styled from "styled-components";
import "../../Animations/ButtonHover.css";

const GlobalButton = styled.button`
  background: transparent;
  color: black;
  font-size: 1em;
  border: 1px solid white;
  width: 8em;
  margin: 0.3em;
`;

interface ButtonProps {
  children: string;
}
function BuyTicketsButton({ children }: ButtonProps) {
  return <GlobalButton className="custom-button">{children}</GlobalButton>;
}

export default BuyTicketsButton;