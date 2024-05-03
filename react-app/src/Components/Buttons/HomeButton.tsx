import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  color: white;
  font-size: 2.5rem;
  border: 1px solid transparent;
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
