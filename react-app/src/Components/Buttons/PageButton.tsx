import styled from "styled-components";

const GlobalButton = styled.button`
  background: transparent;
  color: white;
  font-size: 1.3rem;
  border: transparent;
  margin: 10px 20px 10px 0px;
`;

interface ButtonProps {
  children: string;
}
function PageButton({ children }: ButtonProps) {
  return (
    <div>
      <GlobalButton>{children}</GlobalButton>
    </div>
  );
}

export default PageButton;
