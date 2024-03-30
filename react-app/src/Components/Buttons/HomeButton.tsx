import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  color: white;
  font-size: 4rem;
  border: transparent;
  font-weight: 100;
`;

interface ButtonProps {
  children: string;
}
function HomeButton({ children }: ButtonProps) {
  return (
      <Button>{children}</Button>
  );
}

export default HomeButton;
