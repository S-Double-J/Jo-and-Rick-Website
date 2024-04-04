import styled from "styled-components";
import "../../Animations/HomeButtonHover.css"

const Button = styled.button`
  background: transparent;
  color: white;
  font-size: 4em;
  border-style: solid;
  border-color: rgba(1, 1, 1, 0);
  font-weight: 100;
`;

interface ButtonProps {
  children: string;
}
function HomeButton({ children }: ButtonProps) {
  return (
      <Button className="home-button">{children}</Button>
  );
}

export default HomeButton;
