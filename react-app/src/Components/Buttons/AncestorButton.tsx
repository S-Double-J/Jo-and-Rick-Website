import styled from "styled-components";

const GlobalButton = styled.button`
  background: transparent;
  color: white;
  font-size: 2rem;
  border: 1px solid white;
  width: 70%;
  margin: .3rem;
`;

interface ButtonProps {
  children: string;
}
function AncestorButton({ children }: ButtonProps) {
  return (
    <div>
      <GlobalButton>{children}</GlobalButton>
    </div>
  );
}

export default AncestorButton;
