import styled from "styled-components";
import "../../Animations/ButtonHover.css";

const GlobalButton = styled.button`
  background: transparent;
  color: white;
  font-size: 1.3rem;
  border: transparent;
  padding: 0.01rem 1rem;
`;

interface ButtonProps {
  children: string;
}
function PageButton({ children }: ButtonProps) {
  return <GlobalButton className="home-button">{children}</GlobalButton>;
}

export default PageButton;
