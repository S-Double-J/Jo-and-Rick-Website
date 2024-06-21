import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const Button = styled(Link)`
  background: transparent;
  color: white;
  font-size: 40px;
  border: 1px solid transparent;
  font-weight: 100;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  @media (max-width: 900px) {
  font-size: 30px;
  } 
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

interface ButtonProps {
  children: string;
}
function HomeButton({ children }: ButtonProps) {
  return (
      <Button className="home-button" to="/#Home" smooth={true}>{children}</Button>
  );
}

export default HomeButton;