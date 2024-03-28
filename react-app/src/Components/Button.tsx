import styled from "styled-components";

const GlobalButton = styled.button`
  background: transparent;
  color: white;
`;

interface ButtonProps {
  children: string;
}
function Button({ children }: ButtonProps) {
  return (
    <div>
      <GlobalButton>{children}</GlobalButton>
    </div>
  );
}

export default Button;
